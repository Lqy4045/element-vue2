console.log("----------main.js start----------");
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./permission.js";
Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  created() {
    console.log("---------main.js created----------");
  },
  render: (h) => h(App),
}).$mount("#app");
console.log("----------main.js end----------");
