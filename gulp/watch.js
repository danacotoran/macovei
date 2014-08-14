'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;

var browserSync = require('browser-sync');

// Common watch hooks.
gulp.task('watch:common', ['build'], function () {
  gulp.watch(paths.app + '/index.jade', ['index.html']);
  gulp.watch(paths.app + '/templates/*.jade', ['templates']);
  gulp.watch(paths.app + '/**/*.js', ['js:dev']);
  gulp.watch(paths.app + '/**/*.styl', ['css']);
});

// Build the project and start a web development server.
gulp.task('watch', ['watch:common'], function (done) {
  browserSyncRun(done, paths.tmp);
});

function browserSyncRun(done, path) {
  browserSync({
    server: {
      baseDir: path
    },
    port: 4000
  }, function () {
    done();
  });
}

// Serve the ./.tmp folder using a static web development server.
gulp.task('serve', function (done) {
  browserSyncRun(done, paths.tmp);
});

// Serve the ./dist folder using a static web development server.
gulp.task('serve:dist', function (done) {
  browserSyncRun(done, paths.dist);
});