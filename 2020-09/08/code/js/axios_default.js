if (typeof axios !== "undefined") {
  // 请求基于地址
  axios.defaults.baseURL = "http://localhost:8000";
  // 允许跨域请求
  // axios.defaults.withCredentials = true;
  // 将请求数据转换成URLENCODED格式
  axios.defaults.transformRequest = (data) => {
    let str = ``;
    if (data && typeof data === "object") {
      for (let attr in data) {
        if (data.hasOwnProperty(attr)) {
          str += `${attr}=${data[attr]}&`;
        }
      }
    }
    return str.substring(0, str.length - 1);
  };
  // 默认请求头
  axios.defaults.headers["Content-Type"] = "x-www-form-urlencoded";
  // 拦截器,只返回服务器返回的结果
  axios.interceptors.response.use((result) => result.data);
}
