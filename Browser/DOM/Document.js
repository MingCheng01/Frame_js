//====================================================================================================
//Document
//伪造Document
var Document = function Document() {
};
//保护Document
Frame.safe(Document);
//原型链指向
Frame.inherits(Document, Node)
//设置原型名
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
//创建实例
document = {};
//原型链指向
document.__proto__ = Document.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.cookie = '';
document.referrer = location.href || '';
document.documentElement='<!DOCTYPE html><html lang="zh"><body></body></html>'
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造getElementById
document.getElementById = function getElementById(id) {
    debugger;
    //用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
};
//伪造getElementsByTagName
document.getElementsByTagName = function getElementsByTagName(tag_name) {
    var map_tag = {'body': ["<body link=\"#0000cc\" mpa-version=\"7.16.14\" mpa-extension-id=\"ibefaeehajgcpooopoegkifhgecigeeg\" style=\"\"></body>"]};
    debugger;
    return map_tag[tag_name]
};
//伪造addEventListener
document.addEventListener = function addEventListener(type, listener, options, useCapture) {
    debugger;
};
//伪造createElement
document.createElement = function createElement(tagName) {
    tagName = tagName.toLowerCase();
    if (Frame.memory.htmlelements[tagName] === undefined) {
        debugger;
    } else {
        var tagElement = Frame.memory.htmlelements[tagName]();
        return Frame.proxy_(tagElement);
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护getElementById
Frame.safe(document.getElementById);
//保护getElementById
Frame.safe(document.getElementsByTagName);
//保护addEventListener
Frame.safe(document.addEventListener);
//保护createElement
Frame.safe(document.createElement);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//挂载代理
document = Frame.proxy_(document);