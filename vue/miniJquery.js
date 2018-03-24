(function () { 
  
    var jquery = window.jquery = window.$ = function(eltag){
        return  new jquery.fn.init(eltag)
    }
    jquery.fn = jquery.prototype ={
        init:function  (eltag) {
            var element =document.getElementsByTagName(eltag)
            Array.prototype.push.apply(this,element)
            return this
        },
        jquery:'1.0.0',
        length:0,
    }
    jquery.fn.init.prototype = jquery.fn




  
})()