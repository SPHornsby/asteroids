const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')

gulp.task('default', () => {
  gulp.watch(['public/js/**', 'tests/**'], ['mocha']);
})

gulp.task('mocha', () => {
  return gulp.src(['tests/*.js'], { read: false })
      .pipe(mocha({ reporter: 'spec' }))
      .on('error', gutil.log)
})