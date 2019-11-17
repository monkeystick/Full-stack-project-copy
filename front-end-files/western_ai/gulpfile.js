'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST = './src/Assets/css';


//Styles tasks
gulp.task('sass', function(){
    return gulp.src('source-files')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('destination'))
});

gulp.task('sass', function(){
    return gulp.src(SCSS_SRC ) // Gets all files ending with .scss in /scss and children dirs
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest(SCSS_DEST))
});


//Gulp Watch syntax has changed from 3.x in 4.x
gulp.task('watch', function() {
    gulp.watch(SCSS_SRC, gulp.series('sass'));
});


gulp.task('default', gulp.series('watch'));
