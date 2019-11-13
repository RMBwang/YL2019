export default {
    path: "/city",
    component: _ => import("@pages/city"),
    name:"city",
    meta:{
        flag:false,//显示与否tabbar
    }
}