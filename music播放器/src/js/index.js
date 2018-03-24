var $ = window.Zepto
console.log($)
var root = window.player
var $scope = $('body')
var songList = {}
var controlMannager
var audio = new root.audioManager()
function bindTouck () {
  var $slidePoint = $scope.find('.slider-point')
  var offset = $scope.find('.pro-wrapper').offset()
  var left = offset.left
  var width = offset.width
  console.log(offset)
  $slidePoint.on('touchstart', function () {
    root.progress.stop()
  }).on('touchmove', function (e) {
    var x = e.changedTouches['0'].clientX
    var percent = (x - left) / width
    // console.log(percent)
    if (percent < 0 || percent > 1) {
      percent = 0
    }
    root.progress.upData(percent)
  }).on('touchend', function (e) {
    var x = e.changedTouches['0'].clientX
    var percent = (x - left) / width
    if (percent < 0 || percent > 1) {
      percent = 0
    }
    var curduration = songList[controlMannager.index].duration
    var curTime = curduration * percent
    audio.jumpToplay(curTime)
    if (audio.status === 'play') {
      root.progress.start(percent)
    }
  })
}
function bindEvent () {
  $scope.on('play:change', function (e, index, flag) {
    // console.log(index);
    root.progress.renderAllTime(songList[index].duration)
    root.render(songList[index])
    audio.setAudioSouce(songList[index].audio)
    console.log(flag);
    if (audio.status === 'play' || flag === true) {
      // root.progress.start()
      audio.audio.play()
      root.progress.start()
    }
    root.progress.upData(0)
  })
  $scope.on('click', '.prev-btn', function () {
    var index = controlMannager.prev()
    $scope.trigger('play:change', index)
  })
  $scope.on('click', '.next-btn', function () {
    var index = controlMannager.next()
    $scope.trigger('play:change', index)
  })
  $scope.on('click', '.play-btn', function () {
    if (audio.status === 'play') {
      $(this).toggleClass('playing')
      audio.pause()
      root.progress.stop()
    } else {
      $(this).toggleClass('playing')
      audio.play()
      root.progress.start()
    }
  })
  $scope.on('click', '.close-btn', function () {
    root.playList.show(controlMannager)
  })
  $scope.on('click', '.list-btn', function () {
    root.playList.show(controlMannager)
  })
}

function getData (url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function (data) {
      console.log(data)
      controlMannager = new root.ControlMannager(data.length)
      songList = data
      root.playList.renderList(data)
      bindTouck()
      bindEvent()
      root.playList.bindEvent()
      $scope.trigger('play:change', 0)
    },
    error: function () {
      console.log('error')
    }
  })
}
getData('../mock/data.json')
