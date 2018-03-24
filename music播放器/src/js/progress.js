(function ($, root) {
  var $scope = $(document.body)
  var curDuretion
  var frameId
  var lastPercent = 0
  var startTime = 0
  // 总时间转换成分秒
  function formtTime (duration) {
    duration = Math.round(duration)
    var minute = Math.floor(duration / 60)
    var second = duration - minute * 60
    if (minute < 10) {
      minute = '0' + minute
    }
    if (second < 10) {
      second = '0' + second
    }
    // console.log(duration);
    return minute + ' : ' + second
  }
  function renderAllTime (duration) {
    lastPercent = 0
    startTime = 0
    startTime = 0
    var allTime = formtTime(duration)
    curDuretion = duration
    $scope.find('.all-time').html(allTime)
  }
  function upData (precent) {
    // console.log(precent);
    var curTime = precent * curDuretion
    curTime = formtTime(curTime)
    $scope.find('.cur-time').html(curTime)
    var percnetage = (precent - 1) * 100 + '%'
    $scope.find('.pro-top').css({
      transform: 'translateX(' + percnetage + ')'
    })
  }
  function start (percentage) {
    window.cancelAnimationFrame(frameId)
    lastPercent = percentage === undefined ? lastPercent : percentage
    startTime = new Date().getTime()
    function frame () {
      var curTime = new Date().getTime()
      var precent = lastPercent + (curTime - startTime) / (curDuretion * 1000)
      if (precent <= 1) {
        frameId = window.requestAnimationFrame(frame)
        upData(precent)
      } else {
        window.cancelAnimationFrame(frameId)
      }
      // console.log(precent); 
    }
    frame()
  }
  function stop () {
    var stopTime = new Date().getTime()
    lastPercent += (stopTime - startTime) / (curDuretion * 1000)
    window.cancelAnimationFrame(frameId)
  }
  root.progress = {
    renderAllTime: renderAllTime,
    start: start,
    stop: stop,
    upData: upData
  }
})(window.Zepto, window.player || (window.player = {}))
