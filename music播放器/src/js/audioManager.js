(function ($, root) {
  var $scope = $(document.body)
  function audioManager () {
    this.audio = new Audio()
    this.status = 'pause'
    this.bindEvent()
  }
  audioManager.prototype = {
    // 绑定监听歌曲完成操作
    bindEvent: function () {
      this.audio.onended = function () {
        $scope.find('.next-btn').trigger('click')
      }
    },
    play: function () {
      this.audio.play()
      this.status = 'play'
    },
    pause: function () {
      this.audio.pause()
      this.status = 'pause'
    },
    setAudioSouce: function (src) {
      this.audio.src = src
      this.audio.load()
    },
    jumpToplay: function (time) {
      console.log(time)
      this.audio.currentTime = time
      if (this.status === 'play') {

        this.play()
      }
    }
  }
  root.audioManager = audioManager
})(window.Zepto, window.player || (window.player = {}))
