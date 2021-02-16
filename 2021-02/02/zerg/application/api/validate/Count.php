<?php


namespace app\api\validate;


class Count extends BaseValidate
{
    protected $rule = [
        'count'=>'isPositiveInterger|between:1,15'
    ];
    protected $message=[
        'count'=>'请传入1到15的正整数。'
    ];
}