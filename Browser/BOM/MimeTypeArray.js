//====================================================================================================
//MimeTypeArray
//伪造MimeTypeArray
var MimeTypeArray = function MimeTypeArray() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护MimeTypeArray
Frame.safe(MimeTypeArray);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造iterator
Frame.memory.MimeTypeArray.iterator = function values() {
    debugger;
    return {
        next: function () {
            if (this.index_ == undefined) {
                this.index_ = 0;
            }
            var tmp = this.self_[this.index_];
            this.index_ += 1;
            return { value: tmp, done: tmp == undefined };
        },
        self_: this
    }
};
//保护iterator
Frame.safe(Frame.memory.MimeTypeArray.iterator);
//设置原型名
Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {
        value: "MimeTypeArray",
        configurable: true
    },
    //原型上多了个这个,里面是个方法
    [Symbol.iterator]: {
        value: Frame.memory.MimeTypeArray.iterator,
        configurable: true
    }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////
MimeTypeArray.prototype.length = 0;
//////////////////////////////////////////////////////////////////////////////////////////////////////
//伪造item
MimeTypeArray.prototype.item = function item(index) {
    //debugger;
    return this[index];
};
//伪造namedItem
MimeTypeArray.prototype.namedItem = function namedItem(key) {
    //debugger;
    return this[key];
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护item
Frame.safe(MimeTypeArray.prototype.item);
//保护namedItem
Frame.safe(MimeTypeArray.prototype.namedItem);
//////////////////////////////////////////////////////////////////////////////////////////////////////
//调用原型的属性会抛出异常的对象
for (var _prototype in MimeTypeArray.prototype) {
    if (typeof (MimeTypeArray.prototype[_prototype]) != "function") {
        //相当于Object.defineProperty的get方法，Proxy的get方法，hook原型上的所有方法属性
        MimeTypeArray.prototype.__defineGetter__(_prototype, function () {
            //this是实例
            throw new TypeError("Illegal constructor");
            //return this[pr];
        });
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Frame.memory.MimeTypeArray.ls = []  //所有MimeType存放点
//遍历 PluginArray实例里面的所有Plugin实例
Frame.memory.MimeTypeArray.mimetype_count = 0;
Frame.memory.MimeTypeArray.mimetype_types = {}; //所有MimeType.type存放点
for (let index = 0; index < Frame.memory.PluginArray._.length; index++) {
    let tmp_plugin = Frame.memory.PluginArray._[index];
    //遍历 Plugin实例里面的所有MimeType实例，增加到 MimeTypeArray中
    for (let m_index = 0; m_index < tmp_plugin.length; m_index++) {
        let tmp_mimetype = tmp_plugin.item(m_index);
        //Frame.memory.MimeTypeArray.ls.push(tmp_mimetype);
        if (!(tmp_mimetype.type in Frame.memory.MimeTypeArray.mimetype_types)) {
            Frame.memory.MimeTypeArray.mimetype_types[tmp_mimetype.type] = 1;
            Frame.memory.MimeTypeArray._[Frame.memory.MimeTypeArray.mimetype_count] = tmp_mimetype;
            Frame.memory.MimeTypeArray.mimetype_count += 1;
            //mimetype.type浏览器显示的是灰色名称，下面这种添加属性会是亮的，因此我们需要换一种添加方式
            Object.defineProperty(Frame.memory.MimeTypeArray._, tmp_mimetype.type, {
                value: tmp_mimetype,
            });
        }
    }
}
Frame.memory.MimeTypeArray._.length = Frame.memory.MimeTypeArray.mimetype_count;
Frame.memory.MimeTypeArray._.__proto__ = MimeTypeArray.prototype;