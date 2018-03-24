var imgstr = '',
    imgC =$('.img-content'),
    itemLenght,
    h_w = $(window).height()/$(window).width(),
    activeIndex

function createImg(elm,vlue){
    itemLenght =vlue
    for (var i=0;i < vlue;i++){
        imgstr +='<li><img src="./images/' + i + '.png" alt=""></li>'
    }
    $(elm).html(imgstr)
}
createImg('.list',14)
$('.list').on('tap','li',function(){
    var imgindex = activeIndex = $(this).index()
    loadImage(imgindex)

})
imgC.on('tap',function(){
    $(this).animate({opacity:0,width: 0},1000)
    var _this = $(this)
    this.timer = setTimeout(function() {
        _this.hide()
        clearTimeout(_this.timer)
    }, 1000)
    
}).on('swipeLeft',function(){
    activeIndex != itemLenght ? loadImage(++activeIndex): ''    
}).on('swipeRight',function(){
    activeIndex != 0 ?loadImage(--activeIndex):''
    
})

function loadImage(index){
    var img = new Image()
    img.src ='./images/' + index + '.png'
    // console.log(img);
    img.onload =function(){
        var hw = this.height/this.width
        if(hw > h_w){
            $(this).height('100%')
        }else{
            $(this).width('100%')
        }
        // console.log('1');
        imgC.html('').append($(this))
        $(this).animate({opacity: 1},1000)
        imgC.css('display','block').animate({opacity:1,width:'100%'},500)
    }

}