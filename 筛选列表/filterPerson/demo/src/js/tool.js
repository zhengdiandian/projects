 function randerPageByArr(personArr) {
    var htmlArrStr = '';
    personArr.forEach(function (ele, index) {
        htmlArrStr += '<li>'+ 'name: ' + ele.name + ', age: ' + ele.age + ', sex: '+ ele.sex +'</li>'
    })
    oUl.innerHTML = htmlArrStr;
}
//根据name筛选数组
function filterPersonArr(allPersonArr, val) {
    return  allPersonArr.filter(function (ele, index) {
        return ele.name.indexOf(val) != -1;
    })
}
//把筛选出来的数组年龄加1
function addAge(filterArr) {
    return filterArr.map(function (ele, index) {
        ele.age++;
        return ele;
    })
}
// 筛选性别
function filterSex(filterArr, sex) {
    return filterArr.filter(function (ele, index) {
        return sex === 'all' ? true : ele.sex === sex;
    })
}

