require('../less/item2.less')

var item1 = {
  init: function () {
    this.bindEvent()
  },
  bindEvent: function () {
    document.getElementsByClassName('item2')[0].onclick = this.changColor
  },
  changColor: function () {
    console.log(this)
    this.style.width = '200px'
  }
}
module.exports = item1
