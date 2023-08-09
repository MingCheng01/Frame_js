//====================================================================================================
//Navigator
//伪造Navigator
var Navigator = function Navigator() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Navigator
Frame.safe(Navigator);
//设置原型名
Object.defineProperties(Navigator.prototype, {
    [Symbol.toStringTag]: {
        value: "Navigator",
        configurable: true
    }
});
//创建实例
navigator = {};
//原型链指向
navigator.__proto__ = Navigator.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
Navigator.prototype.plugins = [];
Navigator.prototype.languages = ["zh-CN", "zh"];
Navigator.prototype.userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36';
Navigator.prototype.platform = 'Win32';
Navigator.prototype.maxTouchPoints = 0;
Navigator.prototype.onLine = true;
Navigator.prototype.mimeTypes = [{
    suffixes: '',
    type: ''
}];
Navigator.prototype.plugins = [{
    "0": {},
    "1": {}
}];
//////////////////////////////////////////////////////////////////////////////////////////////////////
//navigator会把属性继续定义到静态属性中
for (var _prototype in Navigator.prototype) {
    //将原型上的方法复制一遍给实例
    navigator[_prototype] = Navigator.prototype[_prototype];
    if (typeof (Navigator.prototype[_prototype]) != "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        Navigator.prototype.__defineGetter__(_prototype, function () {
            debugger;
            var e = new Error();
            e.name = "TypeError";
            e.message = "Illegal constructor";
            e.stack = "VM988:1 Uncaught TypeError: Illegal invocation \r\n " +
                "at <anonymous>:1:21";
            throw e;
            //throw new TypeError("Illegal constructor");
        });
    }
}