var oUl = document.getElementById('ul')

var allPersonArr = [
    {name: '邓旭明', age: 55, sex: 'male', email: 'dg@163.com'},
    {name: '邓嫂子', age: 20, sex: 'female', email: 'ds@163.com'},
    {name: '邓小宝', age: 5, sex: 'male', email: 'dxb@163.com'},
    {name: '刘朝旭', age: 18, sex: 'male', email: 'lzx@qq.com'},
    {name: '刘朝君', age: 22, sex: 'female', email: 'lzj@qq.com'},
    {name: '刘德华', age: 22, sex: 'male', email: 'lzj@qq.com'},
    {name: '宋小宝', age: 40, sex: 'male', email: 'sxb@163.com'},
    {name: '小宝宝', age: 1, sex: 'female', email: 'sxb@163.com'}
]

var filterArr = allPersonArr
var lastSex = 'all'


function bindEventByActions(actions) {
    actions.forEach(function (ele, index) {
        switch(ele.type) {
        case 'filterName':
            ele.doc.oninput = function () {
                randerPageByArr(
                    filterArr = filterPersonArr(allPersonArr,this.value)
                )
                lastSex = 'all'
            }
            break
        case 'addAge':
            ele.doc.onclick = function () {
                randerPageByArr(addAge(
                    filterSex(filterArr, lastSex)
                ))
            }
            break
        case 'filterSex': 
            ele.doc.onclick = function () {
                randerPageByArr(
                    filterSex(filterArr, lastSex = ele.prame)
                ) 
            }
        }
    })
}
bindEventByActions(actions)

