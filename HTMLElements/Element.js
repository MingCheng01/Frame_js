//====================================================================================================
//Element
//伪造Element
Element = function Element() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
}
//保护Element
Frame.safe(Element)
//原型链指向
Frame.inherits(Element, Node)
//方法添加
Object.defineProperties(Element.prototype, {
    tagName: {
        get() {
            return this._tagName
        }
    },
    clientHeight: {
        get() {
            return 366
        }
    },
    children: {
        get() {
            return {}
        }
    },
    innerHTML: {
        set() {
            return {}
        }
    },
    className: {
        get() {

            return ""
        }, set() {
            return ""
        }
    },
    setAttribute: {
        value: Frame.safe(function setAttribute() {
        })
    },
    getAttribute: {
        value: Frame.safe(function getAttribute() {
        })
    },
    namespaceURI: {
        get() {
            return ""
        }
    },
    querySelector: {
        value: Frame.safe(function querySelector() {
        })
    },
    previousElementSibling: {
        get() {
            return {}
        }
    },
    setAttributeNS: {
        value: Frame.safe(function setAttributeNS() {
        })
    },
    getBoundingClientRect: {
        value: Frame.safe(function getBoundingClientRect() {
        })
    },
    classList: {
        get() {
            return {}
        }
    },
    clientWidth: {
        get() {
            return 704
        }
    },
    id: {
        get() {
            return ""
        }
    },
    scrollLeft: {
        get() {
            return 0
        }
    },
    scrollTop: {
        get() {
            return 0
        }, set() {
            return 0
        }
    },
    clientLeft: {
        get() {
            return 0
        }
    },
    clientTop: {
        get() {
            return 0
        }
    },
    assignedSlot: {
        get() {
            return {}
        }
    },
    scrollWidth: {
        get() {
            return 704
        }
    },
    [Symbol.toStringTag]: {value: "Element", writable: false, enumerable: false, configurable: true},
})