import http from "@utils/request";

export const activityApi=()=>http({
    method:"get",
    url:"/server/subject/list.json",
    data:{

    }
});