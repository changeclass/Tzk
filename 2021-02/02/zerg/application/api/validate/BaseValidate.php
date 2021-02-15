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
}