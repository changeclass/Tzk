let loginRender = (function ($) {
  let $userName = $("#userName"),
    $userPass = $("#userPass"),
    $submit = $("#submit");

  // 获取参数传递的URL
  let fromURL = utils.queryURLParams()["fromURL"];
  fromURL ? (fromURL = decodeURIComponent(fromURL)) : (fromURL = "index.html");

  let submitFn = function submitFn() {
    axios
      .post("/login", {
        // 用户名
        name: $userName.val().trim(),
        //=>HEX_MD5把一个字符串进行MD5加密处理
        password: hex_md5($userPass.val().trim()),
      })
      .then((result) => {
        let code = parseFloat(result.code);
        if (code === 0) {
          //=>登录成功
          window.location.href = fromURL;
          return;
        }
        alert("请检查用户名密码，登录失败了！");
      });
  };

  return {
    init: function init() {
      $submit.tap(submitFn);
    },
  };
})(Zepto);
loginRender.init();
