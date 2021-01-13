import '../style/index.less'

const app = document.querySelector('#app')

const container = document.querySelector('#swiper-container')
const wrapper = container.querySelector('.swiper-wrapper')
// 获取图片的数量
const len = container.querySelectorAll('.swiper-slide')
// 当前显示的图片的下标
let index = 0
// 获取所有小圆点
const dots = container.querySelectorAll('.swiper-pagination span')
app.addEventListener('touchstart', function (e) {
  e.preventDefault()
})

// 触摸开始事件
container.addEventListener('touchstart', function (e) {
  // 获取触摸开始时的触点位置
  this.x = e.touches[0].clientX

  // 获取包裹元素的水平偏移量
  this.left = wrapper.offsetLeft

  // 移除过度效果
  wrapper.style.transition = 'none'
  // 获取按下时的时间点
  this.touchStartTime = Date.now()
})

// 触摸滑动时事件
container.addEventListener('touchmove', function (e) {
  this._x = e.touches[0].clientX
  // 计算新的left值
  const newLeft = this._x - this.x + this.left
  // 设置left的值
  wrapper.style.left = newLeft + 'px'
})

// 触摸结束事件
container.addEventListener('touchend', function (e) {
  // 增加过度
  wrapper.style.transition = 'all .5s'
  // 获取触点结束时触点位置
  this._x = e.changedTouches[0].clientX
  // 判断距离
  const disX = Math.abs(this._x - this.x)
  // 判断时间
  this.touchEndTime = Date.now()

  if (
    disX > container.offsetWidth / 2 ||
    this.touchEndTime - this.touchStartTime <= 300
  ) {
    // 向左滑动
    if (this._x < this.x) {
      index++
    }
    // 向右滑动
    if (this._x > this.x) {
      index--
    }
  }

  // 检测是否越界
  if (index < 0) {
    index = 0
  }
  if (index > len.length - 1) {
    index = len.length - 1
  }

  /**
   * index => left
   *   0   =>  0
   *   1   => index * -375
   */
  // 计算新的left的值
  const newLeft = -index * container.offsetWidth
  // 设置left的样式
  wrapper.style.left = newLeft + 'px'

  // 点的切换
  // 移除所有导航点的active类
  dots.forEach(function (dot) {
    dot.classList.remove('active')
  })
  // 当前索引的导航点 增加 active 类
  dots[index].classList.add('active')
})
