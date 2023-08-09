//====================================================================================================
//Window
window = this;
//伪造Window
var Window = function Window() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Window
Frame.safe(Window);
//原型链指向
Frame.inherits(Window, WindowProperties)
//设置原型名
Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
})
//原型链指向
window.__proto__ = Window.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造setTimeout
window.setTimeout = function (x, y) {
    //x可能是方法也可能是文本
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    return null;
};
//伪造open
window.open = function open() {
    debugger;
};
//伪造chrome
window.chrome = Frame.proxy_(class chrome {

});
//伪造DeviceOrientationEvent
window.DeviceOrientationEvent = function DeviceOrientationEvent() {
    debugger;
};
//伪造DeviceMotionEvent
window.DeviceMotionEvent = function DeviceMotionEvent() {
    debugger;
};
//伪造openDatabase
window.openDatabase = function openDatabase() {
    debugger;
}
//伪造devicePixelRatio
window.devicePixelRatio = 1.75;
//伪造AudioContext
window.AudioContext = function AudioContext() {
    debugger;
}
//伪造setInterval
window.setInterval=function setInterval(){
    debugger;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护setTimeout
Frame.safe(window.setTimeout);
//保护open
Frame.safe(window.open);
//保护DeviceOrientationEvent
Frame.safe(window.DeviceOrientationEvent);
//保护DeviceMotionEvent
Frame.safe(window.DeviceMotionEvent);
//保护openDatabase
Frame.safe(window.openDatabase);
//保护AudioContext
Frame.safe(window.AudioContext);
//保护setInterval
Frame.safe(window.setInterval);