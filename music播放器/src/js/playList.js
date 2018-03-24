(function ($, root) {
  var $scope = $(document.body)
  var $playList = $('<div class ="play-list">' +
   '<div class="play-header">播放列表</div>' +
    '<ul class="list-wrapper"></ul>' +
     '<div class="close-btn">关闭</div>' +
     '</div>')
  //  渲染播放列表
  function renderList (songList) {
    var html = ''
    var length = songList.length
    for (var i = 0; i < length; i++) {
      html += '<li><h3>' + songList[i].song + '<span>' + songList[i].singer + '</span>' + '</h3></li>'
    }
    $playList.find('ul').html(html)
    $scope.append($playList)
  }
  function show (control) {
    $('.play-list').toggleClass('show')
    console.log(control);
    signSong(control.index)
  }
  function signSong (index) {
    console.log(index);
    var a = $('.list-wrapper li').removeClass('sign')
    console.log(a);
    $('.list-wrapper li').eq(index).addClass('sign')
  }
  function bindEvent () {
    $('.play-list li').on('click', function () {
      var index = $(this).index()
      // audio.audio.play()
      // if (controlMannager.index === index) {
      //   audio.audio.pause()
      //   $('.play-btn').removeClass('playing')
      //   return
      // }
      signSong(index)
      controlMannager.index = index
      // $scope.trigger('play:change', {}, index, true)
      audio.setAudioSouce(songList[index].audio)
      audio.audio.play()
      root.progress.start(0)
      root.render(songList[index])
      // if () {

      // }
      audio.status = 'play'
      $('.play-btn').addClass('playing')
    })
  }
  root.playList = {
    renderList: renderList,
    show: show,
    bindEvent: bindEvent
  }
})(window.Zepto, window.player || (window.player = {}))
