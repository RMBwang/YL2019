import http from "@utils/request";


//home 中的推荐
export const talkingShowApi=()=>http({
    method:"get",
    url:"/server/opera/list.json",
    data:{

    }
});
