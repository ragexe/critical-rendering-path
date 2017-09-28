var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});

gulp.task('deploy', function() {
    return gulp.src('./dist/**/*')
        .pipe(ghPages());
});

