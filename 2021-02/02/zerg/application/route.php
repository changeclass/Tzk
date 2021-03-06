<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\Route;
/* 获取指定id的banner信息 */
Route::get('api/:version/banner/:id','api/:version.Banner/getBanner');

/* 获取主题 */
Route::get('api/:version/theme','api/:version.Theme/getSimpleList');
/* 获取单个主题 */
Route::get('api/:version/theme/:id','api/:version.Theme/getComplexOne');

/* 产品相关路由 */
Route::group('api/:version/product',function (){
    /* 获取最近商品 */
    Route::get('/recent','api/:version.Product/getRecent');
    /* 获取商品分类 */
    Route::get('/by_category','api/:version.Product/getAllInCategory');
    /* 获取某个商品 */
    Route::get('/:id','api/:version.Product/getOne',[],['id'=>'\d+']);
});

/* 获取分类 */
Route::get('api/:version/category/all','api/:version.Category/getAllCategories');

/* 获取token */
Route::post('api/:version/token/user','api/:version.Token/getToken');

/* 新增收货地址 */
Route::post('api/:version/address','api/:version.Address/createOrUpdateAddress');

/* 订单相关 */
Route::post('api/:version/order','api/:version.Order/placeOrder');
Route::get('api/:version/order/by_user', 'api/:version.Order/getSummaryByUser');
Route::get('api/:version/order/:id', 'api/:version.Order/getDetail',
    [],['id' => '\d+']);
Route::get('api/:version/order/paginate', 'api/:version.Order/getSummary');
Route::put('api/:version/order/delivery', 'api/:version.Order/delivery');

/* 支付相关 */
Route::post('api/:version/pay/per_order','api/:version.Pay/getPerOrder');
Route::post('api/:version/pay/notify','api/:version.Pay/receiveNotify');