import $ from "jquery";
import "./index.css";
import "./1.scss";
import App from "./components/App.vue";
import Vue from "vue";
$(function () {
  $("li:odd").css("backgroundColor", "red");
  $("li:even").css("backgroundColor", "lightblue");
});

class Person {
  static info = "aaa";
}
console.log(Person.info);

const vm = new Vue({
  el: "#app",
  render: (h) => h(App),
});
