<?php


namespace app\api\model;


use think\Db;

class Banner
{
    public static function getBannerById($id)
    {
        $result = Db::table('banner_item')
            ->where('banner_id','=',$id)
            ->select();
        return $result;
        /*$result = Db::query('select * from banner_item where banner_id=?',[$id]);
        return $result;*/

    }
}