// Переносит файлы разного назначения в папку dist

module.exports = function () {

  $.gulp.task('copy', () => {

    return $.gulp.src([
      $.config.paths.other + '*.ico',
      $.config.paths.other + '*.webmanifest'
    ], {
      base: 'src/other'
    })

      .pipe($.gulp.dest($.config.output.path))
  });
}
