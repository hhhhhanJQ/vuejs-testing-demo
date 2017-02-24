var cssUtility = require('./karma/cssUtility');

// Karma configuration
module.exports = function (config) {

    config.set({

        frameworks: ['jasmine'],

        port: 9876, // web server port

        colors: true,

        logLevel: config.LOG_INFO,

        reporters: ['progress'], // dots, progress

        autoWatch: true, // enable / disable watching files & then run tests

        browsers: ['PhantomJS'], //'PhantomJS', 'Firefox',

        singleRun: true, // if true, Karma captures browsers, runs the tests and exits

        concurrency: Infinity, // how many browser should be started simultaneous

        webpack: {
            entry: {
                app: './resources/assets/js/tests/index.js'
            },
            resolve: {
                extensions: ['.js', '.vue', '.json'],
                modules: [
                    __dirname + '/resources/assets/js',
                    __dirname + '/node_modules'
                ]
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                        options: {                        
                            loaders: cssUtility.cssLoaders({
                                extract: false
                            })
                        }
                    },
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        include: [
                            __dirname + '/resources/assets/js',
                        ],
                        exclude: __dirname + '/node_modules'
                    }
                ].concat(cssUtility.styleLoaders())
            }
        },

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        /**
         * base path that will be used to resolve all patterns (eg. files, exclude)
         * This should be your JS Folder where all source javascript
         * files are located.
         */
        basePath: './resources/assets/js/',

        /**
         * list of files / patterns to load in the browser
         * The pattern just says load all files within a
         * tests directory including subdirectories
         **/
        files: ['tests/index.js'],

        // list of files to exclude
        exclude: [],

        /**
         * pre-process matching files before serving them to the browser
         * Add your App entry point as well as your Tests files which should be
         * stored under the tests directory in your basePath also this expects
         * you to save your tests with a .spec.js file extension. This assumes we
         * are writing in ES6 and would run our file through babel before webpack.
         */
        preprocessors: {
            'tests/index.js': ['webpack']
        }
    });
}
