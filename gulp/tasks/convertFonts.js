// Конвертирует шрифты .ttf в формат .ttf2woff и .ttf2woff2

module.exports = function () {

  $.gulp.task('cf', () => {

    $.gulp.src($.config.paths.fonts + '*.ttf')
      .pipe($.gp.ttf2woff())
      .pipe($.gulp.dest($.config.paths.fonts));

    return $.gulp.src($.config.paths.fonts + '*.ttf')
      .pipe($.gp.ttf2woff2())
      .pipe($.gulp.dest($.config.paths.fonts));
  });
}
