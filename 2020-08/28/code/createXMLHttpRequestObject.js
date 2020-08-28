(function () {
  function createXMLHttpRequest() {
    var httpRequest;
    if (window.XMLHttpRequest) {
      // 适用于非IE浏览器
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      //   适用于IE浏览器
      try {
        // IE 7+
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          //   IE 6-
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
      }
    }
    return httpRequest;
  }
  window.createXMLHttpRequest = createXMLHttpRequest;
})();
