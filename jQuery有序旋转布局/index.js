function rotate(li, d) {
    $(li)
        .css({transform: 'rotateZ(' + d + 'deg)'})
        .find('label').css({transform: 'rotateZ(' + -d + 'deg)'});
}
function changeOpations(ele) {
    var $wrapper = $(ele).parent();
    $wrapper.toggleClass('open');
    var $li = $wrapper.find('li'),
        len = $li.length,
        deg = 360/len;
    for(var i = 0; i < len; i++) {
        var d = i*deg;
        $wrapper.hasClass('open') ? rotate($li[i], d) : rotate($li[i], -360); 
    }
}
$('.button').click(function () {
    changeOpations(this);
})
setTimeout(function () {
    changeOpations('.button');
}, 100)
