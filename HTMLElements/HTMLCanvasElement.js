//====================================================================================================
//HTMLCanvasElement
//伪造HTMLCanvasElement
var HTMLCanvasElement = function HTMLCanvasElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLCanvasElement
Frame.safe(HTMLCanvasElement);
//原型链指向
Frame.inherits(HTMLCanvasElement, HTMLElement)
//设置原型名
Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建canvas
Frame.memory.htmlelements["canvas"] = function () {
    var canvas = new (function () {
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    canvas.getContext = function () {
        if (arguments[0] == '2d') {
            return canvas;
        }
        ;
        if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
            canvas.canvas = canvas;
            canvas.drawingBufferColorSpace = "srgb";
            canvas.drawingBufferHeight = 150;
            canvas.drawingBufferWidth = 300;
            canvas.unpackColorSpace = "srgb";
            canvas.getExtension = function (arg) {
                return {}
            };
            canvas.getParameter = function (arg) {
                if (arg === undefined) {
                    throw new Error("Uncaught TypeError: Failed to execute 'getParameter' on 'WebGLRenderingContext': 1 argument required, but only 0 present.")
                }
            };
            return canvas;
        }
        ;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    canvas.__proto__ = HTMLCanvasElement.prototype;
    return canvas;
}