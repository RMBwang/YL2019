import Vue from "vue"
import VueRouter from "vue-router";
import home from "./home"//引入home
import category from "./category"//引入category分类
import talkingShow from "./talkingShow"//永乐说
import city from "./city"
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
Vue.use(VueRouter);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload);
/**下拉菜单 */
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);


const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: "/",
            redirect: "/home",

        },
        {
            path: "/home/details/:id",
            redirect: "/details/:id",
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
        },
        {
            path: "/cart",
            name: "cart",
            meta: {
                flag: true
            },
            component: _ => import("@pages/myCart")
        },
        //activity
        {
            path: "/activity",
            name: "activity",
            meta: {
                flag: true
            },
            component: _ => import("@pages/activity"),

        },
        {
            path: "/activity/:name",
            name: "activityDetail",
            meta: {
                flag: true
            },
            props: true,
            component: _ => import("@pages/activityDetail"),

        },
        {
            path: "/category/:title",
            name: "categoryOther",
            meta: {
                flag: true
            },
            props: true,
            component: _ => import("@pages/category"),

        },
        {
            path: "/tsDetail",
            name: "tsDetail",
            meta: {
                flag: true
            },
            props: true,
            component: _ => import("@pages/tsDetail"),

        },
        {
            path: "/details/:id",
            name: "details",
            meta: {
                flag: false
            },
            props: true,
            component: _ => import("@pages/details"),
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
        if (localStorage.getItem("token")) {
            next()
        } else {
            next({ name: "login", params: { to: to.path } })
        }
    } else {
        next()
    }
})



export default router; 