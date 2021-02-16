<?php


namespace app\api\validate;


use app\lib\exception\ParameterException;
use think\Exception;
use think\Request;
use think\Validate;

class BaseValidate extends Validate
{
    public function goCheck(){
        /* 获取传入参数 */

        /* 对这些参数进行校验 */
        $request = Request::instance();
        $params = $request->param();

        $result = $this->batch()->check($params);
        if(!$result){

            $e= new ParameterException([
                'msg'=>$this->error,
               /* 'code'=>400,
                'errorCode'=>10002*/
            ]);

            throw  $e;
           /* $error = $this->error;
            throw new Exception($error);*/
        }else{
            return true;
        }
    }
    protected function isPositiveInterger($value,$rule='',$data='',$field=''){
        if(is_numeric($value) && is_int($value+0) && ($value+0)>0){
            return true;
        }else{
            return false;
        }
    }
    protected function isNotEmpty($value){
        if(empty($value)){
            return false;
        }else{
            return true;
        }
    }
}