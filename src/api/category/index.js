import http from "@utils/request";


//home 中的分类 全部分类
export const categoryAllApi=()=>http({
    method:"get",
    url:"/server/category/default.json",
    data:{

    }
});