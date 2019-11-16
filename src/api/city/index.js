import http from "@utils/request";



//home 中的推荐
export const cityAllApi=()=>http({
    method:"get",
    url:"/server/content/city/list.json",
    // url:'/server/content/city/'+cityId+'.json',

});