
module.exports = function (config) {
    config.set({

        // list of files / patterns to load in the browser
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/angular-mocks/angular-mocks.js',
            {
                pattern: './public/**/*_spec.ts',
                watched: false
            }
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './public/**/*.ts': ['webpack', 'sourcemap'],
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
        webpack: {
            // karma watches the test entry points
            // (you don't need to specify the entry option)
            // webpack watches dependencies
           	resolve: {
                extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
            },
            devtool: 'sourcemap',
            module: {
                loaders: [
                    { test: /\.ts$/, loader: 'awesome-typescript-loader' },
                    { test: /\.html$/, loader: 'raw' },
                    { test: /\.css$/, loader: 'style!css' }
                ]
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        frameworks: ['jasmine'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
        // plugins: [
        //         require("karma-webpack"),
        //         require("karma-jasmine"),
        //         require("karma-phantomjs-launcher"),
        //         require("karma-sourcemap-loader"),
        //     ]
    });
};