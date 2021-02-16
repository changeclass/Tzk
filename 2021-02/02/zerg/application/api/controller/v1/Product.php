<?php


namespace app\api\controller\v1;


use app\api\validate\Count;

use app\api\model\Product as ProductModel;
use app\lib\exception\ProductException;

class Product
{
    public function getRecent($count=15){
        (new Count())->goCheck();
        $product = ProductModel::getMostRecent($count);
        if(!$product){
            throw new ProductException();
        }
        return $product;
    }
}