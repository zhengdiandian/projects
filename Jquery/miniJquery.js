(function () { 
    // 解决同名冲突
    var _$ = window.$,_jQuery=window.jQuery
    // 将jquery暴露出去
    var jQuery = window.jQuery = window.$ = function(eltag){
        return  new jQuery.fn.init(eltag)
    } 
    jQuery.fn = jQuery.prototype ={
        init:function  (eltag) {
            var element =document.getElementsByTagName(eltag)
            Array.prototype.push.apply(this,element)
            return this
        },
        jQuery:'1.0.0',
        length:0
    }
    jQuery.fn.init.prototype = jQuery.fn
    jQuery.extend = jQuery.fn.extend = function () { 
        var o = arguments[0]
        for (var p in o) {
            if (o.hasOwnProperty(p)) {
                this[p] = o[p] 
      
            }
        }
    }
    //  添加静态方法
    jQuery.extend({
        trim:function (text) { 
            return (text||'').replace(/^\s+|\s+$/g,'')
        },
        onConfict:function () { 
            window.jQuery = _jQuery
            window.$ = _$
            return jQuery
        }
    }) 
    // 添加实例方法
    jQuery.fn.extend({
        get:function (num) { 
            return this[num]
        },
        each:function (fn) {
            for(var i=0;i<this.length;i++){
                fn(i,this[i])
            }
            return this
        },
        css:function () { 
            var l=arguments.length
            if(l==1){
                return this[0].style[arguments[0]]
            }else{
                var name=arguments[0],value=arguments[1]
                this.each(function(index,element){
                    element.style[name]=value
                })
            }
            return this
        }
    })





  
})()