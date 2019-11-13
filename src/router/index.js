import Vue from "vue"
import VueRouter from "vue-router";
import home from "./home"//引入home
import category from "./category"//引入category分类
import talkingShow from "./talkingShow"//永乐说
import city from "./city"
Vue.use(VueRouter);



const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        home,//主页
        category,//分类
        talkingShow,//永乐说
        city,
        {
            path: "/search",
            name: "search",
            meta: {
                flag: true
            },
            component: _ => import("@pages/search")
            //箭头函数不传参()可以写成_
        },
        {
            path: "/mine",
            name: "mine",
            meta: {
                flag: true,
                requiredAuth: true//守卫
            },
            component: _ => import("@pages/mine")
        },
        {
            path: "/login",
            name: "login",
            meta: {
                flag: false,
                requiredAuth: false//守卫
            },
            component: _ => import("@pages/login")
        }
    ]
})


router.beforeEach((to, from, next) => {//守卫
    if (to.path != "/login" && to.meta.requiredAuth) {
        if(localStorage.getItem("token")){
            next()
        }else{
            next({name:"login",params:{to:to.path}})
        }
    } else {
        next()
    }
})



export default router; 