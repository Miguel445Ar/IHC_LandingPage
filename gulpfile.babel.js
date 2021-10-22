const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');


const sass = require('gulp-sass')(require('sass'));

gulp.task('html-min', () => {
    return gulp.src('./*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./build'));
})

const cssPluggins = [autoprefixer(),cssnano()];

gulp.task('sass', () => {
    return gulp.src('./src/scss/app.scss')
            .pipe(sass())
            .pipe(postcss(cssPluggins))
            .pipe(gulp.dest('./build/css'));
});
gulp.task('default', () => {
    gulp.watch('./*.html',gulp.series('html-min'));
    gulp.watch('./src/scss/*.scss',gulp.series('sass'));
    gulp.watch('./src/scss/base/*.scss',gulp.series('sass'));
    gulp.watch('./src/scss/layout/*.scss',gulp.series('sass'));
});

