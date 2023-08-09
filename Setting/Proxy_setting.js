//====================================================================================================
// 代理挂载(给需要代理的对挂上代理)
//BOM环境Hook
//////////////////////////////////////////////////////////////////////////////////////////////////////
//EventTarget
//EventTarget = Frame.proxy_(EventTarget);
//EventTarget.prototype = Frame.proxy_(EventTarget.prototype);
//WindowProperties
//WindowProperties = Frame.proxy_(WindowProperties);
//Window
window = Frame.proxy_(window);
Window = Frame.proxy_(Window);
//Location
location = Frame.proxy_(location);
//Navigator
navigator = Frame.proxy_(navigator);
//History
history = Frame.proxy_(history);
//Screen
screen = Frame.proxy_(screen);
//Storage
localStorage = Frame.proxy_(localStorage);
Storage = Frame.proxy_(Storage);
//Plugins
navigator.plugins = Frame.proxy_(navigator.plugins);
//PluginArray
Frame.memory.PluginArray._ = Frame.proxy_(Frame.memory.PluginArray._);
navigator.plugins = Frame.memory.PluginArray._;
//MimeTypeArray
navigator.mimeTypes = Frame.memory.MimeTypeArray._;
navigator.mimeTypes = Frame.proxy_(navigator.mimeTypes)
//////////////////////////////////////////////////////////////////////////////////////////////////////
//Dom环境Hook
//Node
//Node = Frame.proxy_(Node)
//Element
//Element = Frame.proxy_(Element);
//HTMLElement
HTMLElement = Frame.proxy_(HTMLElement);