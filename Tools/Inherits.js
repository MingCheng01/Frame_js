//====================================================================================================
//原型链指向(封装方法实现原型链指向)
Frame.inherits = function (child, parent) {
    child.prototype = Object.create(parent.prototype, {
        constructor: {value: child, writable: true, configurable: true}
    }), parent && Object.setPrototypeOf(child, parent)
}