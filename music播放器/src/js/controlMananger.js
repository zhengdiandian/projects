(function ($, root) {
  function ControlMannager (length) {
    this.index = 0
    this.length = length
  }
  ControlMannager.prototype = {
    prev: function () {
      return this.getIndex(-1)
    },
    next: function () {
      return this.getIndex(1)
    },
    getIndex: function (val) {
      var index = this.index
      var len = this.length
      var curIndex = (index + val + len) % len
      this.index = curIndex
      return curIndex
    }
  }
  root.ControlMannager = ControlMannager
})(window.Zepto, window.player || (window.player = {}))
