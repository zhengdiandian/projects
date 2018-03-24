
function bindEventByActions(actions){
    actions.forEach(function(el) {
        switch(el.type){
        case 'filterName':
            el.doc.oninput = function(){
                randerPageArr(filterArr= filterPersonArr(allPersonArr,this.value))
            }
            break
        case 'addAge':
            el.doc.addEventListener('click',addAge)
            break
        case 'filterSex':
            el.doc.addEventListener('click',sex)


        }
    })
}
bindEventByActions(actions)
// oFemale.onclick = sex
// oMale.onclick = sex
// oAll.onclick = sex
// oAge.addEventListener('click',addAge)
// oIpn.oninput = function(){
//     randerPageArr(filterArr= filterPersonArr(allPersonArr,this.value))
// // console.log(this.value)
// }