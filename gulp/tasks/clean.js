// Удаляет папку dist

module.exports = function () {

  $.gulp.task('clean', () => {

    return $.del($.config.output.path);

  });
}
