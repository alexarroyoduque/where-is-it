var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline');
var htmlmin = require('gulp-html-minifier');

gulp.task('minifyIndex', function() {
  gulp.src('index.html')
    .pipe(inline({
      js: uglify,
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minifyIndex'])
