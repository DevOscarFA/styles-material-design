var gulp = require('gulp');
var sass = require('gulp-sass');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var sourse = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var concatJS = require('gulp-concat');

var config = {
    styles:{
        main: './src/material-design-lite.scss',
        watch: './src/**/*.scss',
        output: './public_html/css'
    },
    scripts:{
        main: './javascript/main.js',
        controller: './javascript/controllers/**/*.js',
        watch: './javascript/**/*.js',
        output: './public_html/js',
        outputController: './public_html/js/controllers'
    },
};

gulp.task('build:css',function(){
    gulp.src(config.styles.main)
            .pipe(sass({
                use: nib,
                'include css': true 
            }))
            .pipe(minifyCSS())
            .pipe(gulp.dest(config.styles.output));
});

gulp.task("concatJS",function(){
    gulp.src([
        config.scripts.controller
    ])
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.outputController));
});

gulp.task('build:js',function(){
    return browserify(config.scripts.main)
            .bundle()
            .pipe(sourse('main.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(config.scripts.output));
});


gulp.task('watch', function(){
    gulp.watch(config.scripts.watch, ['build:js']);
    gulp.watch(config.scripts.watch, ['concatJS']);
    gulp.watch(config.styles.watch, ['build:css']);
});

gulp.task('build', ['build:css','build:js', 'concatJS']);

gulp.task('default', ['watch','build']);