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
        fcity:-1,
        pageNum:cs,
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