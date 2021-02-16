<?php

return [
    'app_id' => getenv('APPID'),
    'app_secret' => getenv('APPSECRET'),
    'login_url'=>
        'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
];