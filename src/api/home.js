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
        fcity:cs,
        pageNum:1,
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



//搜索
export const homeSearch=(value)=>http({
    methods:"get",
    // url:"'https://m.228.cn/server/search/s/'+(encodeURICo(word))+'.json'",
    url:'/server/search/s/'+value+'.json'
})