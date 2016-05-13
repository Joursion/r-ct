var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-clean-css');


gulp.task('js', function () {
    gulp.src('./src/bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dest'));
});

gulp.task('css', function () {
    gulp.src('./src/css/*css')
    .pipe(minify())
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['css', 'js']);




/*
var babel = require('gulp-babel');
var es2015 = require('babel-preset-es2015');
var gulp = require('gulp');

gulp.task('babel', function() {
    return gulp.src('./public/js/index.jsx')
        .pipe(babel({
            presets: [es2015]
        }))
        .pipe(gulp.dest('dist'));
});*/
