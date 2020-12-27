/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2020-12-26 17:11:49
 * @LastEditTime: 2020-12-26 17:11:49
 * @LastEditors: 小康
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')

const js = () => {
  return (
    gulp
      .src('src/js/*.js')
      // .pipe(concat('build.js')) // 参数为合并完的文件名
      .pipe(
        babel({
          presets: ['@babel/env']
        })
      )
      // .pipe(gulp.dest('dist/js/')) // 临时输出文件到本地
      .pipe(uglify()) // 压缩文件
      // .pipe(rename({ suffix: '.min' })) // 重命名
      .pipe(gulp.dest('dist/js/')) // 输出文件
  )
}

exports.default = gulp.parallel(js)
