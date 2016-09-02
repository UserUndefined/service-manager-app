// Karma configuration
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/bower_components/angular-ui-router/release/angular-ui-router.js',
        'app/bower_components/lodash/lodash.js',
        'app/bower_components/restangular/dist/restangular.js',
        'app/bower_components/spin.js/spin.js',
        'app/bower_components/angular-spinner/angular-spinner.js',
        'app/bower_components/angular-notify/dist/angular-notify.js',
        'app/bower_components/moment/moment.js',
        'app/bower_components/angular-cookie/angular-cookie.js',
        'app/bower_components/blob-polyfill/Blob.js',
        'app/bower_components/file-saver.js/FileSaver.js',
        'app/bower_components/angular-file-saver/dist/angular-file-saver.bundle.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/highcharts-ng/dist/highcharts-ng.js',
        'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        'app/bower_components/angular-touch/angular-touch.js',
        'app/bower_components/angular-messages/angular-messages.js',
        'app/bower_components/angular-sanitize/angular-sanitize.js',
        'app/bower_components/angular-ui-select/dist/select.js',
        'app/scripts/main.js',
        'test/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

      plugins: [
        'karma-junit-reporter',
          'karma-chrome-launcher',
          'karma-firefox-launcher',
          'karma-jasmine',
          'karma-phantomjs-launcher'
      ],

      junitreporter: {
          outputFile: 'test/unit.xml'
      },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
