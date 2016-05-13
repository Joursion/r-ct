var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function () {
    return gulp.src('public/js/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('./public'));
});


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
