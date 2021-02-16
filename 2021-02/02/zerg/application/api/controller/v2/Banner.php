<?php


namespace app\api\controller\v2;
use app\api\model\Banner as BannerModel;
use app\api\validate\IDMustBePostiveInt;
use app\lib\exception\BannerMissException;

class Banner
{

    /* 获取指定id的banner信息
     * @id banner的id号
     * @http GET
     * @id banner的id号
     * */
    public function getBanner($id){
        return 'this v2';
    }
}