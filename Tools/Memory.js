//====================================================================================================
//内存空间(存储自定义功能防止变量污染)
var Frame = {};
//框架运行内存
Frame.memory = {
    config: {proxy: false},
    htmlelements: {
    },
    listeners: {},
    storage: {},
    mimetype: {},
    plugin: {},
    PluginArray: {},
    MimeTypeArray: {
        _: {}
    },
};