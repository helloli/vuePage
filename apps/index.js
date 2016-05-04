define(['exports', 'text!./index.html', 'jquery', 'vue'], function (exports, _view, $, vue) {
    var app = new vue({
        el: 'body',
        replace: false,
        template: _view,
        data: {
            appName: ''
        }
    });
    exports.default = app;
})