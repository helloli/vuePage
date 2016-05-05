define(['text!./view.html', '../components/header/index', 'jquery', 'vue'], function (_view, header, $, vue) {
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
    });
    return app;
})