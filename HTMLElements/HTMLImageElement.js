//====================================================================================================
//HTMLImageElement
//伪造HTMLImageElement
HTMLImageElement = function HTMLImageElement() {
    //容易被检测到-堆栈
    throw TypeError("Illegal constructor")
};
//原型链指向
Frame.inherits(HTMLImageElement, Element)
//设置原型名
Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLImageElement",
        configurable: true
    }
});
//伪造Image
Image = function Image() {
    return Frame.memory.htmlelements["img"]
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护HTMLImageElement
Frame.safe(HTMLImageElement)
//保护Image
Frame.safe(Image)
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建img
Frame.memory.htmlelements["img"] = function () {
    var img = new (function () {
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    img.tagName = 'IMG';
    //////////////////////////////////////////////////////////////////////////////////////////////////
    img.__proto__ = HTMLImageElement.prototype;
    return img;
}
