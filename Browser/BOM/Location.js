//====================================================================================================
//Location
//伪造Location
var Location = function Location() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Location
Frame.safe(Location);
//设置原型名
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});
//创建实例
location = {};
//原型链指向
location.__proto__ = Location.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
location.href = "https://www.baidu.com";
location.port = "";
location.protocol = 'https:';
location.host = 'www.baidu.com';