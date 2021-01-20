/**
 *
 * 函数名
 *  Touchview
 *
 * 使用示例
    new Touchview('#box');

    new Touchview('img');

    new Touchview('div');

    依赖
    gesture.js


 */
function Touchview(selector) {
    //获取元素对象
    var el = document.querySelector(selector);

    //绑定
    gesture(el, {
        start: function(){
            this.initScale = transformCSS(el, 'scale');
            this.initRotation = transformCSS(el,'rotate');
        },
        change: function(e){
            //设置元素的显示比例  0.8 * 3   2.4     0.7* 3  1.68
            transformCSS(el, 'scale', e.scale * this.initScale);
            //元素旋转
            transformCSS(el, 'rotate', this.initRotation + e.rotation);
        }
    });

}

