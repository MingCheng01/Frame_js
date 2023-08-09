//====================================================================================================
//测试文件(环境验证不严格时可以使用)
//====================================================================================================
//window
window = global;
window.byted_acrawler = {
}
//允许你访问一个，对应当前源的 session Storage 对象。
window.sessionStorage = {
    "__ac_ns": "1691375457262",
    "/": "1",
    "__tea_session_id_24": "{\"sessionId\":\"5eda2a54-c680-4eb1-b6af-2c00a8e42a31\",\"timestamp\":1691375569352}",
    "_byted_param_sw": "Kfs9beadgsZm4r9sqjU=",
    "ttcid": "c6902a21db6c45308b60432be155b5d927",
    "tt_scid": "OKHSSz0WAX58G-21itAeLERd0rch1TWpcfJQEHBAeB9xpvfhdh8i4TktkXQpVOoW3313"
}
//只读的localStorage 属性允许你访问一个Document 源的对象 Storage
window.localStorage = {
    "SLARDARtoutiao_web_pc": "JTdCJTIydXNlcklkJTIyOiUyMjcyNjQ0MDIyNDEwNzQzMTY4NjAlMjIsJTIyZGV2aWNlSWQlMjI6JTIyNzI2NDQwMjI0MTA3NDMxNjg2MCUyMiwlMjJleHBpcmVzJTIyOjE2OTkxNTE0NTkxNzMlN0Q=",
    "__tea_cache_tokens_24": "{\"web_id\":\"7264402241074316860\",\"user_unique_id\":\"7264402241074316860\",\"timestamp\":1691375459361,\"_type_\":\"default\"}",
    "__tea_cache_first_24": "1",
    "SLARDARweb_login_sdk": "{\"userId\":\"e5c68e3d-ae14-f97a-8e3d-f8c7ab60d1d3\",\"deviceId\":\"713f25d6-a44f-4c8f-982a-2115053be818\"}",
    "tt_scid": "OKHSSz0WAX58G-21itAeLERd0rch1TWpcfJQEHBAeB9xpvfhdh8i4TktkXQpVOoW3313",
    "SLARDARpassport_account_api": "{\"userId\":\"4e6e54f8-76d6-7e86-bd0b-aacc24738116\",\"deviceId\":\"c46f554e-18a8-40b2-bc93-f802f66d354b\"}",
    "aria": "{\"df8e29823e2f4c0822e3693ee653bfc5\":{\"runtime\":{\"appid\":\"df8e29823e2f4c0822e3693ee653bfc5\"},\"road\":\"https://lf3-cdn-tos.bytescm.com/goofy/toutiao/toutiao_web_pc/wza/4.5.4/\"}}",
    "_byted_param_sw": "Kfs9beadgsZm4r9sqjU=",
    "ttcid": "c6902a21db6c45308b60432be155b5d927",
    "__is_visited_home": "1"
}
window.DeviceOrientationEvent = function DeviceOrientationEvent() { };
window.DeviceMotionEvent = function DeviceMotionEvent() { };
//====================================================================================================
//navigator
Navigator = function Navigator() { };
window.navigator = {
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188',

};
window.navigator.__proto__ = Navigator.prototype;
//====================================================================================================
//location
Location = function Location() { };
window.location = {
    href: 'https://www.toutiao.com/?wid=1691375457731',
    protocol: 'https:'
};
window.location.__proto__ = Location.prototype;
//====================================================================================================
//history
History = function History() { };
window.history = {

};
window.history.__proto__ = History.prototype;
//====================================================================================================
//screen
Screen = function Screen() { };
window.screen = {

};
window.screen.__proto__ = Screen.prototype;
//====================================================================================================
//document
Document = function () { };
window.document = {
    cookie: '__ac_nonce=064d05761001680ba8e95; msToken=5dIQcX381AtTXEUVfuDSaoSsaM3pxZWdeRcouPr3vcIv5tYR70OSE-zTF8C024tjL6Dgu3i2d9_ZdUZwjISkBndV7zRnbvK_IyN0Qaev; __ac_signature=_02B4Z6wo00f014wRdfQAAIDA2ZP-aR2sMO-MMXFAAIfcaa; ttcid=c6902a21db6c45308b60432be155b5d927; local_city_cache=%E6%B7%84%E5%8D%9A; csrftoken=201bac4b7e6a42716a630f7fb169e89b; _ga_QEHZPBE5HH=GS1.1.1691375459.1.0.1691375459.0.0.0; _ga=GA1.1.701675960.1691375460; s_v_web_id=verify_ll09a167_T0EMYXmx_rHzE_4gAX_AuPB_mhLVbKOYtf2b; tt_scid=OKHSSz0WAX58G-21itAeLERd0rch1TWpcfJQEHBAeB9xpvfhdh8i4TktkXQpVOoW3313',
    referrer: 'https://www.toutiao.com/',
    createElement: function createElement() { },
    createEvent: function createEvent() { }
};
window.document.__proto__ = Document.prototype;
//====================================================================================================
window.setTimeout = function (x, y) {
    typeof (x) == "function" ? x() : undefined;
    typeof (x) == "string" ? eval(x) : undefined;
    return '';
};
//====================================================================================================
//挂载代理
window = Frame.proxy_(window)
navigator = Frame.proxy_(navigator)
location = Frame.proxy_(location)
history = Frame.proxy_(history)
screen = Frame.proxy_(screen)
document = Frame.proxy_(document)