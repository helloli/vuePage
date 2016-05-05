define(['exports', 'text!./view.html', 'jquery', 'vue', 'css!./style.css'], function (exports, view, $, vue) {
    var logo = 'TEST';
    return {
        template: view,
        data: function () {
            return {
                'logo': 'TEST'
            }
        }
    };
});