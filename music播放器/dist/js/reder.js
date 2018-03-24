(function ($, root) {
  function a() {
    console.log("a");
  }
  root.a = a
})(window.Zepto, window.player || (window.player = {}))
