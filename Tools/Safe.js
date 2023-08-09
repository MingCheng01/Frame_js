//====================================================================================================
//保护函数(保护伪造的函数)
;;;;
(() => {
    'use strict';
    //取原型链上的toString
    const $toString = Function.toString;
    //取方法名 reload
    const Private_function_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const Private_toString = function () {
        return typeof this == 'function' && this[Private_function_toString_symbol] || $toString.call(this);
    };

    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,  //不可枚举
            "configurable": true, //可配置
            "writable": true, //可写
            "value": value
        })
    };
    delete Function.prototype['toString'];//删除原型链上的toString
    set_native(Function.prototype, "toString", Private_toString); //自定义一个getter方法，其实就是一个hook
    //套个娃，保护一下我们定义的toString，避免js对toString再次toString
    set_native(Function.prototype.toString, Private_function_toString_symbol, "function toString() { [native code] }");
    this.Frame.safe = (func) => {
        set_native(func, Private_function_toString_symbol, `function ${Private_function_toString_symbol, func.name || ''}() { [native code] }`);
    }; //导出函数到globalThis，更改原型上的toSting为自己的toString。这个方法相当于过掉function的toString检测点
}).call(this);
