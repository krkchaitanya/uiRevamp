var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

function gulpErrorHandler(error) {
    console.log(error.string);
}

gulp.task('hey', function() {
    console.log("..Gulp bundler onBoard..");
});

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .on('error', gulpErrorHandler)
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream)
});

// Move Fonts Folder to src/fonts
gulp.task('fonts', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
      .pipe(gulp.dest("src/fonts"));
  });

  // Move Font Awesome CSS to src/css
  gulp.task('fa', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
      .pipe(gulp.dest("src/css"));
  });

