define(['exports', 'text!./view.html', '../components/header/index', 'jquery', 'vue'], function (exports, _view, header, $, vue) {
    var app = new vue({
        el: 'body',
        replace: false,
        template: _view,
        data: {
            'appName': ''
        },
        components: {
            'app-header': header
        }
        // ,
        // components: {
        //     'app-header': {
        //         template:
        //     },
        //     'my-com': {
        //         template: '<div>This is a comp</div>'
        //     }
        // }
    });
    exports.default = app;
})