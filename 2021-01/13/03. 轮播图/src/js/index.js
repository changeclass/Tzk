import '../style/index.less'

const app = document.querySelector('#app')

const container = document.querySelector('#swiper-container')
const wrapper = container.querySelector('.swiper-wrapper')

app.addEventListener('touchstart', function (e) {
  e.preventDefault()
})

// 触摸开始事件
container.addEventListener('touchstart', function (e) {
  // 获取触摸开始时的触点位置
  this.x = e.touches[0].clientX

  // 获取包裹元素的水平偏移量
  this.left = wrapper.offsetLeft
})

// 触摸滑动时事件
container.addEventListener('touchmove', function (e) {
  this._x = e.touches[0].clientX
  // 计算新的left值
  const newLeft = this._x - this.x + this.left
  // 设置left的值
  wrapper.style.left = newLeft + 'px'
})
