<?php


namespace app\api\controller\v1;
use app\api\validate\IDMustBePostiveInt;
use app\api\model\Banner as BannerModel;
use app\lib\exception\BannerMissException;
use think\Exception;

class Banner
{

    /* 获取指定id的banner信息
     * @id banner的id号
     * @http GET
     * @id banner的id号
     * */
    public function getBanner($id){
        (new IDMustBePostiveInt())->goCheck();
        $banner = BannerModel::getBannerById($id);

        if(!$banner){
            throw new BannerMissException();
        }
        return $banner;
    }
}