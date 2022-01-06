// Компелирует scss с css и переносит файл в папку dist/assets/css/

module.exports = function () {

  $.gulp.task('styles', () => {

    return $.gulp.src($.config.paths.css)

      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe($.gp.postcss([$.autoprefixer()]))
      .pipe($.gp.cssbeautify())
      .pipe($.gp.if($.config.toggle.fullCss, $.gulp.dest($.config.output.pathCss)))

      .pipe($.gp.if($.config.toggle.mediaEndFile, $.gp.groupCssMediaQueries()))
      .pipe($.gp.csso())
      .pipe($.gp.rename({
        suffix: ".min",
        extname: ".css"
      }))
      .pipe($.gulp.dest($.config.output.pathCss))
      .pipe($.browserSync.stream());
  });
}
