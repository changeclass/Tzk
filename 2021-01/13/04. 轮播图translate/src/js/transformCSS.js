/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-14 11:33:02
 * @LastEditTime: 2021-01-14 11:33:02
 * @LastEditors: 小康
 */

/**
 * 描述
 * @author 小康
 * @date 2021-01-14
 * @param {Element} el 元素样式
 * @param {any} prop 变形的样式
 * @param {Number} val 变形的样式值
 * @returns {any}
 */

;(function (w) {
  function transformCSS(el, prop, val) {
    if (el.store === undefined) {
      el.store = {}
    }
    // 设置
    if (arguments.length == 3) {
      el.store[prop] = val
      // 设置样式
      let str = ''
      for (let i in el.store) {
        // i translateX rotate scale
        switch (i) {
          case 'translateX':
          case 'translateY':
          case 'translateZ':
            str += `${i}(${el.store[i]}px) `
            break
          case 'rotate':
          case 'rotateX':
          case 'rotateY':
          case 'rotateZ':
            str += `${i}(${el.store[i]}px) `
            break
          case 'scale':
          case 'scaleX':
          case 'scaleY':
          case 'scaleZ':
            str += `${i}(${el.store[i]}px) `
            break
        }
        // 设置变形样式
        el.style.transform = str
      }
      el.style.transform = `${prop}(${val}px)`
      switch (prop) {
        case 'translateX':
        case 'translateY':
        case 'translateZ':
          el.style.transform = `${prop}(${val}px)`
          break
        case 'rotate':
        case 'rotateX':
        case 'rotateY':
        case 'rotateZ':
          el.style.transform = `${prop}(${val}deg)`
          break
        case 'scale':
        case 'scaleX':
        case 'scaleY':
        case 'scaleZ':
          el.style.transform = `${prop}(${val})`
          break
      }
    }
    if (arguments.length == 2) {
      if (el.store[prop]) {
        return el.store[prop]
      }
      var start = prop.substr(0, 5)
      if (start === 'scale') {
        return 1
      } else {
        return 0
      }
    }
  }
  w.transformCSS = transformCSS
})(window)
