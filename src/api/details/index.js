import http from "@utils/request";


export const detailsApi=(pid=633053863)=>http({
    method:"get",
    url:"/server/product/getProductStatus.json",
    data:{
        nc:30,
        pid:pid,
    }
});
