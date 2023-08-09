//====================================================================================================
//HTMLElement
//伪造HTMLElement
HTMLElement = function HTMLElement() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
};
//保护HTMLElement
Frame.safe(HTMLElement)
//原型链指向
Frame.inherits(HTMLElement, Element)
//方法添加
Object.defineProperties(HTMLElement.prototype, {
    style: {
        get() {
            return this._style
        }
    },
    offsetHeight: {
        get() {
            return 1979
        }
    },
    offsetWidth: {
        get() {
            return 1463
        }
    },
    onload: {
        get() {
            return {}
        }, set() {
            return {}
        }
    },
    title: {
        set() {
            return {}
        }
    },
    onerror: {
        get() {
            return {}
        }, set() {
            return {}
        }
    },
    dataset: {
        get() {
            return {}
        }
    },
    offsetParent: {
        get() {
            return {}
        }
    },
    onmouseenter: {
        get() {
            return {}
        }
    },
    onmouseleave: {
        get() {
            return {}
        }
    },
    onmouseenter: {"enumerable": true, "configurable": true},
    onmouseleave: {"enumerable": true, "configurable": true},
    [Symbol.toStringTag]: {value: "HTMLElement", writable: false, enumerable: false, configurable: true},
})