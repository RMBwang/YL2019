export default {
    path:"/home",
    component:_=>import("@pages/home"),
    name:"home",
    meta:{
        flag:true
    },
    children:[
        {
            path:"/home",
            redirect:"homeRecommend"
        },
        {
            path:"homeRecommend",
            component:_=>import("@components/homeRecommend"),
            name:"homeRecommend",
            meta:{
                flag:true
            },
        },
        {
            path:"homeVenue",
            component:_=>import("@components/homeVenue"),
            name:"homeVenue",
            meta:{
                flag:true
            },
        },
<<<<<<< HEAD
       
=======
>>>>>>> ea3a5a470ccf3da38864e56f1406a976c8ac2f38
    ]
}
