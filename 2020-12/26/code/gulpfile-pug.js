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

var del = require('del')

// 删除dist目录
const delDest = () => {
  return del(['./dist/'])
}

// 编译pug任务
const pugTask = () => {
  return gulp.src('./src/pug/*.pug').pipe(pug()).pipe(gulp.dest('./dist/'))
}
// 压缩html
const htmlminTask = () => {
  return gulp.src('./dist/**/*.html').pipe(
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
}

exports.default = gulp.series(delDest, pugTask, htmlminTask)
