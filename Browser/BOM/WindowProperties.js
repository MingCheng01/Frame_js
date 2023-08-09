//====================================================================================================
//WindowProperties
//伪造WindowProperties
var WindowProperties = function WindowProperties() {

};
//保护WindowProperties
Frame.safe(WindowProperties);
//原型链指向
Frame.inherits(WindowProperties, EventTarget)
//设置原型名
Object.defineProperties(WindowProperties.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowProperties",
        configurable: true
    }
})