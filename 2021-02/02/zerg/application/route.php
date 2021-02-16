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
/* 获取最近商品 */
Route::get('api/:version/product/recent','api/:version.Product/getRecent');
/* 获取分类 */
Route::get('api/:version/category/all','api/:version.Category/getAllCategories');