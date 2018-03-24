var EventHandler={
    addHandler:function(el,type,handler) { 
        if (el.addEventlistener) {
            el.addEventlistener(type,handler,false)
        }else if (el.attachEvent) {
            el.attachEvent('on'+type,handler)
        }else {
            el['on'+type]=handler
        }
    },
    removeHandler:function (el,type,handler) { 
        if (el.removeEventlistener) {
            el.removeEventlistener(type,handler,false)
        }else if (el.detachEvent) {
            el.detachEvent('on' + type, handler)
        }else {
            el['on'+type] = null
        }
    },
    gteEvent:function (event) { 
        return event? event: window.event
    },
    gteTarget:function (event) {
        return event.target? event.target: window.event.scrElement
    },
    preventDefault:function (event) {
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            window.event.returnValue = false
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            window.event.cancelBubble = true
        }
    }
    
}
function createEx(Child,Parent) {
    function F(){}
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.super = Child.base =Parent.prototype

}