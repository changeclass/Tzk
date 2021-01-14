import '../style/index.less'
import './transformCSS'
import './swiper'

// 全局代码
;(function () {
  // 阻止默认行为
  const app = document.getElementById('app')
  app.addEventListener('touchstart', function (e) {
    e.preventDefault()
  })

  // 移动端适配
  window.onresize = function () {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 10 + 'px'
  }
})()
