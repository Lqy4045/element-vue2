export const tableRouter = [
  {
    path: "/table1",
    name: "table1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ "@/views/tables/table1.vue"),
  },
  {
    path: "/table2",
    name: "table2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "table" */ "@/views/tables/table2.vue"),
  },
];
