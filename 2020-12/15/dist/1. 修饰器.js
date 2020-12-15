var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义方法装饰器
function log(target, name, descriptor) {
    /**
     * target : 被装饰的方法所属的类
     * name : 当前被装饰方法的名称
     * descriptor : 描述符
     */
    // 将原始方法提取出来
    var fn = descriptor.value;
    // 定义新的方法
    descriptor.value = function (a, b) {
        // 调用原来的方法
        var result = fn(a, b);
        // 增加新的方法
        console.log(a + "+" + b + "=" + result);
        // 将结果返回
        return result;
    };
}
var M = /** @class */ (function () {
    function M() {
    }
    // 调用装饰器
    M.add = function (a, b) {
        return a + b;
    };
    __decorate([
        log
    ], M, "add", null);
    return M;
}());
var v1 = M.add(1, 2);
console.log(v1);
