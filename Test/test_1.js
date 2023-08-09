//====================================================================================================
//测试文件(环境验证不严格时可以使用)
//====================================================================================================
//window
window = global;
window.CanvasRenderingContext2D = function CanvasRenderingContext2D() { debugger; }
window.HTMLCanvasElement = function HTMLCanvasElement() { debugger; }
window.openDatabase = function openDatabase() { debugger; }
window.devicePixelRatio = 1.75
window.AudioContext = function AudioContext() { debugger; }
window.setInterval = function setInterval(func, delay, arg1, arg2) {
    console.log(func, delay, arg1, arg2);
    debugger;
}
window.DeviceOrientationEvent = function DeviceOrientationEvent() { };
window.DeviceMotionEvent = function DeviceMotionEvent() { };
//====================================================================================================
//navigator
Navigator = function Navigator() { };
window.navigator = {

};
window.navigator.__proto__ = Navigator.prototype;
//====================================================================================================
//location
Location = function Location() { };
window.location = {

};
window.location.__proto__ = Location.prototype;
//====================================================================================================
//history
History = function History() { };
window.history = {

};
window.history.__proto__ = History.prototype;
//====================================================================================================
//screen
Screen = function Screen() { };
window.screen = {

};
window.screen.__proto__ = Screen.prototype;
//====================================================================================================
//document
Document = function () { };
window.document = {
    createElement: function createElement(tagName, options) {
        tagName = tagName.toLowerCase();
        if (Frame.memory.htmlelements[tagName] == undefined) {
            debugger;
            return "<"+tagName+"></"+tagName+">"
        } else {
            var tagElement = Frame.memory.htmlelements[tagName]();
            return Frame.proxy_(tagElement);
        }
    },
    documentElement: function documentElement() { debugger; }
};
window.document.__proto__ = Document.prototype;
//====================================================================================================
window.setTimeout = function (x, y) {
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    return '';
};
//====================================================================================================
//挂载代理
window = Frame.proxy_(window)
window.navigator = Frame.proxy_(window.navigator)
window.location = Frame.proxy_(window.location)
window.history = Frame.proxy_(window.history)
window.screen = Frame.proxy_(window.screen)
window.document = Frame.proxy_(window.document)
