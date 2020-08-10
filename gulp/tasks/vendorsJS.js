const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'dev/static/js/vendor/jquery-3.3.1.min.js',
  'dev/static/js/vendor/responsive.js',
  'node_modules/svg4everybody/dist/svg4everybody.min.js',
  'node_modules/slick-carousel/slick/slick.js',
  'node_modules/readmore-js/readmore.js',
  'node_modules/headhesive/dist/headhesive.js',
  'dev/static/js/vendor/rateyo.js',
  'node_modules/inputmask/dist/jquery.inputmask.js',
  'node_modules/aos/dist/aos.js',
  'node_modules/izimodal/js/iziModal.js',
  'dev/static/js/vendor/scroll.js',
  'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
  // 'node_modules/swiper/swiper-bundle.js',
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulp.dest('dist/static/js/'))
    : cb();
};
