// Обьединяет js файлы в один и переносит файл в папку dist/assets/js

module.exports = function () {

  $.gulp.task('scripts', () => {

    return $.gulp.src($.config.paths.js)

      .pipe($.gp.plumber())
      .pipe($.gp.rigger())
      .pipe($.gp.if($.config.toggle.fullJs, $.gulp.dest($.config.output.pathJs)))

      .pipe($.gp.sourcemaps.init())
      .pipe($.uglify())
      .pipe($.gp.rename({
        suffix: ".min",
        extname: ".js"
      }))
      .pipe($.gp.sourcemaps.write(''))
      .pipe($.gulp.dest($.config.output.pathJs))
      .pipe($.browserSync.stream());
  });
}
