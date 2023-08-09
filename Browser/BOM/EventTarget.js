//====================================================================================================
//EventTarget
//伪造EventTarget
var EventTarget = function EventTarget() {

};
//保护EventTarget
Frame.safe(EventTarget);
//设置原型名
Object.defineProperties(EventTarget.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget",
        configurable: true
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造addEventListener
EventTarget.prototype.addEventListener = function addEventListener(type, callback) {
    debugger; //检测到是否检测了该方法
    if (!(type in Frame.memory.listeners)) {
        Frame.memory.listeners[type] = [];
    }
    Frame.memory.listeners[type].push(callback);
};
//伪造dispatchEvent
EventTarget.prototype.dispatchEvent = function dispatchEvent() {
    debugger;
};
//伪造removeEventListener
EventTarget.prototype.removeEventListener = function removeEventListener() {
    debugger;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护addEventListener
Frame.safe(EventTarget.prototype.addEventListener);
//保护dispatchEvent
Frame.safe(EventTarget.prototype.dispatchEvent);
//保护removeEventListener
Frame.safe(EventTarget.prototype.removeEventListener);