<?php


namespace app\api\model;


use think\Model;

class Image extends Model
{
    protected $hidden = ['update_time','delete_time','from','id'];
    public function getUrlAttr($value,$data){
        $finalUrl = $value;
        if($data['from'] == 1){
            $finalUrl = config('setting.img_prefix').$value;
        }
        return $finalUrl;
    }
}