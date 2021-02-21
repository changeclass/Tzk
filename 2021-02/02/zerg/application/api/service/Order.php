<?php


namespace app\api\service;


use app\api\model\Product;
use app\lib\exception\OrderException;

class Order
{
    /* 订单的商品列表，客户端传过来的product */
    protected $oProducts;
    /* 数据库查询的真实（包括库存量） */
    protected $products;
    protected $uid;
    public function place($uid,$oProducts){
        $this->oProducts = $oProducts;
        $this->products = $this->getProduvtsByOrder($oProducts);
        $this->uid = $uid;
        $status = $this->getOrderStatus();
        if(!$status['pass']){
            $status['order_id'] = -1;
            return $status;
        }
        /* 创建订单 */

    }
    private function getOrderStatus(){
        $status = [
            'pass'=>true,
            'prderPrice'=>0,
            'pStatusArray'=>[]
        ];
        foreach ($this->oProducts as $oProduct) {
            $pStatus = $this->getProductStatus(
                $oProduct['product_id'],
                $oProduct['count'],
                $this->products
            );
            if(!$pStatus['haveStock']){
                $status['pass']=false;
            }
            $status['orderPrice'] +=$pStatus['totalPrice'];
            array_push($status['pStatusArray'], $pStatus);
        }
        return $status;
    }
    private function getProductStatus($oPID,$oCount,$products){
        $pIndex = -1;
        $pStatus = [
            'id'=> null,
            'haveStock' => false,
            'count' => 0,
            'name' => '',
            'totalPrice' => 0
        ];
        for($i=0;$i<count($products);$i++){
            if($oPID==$products[$i]['id']){
                $pIndex = $i;
            }
        }
        if($pIndex == -1){
            throw new OrderException([
                'msg'=>'opid为'.$oPID.'商品不存在，创建订单失败'
            ]);
        }else{
            $product = $products[$pIndex];
            $pStatus['id'] = $product['id'];
            $pStatus['name'] = $product['name'];
            $pStatus['count'] = $oCount;
            $pStatus['totalPrice'] = $product['price'] * $oCount;

            if ($product['stock'] - $oCount >= 0) {
                $pStatus['haveStock'] = true;
            }
        }
        return $pStatus;
    }
    /* 根据订单信息查找真实的商品信息 */
    private function getProduvtsByOrder($oProducts){
        $oPIDs = [];
        foreach ($oProducts as $item){
            array_push($oPIDs,$item['product_id']);
        }
        $products = Product::all($oPIDs)
                    ->visible([`id`,`price`,`stock`,`name`,`main_img_url`])
                    ->toArray();
        return $products;
    }
}