import Vue from "vue";
import VueRouter from "vue-router";
import search from "../views/search.vue";
import nav from "../views/nav.vue";
import amount1 from "../views/amount1.vue";
import amount2 from "../views/amount2.vue";
import amount3 from "../views/amount3.vue";
Vue.use(VueRouter);
const routes=[

    {
    path: "/",
    name: "nav",
    component: nav,
    children:[
        {
            path: "/amount1" ,
            name:"amount1",
            component:amount1
           },
           {
            path: "/amount2" ,
            name:"amount2",
            component:amount2
           },
           {
            path: "/amount3" ,
            name:"amount3",
            component:amount3
           },
           {
            path: "/search" ,
            name:"search",
            component:search
           },
    ]
 },  
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
  });
  
  export default router;