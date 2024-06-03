import router, { asyncRoutes, otherRoutes } from "@/router/index.js";

export function initRouter() {
  setTimeout(() => {
    asyncRoutes.concat(otherRoutes).forEach((item) => {
      router.addRoute(item);
    });
  }, 1000);
}

console.log(initRouter);
