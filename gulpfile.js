import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
import sass from 'sass';
import gulpSass from 'gulp-sass';
const func = gulpSass(sass);

const buildCssStyles = () => {
  return src('sass/*.scss').pipe(func()).pipe(dest('css'));
};

const watcherFunc = () => {
  watch(['sass/*.scss'], buildCssStyles);
};

const _default = series(buildCssStyles, watcherFunc);
export { _default as default };
