// Минифицирует svg файлы и делает svgSprite, и переносит в папку dist/assets/img/

module.exports = function () {

  $.gulp.task('sprite', () => {

    return $.gulp.src($.config.paths.images.svg)

      .pipe($.gp.imagemin([
        $.gp.imagemin.svgo({
          plugins: [
            {removeViewBox: false}
          ]
        })
      ]))

      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {xmlMode: true}
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg"
          }
        }
      }))

      .pipe($.gp.rename('sprite.svg'))
      .pipe($.gulp.dest($.config.output.pathImg));
  });
}
