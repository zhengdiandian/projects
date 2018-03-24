require('../less/item1.less')

var item1 = {
  init: function () {
    this.bindEvent()
  },
  bindEvent: function () {
    document.getElementsByClassName('item1')[0].onclick = this.changColor
  },
  changColor: function () {
    console.log(this)
    this.style.background = 'pink'
  }
}
module.exports = item1
