/**
 * @description: 能够实现对元素的动画控制
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-18 08:52:23
 * @LastEditTime: 2021-01-18 08:52:23
 * @LastEditors: 小康
 * @example
tweenAnimation(el, 'width', 200, 956, 5000, 10, 'linear');

 function backEaseOut(t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }

 function easeOut(t,b,c,d){
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    }

 function linear(t,b,c,d){
        return c*t/d + b;
    }

 // 2s  200 9000  10ms    easeOut
 tweenAnimation(el, 'top', 200, 9000, 2000, 10, 'easeOut');
 */

/**
 * 描述
 * @author 小康
 * @date 2021-01-18
 * @param {Element} el 元素对象
 * @param {Element.style} style 样式
 * @param {Number} init 起始位置
 * @param {Number} end 结束位置
 * @param {Number} time 时间
 * @param {Number} jiange 时间间隔
 * @param {String} backEaseOut easeOut linear 变化类型
 * @returns {any}
 */
function tweenAnimation(el, style, init, end, time, jiange, type) {
  //动画切换的函数集合
  var tween = {
    backEaseOut: function (t, b, c, d, s) {
      if (s == undefined) s = 0
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeOut: function (t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    linear: function (t, b, c, d) {
      return (c * t) / d + b
    }
  }
  //type 参数初始化
  var type = type === undefined ? 'linear' : type

  //实现功能
  //初始化参数
  var t = 0
  var b = init
  var c = end - init
  var d = time

  if (el.timer === undefined) {
    el.timer = {}
  }

  //启动定时器
  el.timer[style] = setInterval(function () {
    //4. 清空定时器
    if (t >= d) {
      clearInterval(el.timer[style])
      return
    }

    //1. 时间自增
    t += jiange
    //2. 计算新的值
    var v = tween[type](t, b, c, d)
    //3. 设置样式  width height  px    translateX translateY scale opacity
    switch (style) {
      case 'width':
      case 'height':
      case 'left':
      case 'top':
        el.style[style] = v + 'px'
        break
      case 'translateX':
      case 'translateY':
      case 'translateZ':
      case 'scale':
      case 'scaleX':
      case 'scaleY':
      case 'scaleZ':
      case 'rotate':
      case 'rotateX':
      case 'rotateY':
        transformCSS(el, style, v)
        break

      case 'opacity':
        el.style[style] = v
        break
    }
  }, jiange)
}
