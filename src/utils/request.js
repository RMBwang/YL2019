import axios from "axios"
// import { promises } from "dns"



const server=axios.create({
    timeout:3000,
    // baseUrl:""    
    withCredentials:true
})



//请求的拦截

server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data}
      
    }
    return config;
}),(err)=>{
    Promise.reject(err)
}


//响应的拦截 
server.interceptors.response.use((res)=>{
    if(res.status==200){
        return res.data;
    }
})



//导出
export default server;