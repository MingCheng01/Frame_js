//====================================================================================================
//代理功能(给对象挂上代理查看调用)
Frame.proxy_ = function (obj) {
    //Proxy 可以多层代理,后代理的检测不到先代理的
    if (!Frame.memory.config.proxy) {
        return obj;
    }
    return new Proxy(obj, {
        set(target, property, value) {
            if (property != 'Math' && property != 'isNaN') {
                console.table([{ '类型': 'set', '调用对象': target, '调用属性': property, '设置值': value }]);
                //console.log('set =>',target+'',property+'',value);
            }

            
            return Reflect.set(...arguments);
        },
        get(target, property, receiver) {
            if (property != 'Math' && property != 'isNaN') {
                console.table([{ '类型': 'get', '调用对象': target, '调用属性': property, '获取值': target[property] }]);
                //console.log('get =>',target+'',property+'',target[property]);
            }

            return target[property];
        }
    });
}