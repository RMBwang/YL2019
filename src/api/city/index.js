import http from "@utils/request";



//home 中的推荐
export const cityApi=()=>http({
    method:"get",
    url:"/server/content/city/list.json",
    data:{
    }
});