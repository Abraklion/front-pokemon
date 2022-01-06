// Поднимает сервер

module.exports = function () {

  $.gulp.task('serve', (done) => {

    $.browserSync.init({
      server: {
        baseDir: $.config.output.path
      },
      cors: true,
      notify: false,
      ui: false,
      port: 3000
    });

    done();
  });
}
