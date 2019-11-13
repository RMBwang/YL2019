import http from "@utils/request";


export const talkingShowApi=()=>http({
    method:"get",
    url:"/server/product/getProductStatus.json?nc=30&pid=633053863",
    data:{
        
    }
});
