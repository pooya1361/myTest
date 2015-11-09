var gulp = require('gulp');
var del = require('del');

gulp.task('test', [ 'lint-hard' ]);

var eslint = require('gulp-eslint');

gulp.task('lint', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('lint-hard', function () {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

var babel = require('gulp-babel');

gulp.task('transform', function () {
  return gulp.src('./src/**/*.js')
    .pipe(babel({
      stage: 0,
      retainLines: true,
      auxiliaryCommentBefore: "istanbul ignore next"
    }))
    .pipe(gulp.dest());
});

gulp.task('tdd', [ 'lint' ], function (done) {
  gulp.watch([ "./src/**/*.js" ], [ 'lint' ]);
});
