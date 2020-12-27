/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-26 17:11:49
 * @LastEditTime: 2020-12-26 17:11:49
 * @LastEditors: 小康
 */
var gulp = require('gulp')

var pug = require('gulp-pug')
var htmlmin = require('gulp-htmlmin')
var less = require('gulp-less')
var sass = require('gulp-sass')
var cssClean = require('gulp-clean-css')

var uglify = require('gulp-uglify')
var babel = require('gulp-babel')

var concat = require('gulp-concat')
var rename = require('gulp-rename')
var del = require('del')

var connect = require('gulp-connect')
var open = require('open')
// 删除dist目录
const delDest = () => {
  return del(['./dist/'])
}
// 删除 less 和 scss 产生的文件夹
const delLessScss = () => {
  return del(['./src/css/less/', './src/css/scss/'])
}

// 编译pug任务
const pugTask = () => {
  return gulp
    .src('./src/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
    .pipe(connect.reload())
}
// 压缩html
const htmlminTask = () => {
  return gulp
    .src('./dist/**/*.html')
    .pipe(
      htmlmin({
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
      })
    )
    .pipe(connect.reload())
}

// 编译scss
const scssTask = () => {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/scss/'))
    .pipe(connect.reload())
}
// 编译less
const lessTask = () => {
  return gulp
    .src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/css/less/'))
    .pipe(connect.reload())
}

// 处理css文件
const cssTask = async () => {
  return gulp
    .src('./src/css/**/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
}

// 编译js
const jsTask = () => {
  return gulp
    .src('src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(uglify()) // 压缩文件
    .pipe(gulp.dest('dist/js/')) // 输出文件
    .pipe(connect.reload())
}
const server = () => {
  gulp.watch(['src/scss/**/*.scss'], gulp.series(scssTask))
  gulp.watch(['src/less/**/*.less'], gulp.series(lessTask))
  gulp.watch(['src/css/**/*.css'], gulp.series(cssTask))
  gulp.watch(['src/pug/**/*.pug'], gulp.series(pugTask))
  gulp.watch(['src/js/**/*.js'], gulp.series(jsTask))
  connect.server({
    root: 'dist/',
    livereload: true,
    port: 5000
  })
  open('http://localhost:5000/')
}

gulp.task(
  'build',
  gulp.series(
    delDest,
    pugTask,
    htmlminTask,
    scssTask,
    lessTask,
    cssTask,
    jsTask,
    delLessScss
  )
)
gulp.task('server', gulp.series('build', server))
