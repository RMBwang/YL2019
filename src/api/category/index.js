import http from "@utils/request";


//home 中的分类 全部分类
export const categoryAllApi=(params)=>http({
    method:"get",
    url:"/server"+params,
    data:{

    }
});