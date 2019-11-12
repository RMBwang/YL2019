export default {
    path: "/category",
    component: _ => import("@pages/category"),
    name:"category",
    meta:{
        flag:true,//显示与否tabbar
    }
}