/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-26 17:11:49
 * @LastEditTime: 2020-12-26 17:11:49
 * @LastEditors: 小康
 */
var gulp = require('gulp')

var less = require('gulp-less')
var sass = require('gulp-sass')
var cssClean = require('gulp-clean-css')

var concat = require('gulp-concat')
var rename = require('gulp-rename')
var del = require('del')

// 编译scss
const scssTask = () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/scss/'))
}
// 编译less
const lessTask = () => {
  return gulp
    .src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/css/less/'))
}
// 删除 less 和 scss 产生的文件夹
const delLessScss = () => {
  return del(['./src/css/less/', './src/css/scss/'])
}
// 处理css文件
const cssTask = async () => {
  return gulp
    .src('./src/css/**/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'))
}

exports.default = gulp.series(
  gulp.parallel(scssTask, lessTask),
  cssTask,
  delLessScss
)
