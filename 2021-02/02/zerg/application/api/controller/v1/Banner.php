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
        return json($banner);
       /* $data=[
            'name'=>'vendor',
            'email'=>'vendor@qq.com'
        ];
        $validate = new Validate([
            'name'=>'require|max:10',
            'email'=>'email'
        ]);*/
       /* $data=[
            'id'=>$id
        ];
        $validate = new IDMustBePostiveInt();

        $result = $validate->batch()->check($data);
        echo $result;
        var_dump($validate->getError());*/
    }
}