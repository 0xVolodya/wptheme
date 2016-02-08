var fs = require('fs');
var path = require('path');

var gulp = require('gulp');


// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');;


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------


gulp.task('sass', function () {
    gulp.src('dist/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload());

});

gulp.task('html', function () {
    gulp.src('dist/*.html')
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('dist/*.html', ['html']);
    gulp.watch('dist/css/*.scss', ['sass']);

});



gulp.task('default', ['watch']);
