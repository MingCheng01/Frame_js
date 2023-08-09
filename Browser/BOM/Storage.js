//====================================================================================================
//Storage
//伪造Storage
var Storage = function Storage() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护Storage
Frame.safe(Storage);
//设置原型名
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {
        value: "Storage",
        configurable: true
    }
});
//创建实例
localStorage = {};
//原型链指向
localStorage.__proto__ = Storage.prototype;
//////////////////////////////////////////////////////////////////////////////////////////////////////
function get_length() {
    return Object.keys(Frame.memory.storage).length;
}
Storage.prototype.length = get_length();
//伪造key
Storage.prototype.key = function key(index) {
    return Object.keys(Frame.memory.storage)[index];
};
//伪造getItem
Storage.prototype.getItem = function getItem(keyName) {
    var result = Frame.memory.storage[keyName];
    if (result) {
        return result;
    } else {
        return null;
    }
};
//伪造setItem
Storage.prototype.setItem = function setItem(keyName, keyValue) {
    Frame.memory.storage[keyName] = keyValue;
};
//伪造removeItem
Storage.prototype.removeItem = function removeItem(keyName) {
    delete Frame.memory.storage[keyName];
};
//伪造clear
Storage.prototype.clear = function clear() {
    Frame.memory.storage = {};
};
//////////////////////////////////////////////////////////////////////////////////////////////////////
//保护key
Frame.safe(Storage.prototype.key);
//保护getItem
Frame.safe(Storage.prototype.getItem);
//保护setItem
Frame.safe(Storage.prototype.setItem);
//保护removeItem
Frame.safe(Storage.prototype.removeItem);
//保护clear
Frame.safe(Storage.prototype.clear);