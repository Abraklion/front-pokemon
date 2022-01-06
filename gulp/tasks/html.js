// Переносит html файлы в папку dist

module.exports = function () {

  $.gulp.task('html', () => {

    $.panini.refresh();

    return $.gulp.src($.config.paths.html, { base: "src/" })
      .pipe($.gp.plumber())
      .pipe($.panini({
        root: 'src/',
        layouts: 'src/templates/layouts/',
        partials: 'src/templates/partials/',
        helpers: 'src/templates/helpers/',
        data: 'src/templates/data/'
      }))
      .pipe($.gp.htmlBeautify({
        "indent_size": 2,
        "max_preserve_newlines": 1
      }))
      .pipe($.gp.if($.config.toggle.minHtml, $.gp.htmlmin({ collapseWhitespace: true })))
      .pipe($.gulp.dest($.config.output.path))
      .pipe($.browserSync.stream());
  });
}

