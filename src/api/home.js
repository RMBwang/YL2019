import http from "@utils/request";



//home 中的推荐
export const homeRecommendApi=(cityId)=>http({
    method:"get",
    url:'/server/content/city/'+cityId+'.json',

});






//home中的场馆
export const homeVenueApi=(cs)=>http({
    method:"get",
    url:"/server/content/moreProductPlay.json",
    data:{
<<<<<<< HEAD
        fcity:cs,
        pageNum:1,
=======
        fcity:-1,
        pageNum:cs,
>>>>>>> ea3a5a470ccf3da38864e56f1406a976c8ac2f38
        type:1
    }
})





//home中的轮播图
export const sliderApi=()=>http({
    method:"get",
    url:"/server/content/index.json",
    data:{

    }
});