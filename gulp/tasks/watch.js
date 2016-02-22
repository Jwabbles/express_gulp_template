var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', function(callback) {
  watch(config.sass.files, function() { gulp.start('sass'); });
  watch(config.images.src, function() { gulp.start('images'); });
  watch(config.iconFont.src, function() { gulp.start('iconFont'); });
});
