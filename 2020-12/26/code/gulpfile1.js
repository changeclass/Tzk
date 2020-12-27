/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-26 13:46:54
 * @LastEditTime: 2020-12-26 13:46:55
 * @LastEditors: 小康
 */

var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

var sass = require('gulp-sass')
var less = require('gulp-less')
var cssClean = require('gulp-clean-css')

var pug = require('gulp-pug')
var htmlMin = require('gulp-htmlmin')

var livereload = require('gulp-livereload')
var connect = require('gulp-connect')

var open = require('open')
gulp.task('js', function () {
  // 配置任务操作
  return (
    gulp
      .src('src/js/*.js')
      .pipe(concat('build.js')) // 参数为合并完的文件名
      // .pipe(gulp.dest('dist/js/')) // 临时输出文件到本地
      .pipe(uglify()) // 压缩文件
      .pipe(rename({ suffix: '.min' })) // 重命名
      .pipe(gulp.dest('dist/js/')) // 输出文件
      .pipe(livereload())
      .pipe(connect.reload())
  )
})

// 编译less
gulp.task('less', function () {
  return gulp
    .src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./src/css/'))
    .pipe(livereload())
    .pipe(connect.reload())
})
// 编译scss
gulp.task('sass', function () {
  return gulp
    .src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'))
    .pipe(livereload())
    .pipe(connect.reload())
})
// 合并压缩css文件
gulp.task('css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(concat('build.css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssClean({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(livereload())
    .pipe(connect.reload())
})

// 编译pug
gulp.task('pug', function () {
  return gulp.src('./src/pug/*.pug').pipe(pug()).pipe(gulp.dest('dist/'))
})

// 压缩html
gulp.task('html', function () {
  return gulp
    .src('./src/*.html')

    .pipe(
      htmlMin({
        // 删除空格
        collapseInlineTagWhitespace: true
      })
    )
    .pipe(gulp.dest('dist/'))
    .pipe(livereload())
    .pipe(connect.reload())
})

// 监视任务
function watch() {
  // gulp.parallel('default')
  // 开启监听
  livereload.listen()
  // 确认监听的目标及绑定相应的任务
  gulp.watch(['src/js/*.js'], gulp.parallel('js'))
  gulp.watch(['src/css/*.css', 'src/less/*.less'], gulp.parallel('css'))
}

// 自动化
function server() {
  // 确认监听的目标及绑定相应的任务
  gulp.watch(['src/js/*.js'], gulp.parallel('js'))
  gulp.watch(['src/css/*.css', 'src/less/*.less'], gulp.parallel('css'))
  connect.server({
    root: 'dist/',
    livereload: true,
    port: 5000
  })
  open('http://localhost:5000/')
}

gulp.task('build', gulp.parallel('js', gulp.series(['less', 'css']), 'html'))
gulp.task('default', gulp.series('build'))
gulp.task('server', gulp.series('build', server))
gulp.task('watch', gulp.series('build', watch))
// 注册默认任务 (同步执行)
// parallel 异步执行
// series 同步执行
// series与parallel支持嵌套且与层级无关
// exports.default = gulp.parallel('js', gulp.series(['less', 'css']), 'html')
