var gulp = require('gulp');
var replace = require('gulp-replace');
var uglify = require('gulp-uglify');
var inline = require('gulp-inline');
var htmlmin = require('gulp-html-minifier');
var rename = require('gulp-rename');
var inject = require('gulp-inject-string');

var paths = {
  app: 'app',
  dist: 'dist'
};

gulp.task('copyIndex', function() {
  gulp.src(paths.app + '/index.html')
  .pipe(replace('game.html', 'game.min.html'))
  .pipe(gulp.dest(paths.dist));
})

gulp.task('minifyGame', function() {
  gulp.src(paths.app + '/game.html')
    .pipe(inline({
      js: uglify
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('/game.min.html'))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('inject', function(){
    gulp.src(paths.dist + '/game.min.html')
        .pipe(inject.prepend('document.write(`'))
        .pipe(inject.append('`)'))
        .pipe(rename('game.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minifyGame', 'copyIndex', 'inject'])
