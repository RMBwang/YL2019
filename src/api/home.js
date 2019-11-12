import http from "@utils/request";



//home 中的推荐
export const homeRecommendApi=()=>http({
    method:"get",
    url:"/server/content/index.json",
    data:{

    }
});
export const homeVenueApi=()=>http({
    method:"get",
    url:"/server/content/moreProductPlay.json",
    data:{
        fcity:-1,
        pageNum:1,
        type:1
    }
})
