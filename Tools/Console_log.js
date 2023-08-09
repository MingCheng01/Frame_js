//====================================================================================================
//打印方法(用于打印hook到的内容)
Frame.console_log = function (type, obj, func, value) {
    if (type === 'set') {
        console.table([{'类型': type, '调用对象': obj, '调用属性': func, '设置值': value}]);
    } else {
        console.table([{'类型': type, '调用对象': obj, '调用属性': func, '获取值': value}]);
    }
};