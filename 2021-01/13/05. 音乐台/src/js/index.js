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
    zhezhao.classList.toggle('close')
  })
  const input = document.querySelector('#search')
  input.addEventListener('touchstart', function (e) {
    e.stopPropagation()
  })
  app.addEventListener('touchstart', function (e) {
    input.blur()
  })
})()
// 导航区
;(function () {
  var nav = document.querySelector('#nav')
  var wrap = nav.querySelector('.wrap')
  const navItem = nav.querySelectorAll('li')
  var isMoving = false
  nav.addEventListener('touchstart', function (e) {
    // 获取起始点触点位置
    this.x = e.touches[0].clientX
    // 获取当前包裹元素的偏移量
    this.left = transformCSS(wrap, 'translateX')
    wrap.style.transition = 'none'
    // 获取触摸开始的时间
    this.startTime = Date.now()
  })
  nav.addEventListener('touchmove', function (e) {
    this._x = e.touches[0].clientX
    let newLeft = this._x - this.x + this.left
    if (newLeft > 0) {
      newLeft = (this._x - this.x) / 2
    }
    const minTranslateX = nav.offsetWidth - wrap.offsetWidth
    if (newLeft < minTranslateX) {
      newLeft = minTranslateX + (this._x - this.x) / 2
    }

    transformCSS(wrap, 'translateX', newLeft)

    // 修改状态变量的值
    isMoving = true
  })
  // 绑定触摸结束事件
  nav.addEventListener('touchend', function (e) {
    // 获取当前包裹元素的translateX的值
    let translateX = transformCSS(wrap, 'translateX')
    // 获取触摸的位移
    this._x = e.changedTouches[0].clientX
    // 计算位置
    const disX = this._x - this.x
    // 获取触摸结束的时间
    this.endTime = Date.now()
    const disTime = this.endTime - this.startTime
    // 计算速度
    const v = disX / disTime
    // 位移
    const s = v * 100
    translateX += s
    // 过渡切换
    wrap.style.transition = '.5s ease-out'
    transformCSS(wrap, 'translateX', translateX)
    // 判断是否越界
    if (translateX > 0) {
      // 增加过渡
      wrap.style.transition = '.5s cubic-bezier(.21,.68,.42,1.77)'
      transformCSS(wrap, 'translateX', 0)
    }
    const minTranslateX = nav.offsetWidth - wrap.offsetWidth
    if (translateX < minTranslateX) {
      // 增加过渡
      wrap.style.transition = '.5s cubic-bezier(.21,.68,.42,1.77)'
      transformCSS(wrap, 'translateX', minTranslateX)
    }
    isMoving = false
  })

  navItem.forEach(function (i) {
    i.addEventListener('touchend', function () {
      if (isMoving) return
      navItem.forEach(function (v) {
        // 移除每一个导航元素的active class
        v.classList.remove('active')
      })
      this.classList.add('active')
    })
  })
})()
// 轮播图
;(function () {
  new Swiper('#swiper', {
    pagination: true,
    loop: true
  })
})()
