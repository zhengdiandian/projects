var $wrapper = $('.wrapper'),
    $slider = $('.slider'),
    // $prevBtn = $('.prev-btn'),
    // $nextBtn = $('next-btn'),
    sliderlen = $('.slider').length,
    activeIndex =0,
    lastIndex;
    
(function (len) {
    var str ='',
        i,
        divStr,
        btnStr='<div class="slider-btn">\
    <span class="prev-btn"></span>\
    <span class="next-btn"></span>\
</div>'
    for( i =0 ;i < len; i++){
        if(i < 1){
            str +='<li class="active"></li>'
        }else{
            str += '<li></li>'
        }
    }
    divStr = '<div class="slider-point">\
<ul>' + str + '</ul></div>'
    $wrapper.append(btnStr).append(divStr)
})(sliderlen)
$.extend({
    getSliderIndex: function (index) {
        lastIndex =activeIndex
        console.log(activeIndex)
        if (index == 'prev') {
            activeIndex == 0 ? activeIndex =2 :activeIndex--
            console.log(activeIndex)
        }
        else if(index == 'next') {
            // console.log(activeIndex);
            activeIndex ==sliderlen-1?activeIndex = 0:activeIndex++
            // console.log(activeIndex);
            
        }else{
            activeIndex =index
        }
    }
})
$('.next-btn').on('click',function () {
    $.getSliderIndex('next')
    $slider.eq(lastIndex).trigger('go').end().eq(activeIndex).trigger('come')
    pointStyle()
})
$('.prev-btn').on('click',function () {
    $.getSliderIndex('prev')
    $slider.eq(lastIndex).trigger('go').end().eq(activeIndex).trigger('come')    
})
$('.slider-point li').on('click',function () {
    var index = $(this).index()
    $.getSliderIndex(index)
    $slider.eq(lastIndex).trigger('go').end().eq(activeIndex).trigger('come')
})
$slider.on('go',function () { 
    $slider.eq(lastIndex).fadeOut(300).end().find($('.slider-content ')).delay(300).css({fontSize: '5px'}).end().find($('.slider-img')).delay(300).animate({width: '0%'},300)
})
$slider.on('come',function () { 
    $slider.eq(activeIndex).delay(300).fadeIn(300).end().find($('.slider-content')).delay(300).animate({'fontSize': '25px'},300).end().find($('.slider-img')).delay(300).animate({'width': '40%'},300)
})
function pointStyle() { 
    $('.active').removeClass('active')
    $('.slider-point li').eq(activeIndex).addClass('active')
}
