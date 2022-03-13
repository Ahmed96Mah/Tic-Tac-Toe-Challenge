const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildCssStyles() {
    return src('sass/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

function watcherFunc() {
    watch(['sass/*.scss'], buildCssStyles)
}

exports.default = series(buildCssStyles, watcherFunc);