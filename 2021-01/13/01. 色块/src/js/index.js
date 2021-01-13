/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-01-13 08:49:31
 * @LastEditTime: 2021-01-13 08:49:31
 * @LastEditors: 小康
 */
import '../style/index.less'
// import 'lib-flexible/flexible'
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 10 + 'px'

window.onresize = function () {
  document.documentElement.style.fontSize =
    document.documentElement.clientWidth / 10 + 'px'
}
