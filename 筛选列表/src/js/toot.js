// 解析数组挂载列表
function randerPageArr(personArr) {
    var htmlArrStr = ''
    personArr.forEach(function(item){
        htmlArrStr += '<li>' +  'name: ' + item.name + ' age: ' + item.age + ' sex: ' +item.sex + ' email: '+item.emali
        oUl.innerHTML = htmlArrStr
    })
}
// 过滤数组获得目标数组
function filterPersonArr(allPersonArr,val){
    return allPersonArr.filter(function(item){
        return item.name.indexOf(val) !== -1
    })
}
// 增加年龄
function addAge(){
    lastArr.forEach(function(ele){
        ele.age++
    })
    randerPageArr(lastArr)
}
// 过滤性别

function sex(e){
    e =e ||window.event
    function filterSex(sex){

        randerPageArr(
            lastArr = filterArr.filter(function(ele){
                return sex==='all'?  true :  ele.sex ===sex
            })
        )
    
    }
    filterSex(e.target.innerText)
}