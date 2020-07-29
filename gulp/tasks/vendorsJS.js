const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'dev/static/js/vendor/jquery-3.3.1.min.js',
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/slick-carousel/slick/slick.js',
  // 'node_modules/swiper/swiper-bundle.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
