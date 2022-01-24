// Переносит файлы разного назначения в папку dist

module.exports = function () {

  $.gulp.task('copy', () => {

    return $.gulp.src([
      $.config.paths.other + '*.svg',
      $.config.paths.other + '*.webmanifest',
      $.config.paths.other + '*.png',
    ], {
      base: 'src/other'
    })

      .pipe($.gulp.dest($.config.output.path))
  });
}
