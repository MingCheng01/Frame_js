//====================================================================================================
//PluginArray
//伪造PluginArray
var PluginArray = function PluginArray() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护PluginArray
Frame.safe(PluginArray);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造iterator
Frame.memory.PluginArray.iterator = function values() {
    //debugger;
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
//保护iterator
Frame.safe(Frame.memory.plugin.iterator);
//设置原型名
Object.defineProperties(PluginArray.prototype, {
    [Symbol.toStringTag]: {
        value: "PluginArray",
        configurable: true
    },
    //原型上多了个这个,里面是个方法
    [Symbol.iterator]: {
        value: Frame.memory.PluginArray.iterator,
        configurable: true
    }
});
//PluginArray实例
Frame.memory.PluginArray._ = {};
//////////////////////////////////////////////////////////////////////////////////////////////////////
PluginArray.prototype.length = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造item
PluginArray.prototype.item = function item(index) {
    //debugger;
    return this[index];
};
//伪造namedItem
PluginArray.prototype.namedItem = function namedItem(key) {
    //debugger;
    return this[key];
};
//伪造refresh
PluginArray.prototype.refresh = function refresh() {
    debugger;
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护item
Frame.safe(PluginArray.prototype.item);
//保护namedItem
Frame.safe(PluginArray.prototype.namedItem);
//保护refresh
Frame.safe(PluginArray.prototype.refresh);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//调用原型的属性会抛出异常的对象
for (var _prototype in PluginArray.prototype) {
    if (typeof (PluginArray.prototype[_prototype]) !== "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        PluginArray.prototype.__defineGetter__(_prototype, function () {
            //this是实例
            throw new TypeError("Illegal constructor");
            //return this[pr];
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
Frame.memory.PluginArray.ls = [
    {
        "name": "PDF Viewer",
        "filename": "internal-pdf-viewer",
        "description": "Portable Document Format",
        "MimeTypes": [
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "application/pdf"
            },
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "text/pdf"
            }
        ]
    },
    {
        "name": "Chrome PDF Viewer",
        "filename": "internal-pdf-viewer",
        "description": "Portable Document Format",
        "MimeTypes": [
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "application/pdf"
            },
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "text/pdf"
            }
        ]
    },
    {
        "name": "Chromium PDF Viewer",
        "filename": "internal-pdf-viewer",
        "description": "Portable Document Format",
        "MimeTypes": [
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "application/pdf"
            },
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "text/pdf"
            }
        ]
    },
    {
        "name": "Microsoft Edge PDF Viewer",
        "filename": "internal-pdf-viewer",
        "description": "Portable Document Format",
        "MimeTypes": [
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "application/pdf"
            },
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "text/pdf"
            }
        ]
    },
    {
        "name": "WebKit built-in PDF",
        "filename": "internal-pdf-viewer",
        "description": "Portable Document Format",
        "MimeTypes": [
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "application/pdf"
            },
            {
                "description": "Portable Document Format",
                "suffixes": "pdf",
                "type": "text/pdf"
            }
        ]
    }
]
//////////////////////////////////////////////////////////////////////////////////////////////////////
for (let index = 0; index < Frame.memory.PluginArray.ls.length; index++) {
    let tmp_plugin = Frame.memory.plugin.new(Frame.memory.PluginArray.ls[index]);
    Frame.memory.PluginArray._[index] = tmp_plugin;
    //mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
    Object.defineProperty(Frame.memory.PluginArray._, tmp_plugin.name, {
        value: tmp_plugin,
    });
}
Frame.memory.PluginArray._.length = Frame.memory.PluginArray.ls.length;
Frame.memory.PluginArray._.__proto__ = PluginArray.prototype;