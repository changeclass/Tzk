import '../style/index.less'

const app = document.querySelector('#app')

const container = document.querySelector('#swiper-container')
const wrapper = container.querySelector('.swiper-wrapper')
// 获取所有图片
const slides = container.querySelectorAll('.swiper-slide')
// 当前显示的图片的下标
var index = 0
// 获取所有小圆点
let dots = null
// 获取小圆点的容器
const pagination = container.querySelector('.swiper-pagination')

// 无缝滚动
wrapper.innerHTML += wrapper.innerHTML
const slidesNew = container.querySelectorAll('.swiper-slide')
app.addEventListener('touchstart', function (e) {
  e.preventDefault()
})

// 触摸开始事件
container.addEventListener('touchstart', function (e) {
  // 移除过度效果
  wrapper.style.transition = 'none'
  // 获取按下时的时间点
  this.touchStartTime = Date.now()
  // 判断索引下标
  if (index == 0) {
    index = slides.length
    const newLeft = -index * container.offsetWidth
    // 设置left的样式
    wrapper.style.left = newLeft + 'px'
  }
  // 右侧边界
  if (index == slidesNew.length - 1) {
    index = slides.length - 1
    const newLeft = -index * container.offsetWidth
    // 设置left的样式
    wrapper.style.left = newLeft + 'px'
  }
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
  if (index > slidesNew.length - 1) {
    index = slidesNew.length - 1
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
  dots[index % slides.length].classList.add('active')
})

// 初始化函数
function init() {
  // 容器设置 高度
  window.onload = function () {
    // 获取第一个图片的高度
    const h = slidesNew[0].offsetHeight
    container.style.height = h + 'px'
  }
  // 包裹元素的宽度
  wrapper.style.width = slidesNew.length * 100 + '%'
  // 设置子元素的宽度
  slidesNew.forEach((item) => {
    item.style.width = 100 / slidesNew.length + '%'
  })
  // 根据图片数量动态创建导航点的个数
  for (var i = 0; i < slides.length; i++) {
    const span = document.createElement('span')
    if (i == 0) {
      span.className = 'active'
    }
    pagination.appendChild(span)
  }
  dots = container.querySelectorAll('.swiper-pagination span')
}
init()
