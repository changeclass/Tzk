(function anonymous(window) {
  //默认配置项
  let _default = {
    // 请求方式
    method: "GET",
    // URL
    url: "",
    // URL基
    baseURL: "",
    // 请求头
    headers: {},
    // 设置返回格式
    dataType: "JSON",
    // POST请求的数据
    data: null,
    // GET请求的数据
    params: null,
    // 缓存
    cache: true,
  };
  // 定义函数

  let ajaxPromise = function ajaxPromise(options) {
    // options中融合了 默认配置信息，用于基于defaults修改的信息、用户执行GET/POST方法时传递的配置信息。越靠后，优先级越高
    let {
      url,
      baseURL,
      method,
      data,
      params,
      dataType,
      headers,
      cache,
    } = options;
    // 处理传递的参数
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(method)) {
      // GET系列的
      if (params) {
        url += `${ajaxPromise.check(url)}${ajaxPromise.formateDate(params)}`;
      }
      // 判断是否缓存
      if (cache === false) {
        url += `${ajaxPromise.check(url)}_=${new Date()}`;
      }
      // GET系列请求主体就是什么都不放
      data = null;
    } else {
      // POST系列
      if (data) {
        data = ajaxPromise.formateDate(data);
      }
    }
    // 基于promise设计模式管理Ajax请求
    return new Promise((resolve, reject) => {
      // 创建核心对象
      let xhr = new XMLHttpRequest();
      // 发送请求
      xhr.open(method, baseURL + url);
      // 如果headers存在，设置请求头
      if (headers !== null && typeof headers === "object") {
        for (let attr in headers) {
          if (headers.hasOwnProperty(attr)) {
            // 处理中文
            let value = headers[attr];
            if (/[\u4e00-\u9fa5]/.test(value)) {
              // 包含中文，将其编码为非中文
              value = encodeURIComponent(value);
            }
            xhr.setRequestHeader(attr, value);
          }
        }
      }
      // 监听请求
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          // 如果成功则执行
          if (/^(2|3)\d{2}$/.test(xhr.status)) {
            // 更加dataType处理返回结果
            let result = xhr.responseText;
            dataType = dataType.toUpperCase();
            // 根据设置类型进行对数据的处理
            switch (dataType) {
              case "JSON":
                result = JSON.parse(result);
                break;
              case "XML":
                result = xhr.responseXML;
                break;
            }
            resolve(result, xhr);
            return;
          }
          // 失败执行
          reject(xhr.statusText, xhr);
        }
      };
      // 发送请求数据
      xhr.send(data);
    });
  };
  // 处理请求地址传递参数
  ajaxPromise.check = function check(url) {
    return url.indexOf("?") > -1 ? "&" : "?";
  };
  // 将对象转换为参数
  ajaxPromise.formateDate = function formatDate(obj) {
    // DO 将对象编程URLENCODED格式的字符串
    let str = ``;
    for (let attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        str += `${attr}=${obj[attr]}&`;
      }
    }
    return str.substring(0, str.length - 1);
  };
  // GET系列
  ["get", "delete", "head", "options"].forEach((item) => {
    ajaxPromise[item] = function anonymous(url, options) {
      options = {
        //   默认值
        ..._default,
        // 用户调取方法传递的配置
        ...options,
        // 请求的URL地址（第一个参数）
        url: url,
        //
        method: item.toUpperCase(),
      };
      return ajaxPromise(options);
    };
  });
  // POST系列
  ["post", "put", "patch"].forEach((item) => {
    ajaxPromise[item] = function anonymous(url, data = {}, options = {}) {
      options = {
        //   默认值
        ..._default,
        // 用户调取方法传递的配置
        ...options,
        // 请求的URL地址（第一个参数）
        url: url,
        //
        method: item.toUpperCase(),
        data: data,
      };
      return ajaxPromise(options);
    };
  });
  // 暴露默认配置
  ajaxPromise.defaults = _default;
  // 将函数暴露给window
  window.ajaxPromise = ajaxPromise;
})(window);
