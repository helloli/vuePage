require.config({
    paths: {

    },
    packages: [{
        name: 'jquery',
        location: './node_modules/jquery',
        main: 'dist/jquery.min'
    }, {
        name: 'vue',
        location: './node_modules/vue',
        main: 'dist/vue.min'
    }, {
        name: 'text',
        location: './node_modules/text',
        main: 'text'
    }]
});

require(['apps/index']);