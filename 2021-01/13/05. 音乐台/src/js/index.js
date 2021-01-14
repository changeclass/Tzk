import '../style/index.less'
import './transformCSS'
import './swiper'

//全局代码
;(function () {
  //阻止默认行为
  app.addEventListener('touchstart', function (e) {
    e.preventDefault()
  })

  //移动端适配
  //先获取屏幕宽
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 10 + 'px'
  window.onresize = function () {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 10 + 'px'
  }
})()

// 头部逻辑
;(function () {
  const menuBtn = document.querySelector('#header .up .menu')
  const zhezhao = document.querySelector('#header .zhezhao')
  const app = document.querySelector('#app')
  menuBtn.addEventListener('touchstart', function () {
    // 使按钮的状态改变
    this.classList.toggle('open')
    // 使菜单的显示状态改变
    zhezhao.classList.toggle('open')
  })
  const input = document.querySelector('#search')
  input.addEventListener('touchstart', function (e) {
    e.stopPropagation()
  })
  app.addEventListener('touchstart', function (e) {
    input.blur()
  })
})()
;(function () {
  var nav = document.querySelector('#nav')
  var wrap = nav.querySelector('.wrap')
  nav.addEventListener('touchstart', function (e) {
    // 获取起始点触点位置
    this.x = e.touches[0].clientX
    // 获取当前包裹元素的偏移量
    this.left = transformCSS(wrap, 'translateX')
  })
  nav.addEventListener('touchmove', function (e) {
    this._x = e.touches[0].clientX
    const newLeft = this._x - this.x + this.left
    transformCSS(wrap, 'translateX', newLeft)
  })
})()
