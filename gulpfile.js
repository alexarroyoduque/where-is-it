var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline');
var htmlmin = require('gulp-html-minifier');
var rename = require('gulp-rename');
var inject = require('gulp-inject-string');


var paths = {
  app: 'app',
  dist: 'dist'
};

gulp.task('minifyIndex', function() {
  gulp.src(paths.app + '/index.html')
    .pipe(inline({
      js: uglify
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('/index.min.html'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('inject', function(){
    gulp.src(paths.dist + '/index.min.html')
        .pipe(inject.prepend('document.write(`'))
        .pipe(inject.append('`)'))
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minifyIndex', 'inject'])
