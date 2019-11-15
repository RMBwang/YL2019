import http from "@utils/request";


export const activityDetailApi=(name)=>http({
    method:"get",
    
    url:"/server/subject/detail-"+name+".json",
    data:{
        
    }
});