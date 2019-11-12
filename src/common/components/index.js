import Vue from "vue";
import Header from "./header";
import Center from "./center";


let componentMap=[
    Header,
    Center
]


//全局注册


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})