(function ($, root) {
  var $scope = $(document.body)
  function renderInfo (info) {
    var html = '<div class="song-name">' + info.song + '</div>' +
    '<div class="songer-name">' + info.singer + '</div>' +
    '<div class="album-name">' + info.album + '</div>'
    $scope.find('.song-info').html(html)
  }
  // 渲染歌曲图片
  function renderImg (src) {
    var oimg = new Image()
    oimg.src = src
    oimg.onload = function () {
      root.blurImg(oimg, $scope)
      $scope.find('.song-img img').attr('src', src)
    }
  }
  function renderIsLike (isLike) {
    if (isLike) {
      $scope.find('.like-btn').addClass('liking')
    } else {
      $scope.find('.like-btn').removeClass('liking')
    }
  }
  root.render = function (data) {
    renderInfo(data)
    renderImg(data.image)
    renderIsLike(data.isLike)
  }
})(window.Zepto, window.player || (window.player = {}))
