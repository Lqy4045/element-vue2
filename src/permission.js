console.log("----------permission.js start----------");

import router from "./router/index";
import { initRouter } from "./utils/permission";

router.beforeEach((to, from, next) => {
  console.log("----------路由拦截start----------", { to, from });
  next();
});

router.afterEach((to, from, next) => {
  console.log("----------路由拦截end----------", { to, from });
});

router.onReady(() => {
  initRouter();
});
console.log("----------permission.js end----------");
