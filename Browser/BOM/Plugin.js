//====================================================================================================
//Plugin
//伪造Plugin
var Plugin = function Plugin() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Plugin
Frame.safe(Plugin);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造iterator
Frame.memory.plugin.iterator = function values() {
    return {
        next: function () {
            if (this.index_ === undefined) {
                this.index_ = 0;
            }
            var tmp = this.self_[this.index_];
            this.index_ += 1;
            return {value: tmp, done: tmp === undefined};
        },
        self_: this
    }
};
//保护Storage
Frame.safe(Frame.memory.plugin.iterator);
//设置原型名
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: "Plugin",
        configurable: true
    },
    //原型上多了个这个,里面是个方法
    [Symbol.iterator]: {
        value: Frame.memory.plugin.iterator,
        configurable: true
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
Plugin.prototype.name = "";
Plugin.prototype.filename = "";
Plugin.prototype.description = "";
Plugin.prototype.length = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造item
Plugin.prototype.item = function item(index) {
    return this[index];
};
//伪造namedItem
Plugin.prototype.namedItem = function namedItem(key) {
    return this[key];
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护item
Frame.safe(Plugin.prototype.item);
//保护Storage
Frame.safe(Plugin.prototype.namedItem);
//////////////////////////////////////////////////////////////////////////////////////////////////////
for (var _prototype in Plugin.prototype) {
    if (typeof (Plugin.prototype[_prototype]) != "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        Plugin.prototype.__defineGetter__(_prototype, function () {
            //this是实例
            throw new TypeError("Illegal constructor");
            //return this[pr];
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
Frame.memory.plugin.new = function (data) {
    var plugin = {};
    if (data !== undefined) {
        plugin.description = data.description;
        plugin.filename = data.filename;
        plugin.name = data.name;
        //MimeType
        if (data.MimeTypes !== undefined) {
            for (let index = 0; index < data.MimeTypes.length; index++) {
                var mimetypedata = data.MimeTypes[index];
                var mimetype = Frame.memory.mimetype.new(mimetypedata, plugin);
                plugin[index] = mimetype;
                //mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
                //plugin[mimetype.type] = mimetype;
                Object.defineProperty(plugin, mimetype.type, {
                    value: mimetype,
                    writable: true //是否可以改变
                });
            }
            plugin.length = data.MimeTypes.length;
        }
    }
    //原型链指向
    plugin.__proto__ = Plugin.prototype;
    return plugin;
};