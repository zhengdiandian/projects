var lis = document.getElementsByTagName('li')
lis = Array.prototype.slice.call(lis)
console.log(lis)
lis.forEach(function(ele){
    
    ele.addEventListener('mouseenter',function(e){
        ele.spec = getSpec(ele)
        addClass(ele,e,'in-')
    })
    ele.addEventListener('mouseleave',function(e){
        addClass(ele,e,'out-')
    })

})
function getSpec(ele) {
    return {
        w: ele.offsetWidth,
        h: ele.offsetHeight
    }
}
function addClass (ele,e,active) {
    let dir = directive(ele,e)
    console.log(dir);
    ele.className = active + dir
}
function directive (ele,e) {
    var x = e.offsetX -ele.spec.w/2
    var y = e.offsetY -ele.spec.h/2
    var state = Math.round((((Math.atan2(y,x) * (180 / Math.PI)) + 180) / 90) + 3) % 4
    var direc =''
    
    // console.log(x,y);
    // console.log(state)
    // console.log(ele.spec)
    switch (state) {
    case state = 0:
        direc = 'top'
        break
    case state =1:
        direc = 'right'
        break
    case state =2:
        direc = 'bottom'
        break
    case state =3:
        direc = 'left'
        break
    default:
        break
    }
    return direc
}