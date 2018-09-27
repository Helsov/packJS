const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');

gulp.task('watch', () =>
    gulp.src('source/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.min.js'))
        .pipe(jsmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/js'))
);