import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import singlelabel from "../views/singlelabel.vue";
Vue.use(VueRouter);
const routes=[
    {path: "/",
    name: "home",
    component: home, 
   
},
{
    path: "/singlelabel" ,
    name:"singlelabel",
    component:singlelabel
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