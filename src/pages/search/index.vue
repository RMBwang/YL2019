<template>
  <div class="page">
    <Header title="搜索" icon search />

    <div class="container">
      <input type="text" placeholder="请输入你要搜索的内容" v-model="value" />
      <div class="content">
        <ul>
          <router-link tag="li" :to="'details/'+item.URL" v-for="(item,index) in searchList " :key="index">
              <div class="left">
                  <img class="item_img" :src="'//static.228.cn'+item.pbigimg">
                  <i class="gradual-gray tip  tip-grabSeat " >{{item.status==0?'售完':'售票中'}}</i>
              </div>
              <div class="right">
                  <b class="name">{{item.introduction}}</b>
                  <span class="gray mt10 12">{{item.begindate}}</span>
                  <span class="gray f12">{{item.vname}}</span>
                  <span class="gray mt10 f12">
                      <b class="price">{{item.minprice}}-{{item.maxprice}}元</b>
                  </span>
                  
              </div>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import { homeSearch } from "@api/home";
import {throttle} from "@utils/yl";
console.log(throttle,132465456);

export default {
  name: "Search",
  data() {
    return {
      value: "",
      searchList:[]
    };
  },
  watch: {
    value(newword) {
      throttle(async ()=>{
        let data = await homeSearch(encodeURIComponent(newword));
        //   console.log(data.data.pagerMemoryOr.list[0].status)
        //   console.log(data.data.pagerMemoryOr.list[1].status)
          console.log(data)
          this.searchList=data.data.pagerMemory.list?data.data.pagerMemory.list:[]
        //   data.data.
        //   alert(11111)
    
      })
      
    }
  }
};
</script>


<style>
input {
  outline: none;
  width: 80%;
  height: 0.25rem;
  line-height: 0.25rem;
  margin: 0 auto;

  margin: 0.3rem;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: 0.85rem;
  /* overflow: auto; */
  min-height: 4.43rem;
}
.content ul{
    padding: .2rem;
    background: #fff;
    overflow: auto;

}
.content ul li{
    display: block;
    margin-bottom: .15rem;
    border-bottom: 1px solid #fafafb;
    padding-bottom: .15rem;
    overflow: hidden;
    height: 1.13rem;
}
.content ul li .left {
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
}
.content ul li .left i{
    position: relative;
    float: left;
    width: .85rem;
    height: 1.13rem;
    border-radius: .1rem;
    overflow: hidden;
}
.item_img{
    width: 100%;
    height: 100%;
}
.gradual-gray {
    background: linear-gradient(to left, #8da0a9 0%, #d5dde1 100%);
}
.tip  {
    display: block;
    height: .20rem;
    line-height: .20rem;
    color: #fff;
    font-style: normal;
    position: absolute;
    top: 0;
    font-size: .11rem;
    font-weight: bold;
    border-radius: .1rem 0;
    padding: 0 .05rem;
    left: 0;
    text-align: center;
}
.tip-grabSeat {
    background-position: 0 -24.19rem;
}
.content ul li .right{
    margin-left: .15rem;
    float: left;
    width: calc(100% - 1rem);
}
.name{
    height: .4rem;
    line-height: .2rem;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.content ul li .right span{
    display: block;
    color: #999ea3;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.mt10{
    margin-top:.1rem
}
.f12{
    font-size: .12rem
}
.mt10{
    margin-top:.1rem
}
.price{
    color: #ff3a56;
    font-size: .14rem;
    margin-right:0.05rem
}
</style>

