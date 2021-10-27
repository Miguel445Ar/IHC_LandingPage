const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');


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

gulp.task ('babel',() => {
    return gulp.src('./src/js/*.js')
            .pipe(terser())
            .pipe(gulp.dest('./build/js'));
            
});

gulp.task('minImg', () => {
    return gulp.src('./src/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/img'));
});

gulp.task('default', () => {
    gulp.watch('./*.html',gulp.series('html-min'));
    gulp.watch('./src/scss/*.scss',gulp.series('sass'));
    gulp.watch('./src/scss/base/*.scss',gulp.series('sass'));
    gulp.watch('./src/scss/layout/*.scss',gulp.series('sass'));
    gulp.watch('./src/js/*.js',gulp.series('babel'));
    gulp.watch('./src/js/modulesJS/*.js',gulp.series('babel'));
});


