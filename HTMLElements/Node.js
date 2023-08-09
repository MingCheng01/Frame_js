//====================================================================================================
//Node
//伪造Node
Node = function Node() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
};
//原型链指向
Frame.inherits(Node, EventTarget)
//设置原型名
Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node",
        configurable: true
    }
});
//方法添加
Object.defineProperties(Node.prototype, {
    childNodes: {
        get() {
            return {}
        }
    },
    parentNode: {
        get() {
            return {}
        }
    },
    textContent: {
        get() {
            return ""
        }, set() {
            return ""
        }
    },
    firstChild: {
        get() {

            return {}
        }
    },
    nodeType: {
        get() {
            return 1
        }
    },
    nextSibling: {
        get() {
            return {}
        }
    },
    nodeName: {
        get() {
            return "DIV"
        }
    },
    ownerDocument: {
        get() {
            return {}
        }
    },
    ELEMENT_NODE: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    ATTRIBUTE_NODE: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    TEXT_NODE: {"value": 3, "writable": false, "enumerable": true, "configurable": false},
    CDATA_SECTION_NODE: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_REFERENCE_NODE: {"value": 5, "writable": false, "enumerable": true, "configurable": false},
    ENTITY_NODE: {"value": 6, "writable": false, "enumerable": true, "configurable": false},
    PROCESSING_INSTRUCTION_NODE: {"value": 7, "writable": false, "enumerable": true, "configurable": false},
    COMMENT_NODE: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_NODE: {"value": 9, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_TYPE_NODE: {"value": 10, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_FRAGMENT_NODE: {"value": 11, "writable": false, "enumerable": true, "configurable": false},
    NOTATION_NODE: {"value": 12, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_DISCONNECTED: {"value": 1, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_PRECEDING: {"value": 2, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_FOLLOWING: {"value": 4, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINS: {"value": 8, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value": 16, "writable": false, "enumerable": true, "configurable": false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {
        "value": 32,
        "writable": false,
        "enumerable": true,
        "configurable": false
    },
    [Symbol.toStringTag]: {value: "Node", writable: false, enumerable: false, configurable: true},
})