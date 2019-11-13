export default {
    path: "/search",
    component: _ => import("@pages/search"),
    name:"search",
    meta:{
        flag:false,//显示与否tabbar
    }
}