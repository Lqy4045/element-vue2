export const formRouter = [
  {
    path: "/form1",
    name: "form1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "form" */ "@/views/forms/form1.vue"),
  },
  {
    path: "/form2",
    name: "form2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "form" */ "@/views/forms/form2.vue"),
  },
];
