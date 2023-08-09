var fs = require('fs');
const {VM, VMScript} = require('vm2');
//====================================================================================================
//初始化代码块
code = ''
//====================================================================================================
//读取Tools文件夹
code += fs.readFileSync(`${__dirname}/Tools/Memory.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Tools/Proxy.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Tools/Safe.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Tools/Console_log.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Tools/Inherits.js`) + '\r\n';
//====================================================================================================
//是否开启代理
code += 'Frame.memory.config.proxy=true;\r\n'
//====================================================================================================
//读取Browser文件夹
//加载BOM环境（优于DOM加载）
code += fs.readFileSync(`${__dirname}/Browser/BOM/EventTarget.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/WindowProperties.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Window.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Location.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Navigator.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/History.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Screen.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Storage.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/MimeType.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/Plugin.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/PluginArray.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/Browser/BOM/MimeTypeArray.js`) + '\r\n';
//加载HTML节点
code += fs.readFileSync(`${__dirname}/HTMLElements/Node.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/HTMLElements/Element.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/HTMLElements/HTMLElement.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/HTMLElements/HTMLCanvasElement.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/HTMLElements/HTMLDivElement.js`) + '\r\n';
code += fs.readFileSync(`${__dirname}/HTMLElements/HTMLImageElement.js`) + '\r\n';
//加载DOM环境
code += fs.readFileSync(`${__dirname}/Browser/Document.js`) + '\r\n';
//加载代理配置
code += fs.readFileSync(`${__dirname}/Setting/Proxy_setting.js`) + '\r\n';
//====================================================================================================
//读取Test文件夹(少量环境验证时使用)
//code += fs.readFileSync(`${__dirname}/Test/test_1.js`) + '\r\n';
//====================================================================================================
//添加debugger
code += 'debugger;\r\n\r\n'
//====================================================================================================
//读取调试代码
code += fs.readFileSync(`${__dirname}/code.js`) + '\r\n';
//====================================================================================================
//添加debugger
code += 'debugger;\r\n\r\n'
//====================================================================================================
//开启调试
const script = new VMScript(code, `${__dirname}/调试ing.js`);
const vm = new VM();
vm.run(script);