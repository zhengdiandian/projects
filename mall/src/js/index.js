require('../css/index.less')
console.log('index')
let $ = require('jquery')
function getGoodsList (cb) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:8080/api/goodsList.json',
    dataType: 'json',
    timeout: 8000,
    success: function (data) {
      console.log(data)
      cb(data)
    },
    error: function (error) {
      console.log(error)
    }
  })
}
getGoodsList(createList)
function createList (data) {

}