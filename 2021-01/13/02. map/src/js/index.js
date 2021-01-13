/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-13 08:49:31
 * @LastEditTime: 2021-01-13 08:49:31
 * @LastEditors: 小康
 */
import '../style/index.less'
const box = document.querySelector('#box')
const img = document.querySelector('img')
box.addEventListener('touchstart', function (e) {
  // 获取触摸时的尺寸
  this.x = e.targetTouches[0].clientX
  this.left = img.offsetLeft

  this.y = e.targetTouches[0].clientY

  this.top = img.offsetTop
})

// 手指移动时的尺寸
box.addEventListener('touchmove', function (e) {
  // 获取移动后的触点位置
  this._x = e.targetTouches[0].clientX
  this.newLeft = this._x - this.x + this.left

  this._y = e.targetTouches[0].clientY
  this.newTop = this._y - this.y + this.top

  // 边界检测
  if (this.newLeft >= 0) {
    this.newLeft = 0
  }
  const minLeft = box.offsetWidth - img.offsetWidth
  if (this.newLeft <= minLeft) {
    this.newLeft = minLeft
  }

  if (this.newTop >= 0) {
    this.newTop = 0
  }
  const minTop = box.offsetHeight - img.offsetHeight
  if (this.newTop <= minTop) {
    this.newTop = minTop
  }
  img.style.left = this.newLeft + 'px'

  img.style.top = this.newTop + 'px'
})
