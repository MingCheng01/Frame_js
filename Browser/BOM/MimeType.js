//====================================================================================================
//MimeType
//伪造MimeType
var MimeType = function MimeType() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Storage
Frame.safe(MimeType);
//设置原型名
Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeType",
        configurable: true
    },
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
MimeType.prototype.description = "";
MimeType.prototype.enabledPlugin = null;
MimeType.prototype.suffixes = "";
MimeType.prototype.type = "";
//////////////////////////////////////////////////////////////////////////////////////////////////////
for (var _prototype in MimeType.prototype) {
    if (typeof (MimeType.prototype[_prototype]) != "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        MimeType.prototype.__defineGetter__(_prototype, function () {
            throw new TypeError("Illegal constructor");
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
Frame.memory.mimetype.new = function (data, initPlugin) {
    var mimetype = {};
    if (data != undefined) {
        mimetype.description = data.description;
        mimetype.enabledPlugin = initPlugin; //plugin实例
        mimetype.suffixes = data.suffixes;
        mimetype.type = data.type;
    }
    //先赋完值，在指向原型
    mimetype.__proto__ = MimeType.prototype;
    return mimetype;
};