var swiper1 = new Swiper('#swiper1', {
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true
})

// 导航
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
    e.stopPropagation()
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
})()

// 全局滚动
;(function () {
  var pullUpUpdate = document.querySelector('.pull-up-update')
  var main = document.querySelector('#app')
  var content = document.querySelector('#container')
  var count = 0
  const touchscroll = new Touchscroll('#app', '#container', {
    width: '0px',
    bg: 'rgb(52,69,78)',
    move: function () {
      // 当前
      var translateY = transformCSS(content, 'translateY')
      // 最小translateY
      var minTranslateY = main.offsetHeight - content.offsetHeight
      if (translateY < minTranslateY) {
        var disY = Math.abs(translateY - minTranslateY)
        var PH = pullUpUpdate.offsetHeight
        // 滑出了边界 修改元素显示比例
        pullUpUpdate.scale = Math.min(disY / PH, 1)
        transformCSS(pullUpUpdate, 'scale', pullUpUpdate.scale)
      }
    },
    end: function () {
      if (pullUpUpdate.scale >= 1) {
        if (count <= 1) {
          console.log(count)
          document.querySelector(
            '.do-you-like'
          ).innerHTML += document.querySelector('.do-you-like').innerHTML
          count++
        }
        // 更新 滚动条的高度
        touchscroll.init()
        // 修改滚动条的位置
        var scrollBarTranslateY =
          (-transformCSS(content, 'translateY') / content.offsetHeight) *
          main.offsetHeight
        //获取scrollBar元素
        var scrollBar = document.querySelector('.scroll-bar')

        transformCSS(scrollBar, 'translateY', scrollBarTranslateY) //
      }

      // 检测是否已出现
      pullUpUpdate.scale = 0
    }
  })
})()
