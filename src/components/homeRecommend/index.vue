<template>
  <div class="homeRecommend">
    <ul class="active_lists">

      <router-link tag="li" :to="'/details/'+item.URL" class="active" v-for="(item,index) in homeRecommendList" :key="index">
        
          <img
            :src='"http://static.228.cn/"+item.PBIGIMG'
            alt
          />
          <b class="name">{{item.NAME}}</b>
          <span class="shijian">{{item.BEGINDATE.split(" ")[0]}}</span>
          <span class="tp">
            <b class="red">￥{{item.MINPRICE}}</b>起
          </span>
      
      </router-link>
      <div class="load_more">
        <a href>查看更多</a>
      </div>
    </ul>
  </div>
</template>

<script>
import {homeRecommendApi} from "@api/home";

export default {
  name:"homeRecommend",
  data(){
    return {
      homeRecommendList:[],
    }
  },
  
  async created(){
    let data=await homeRecommendApi();
    // console.log(data);
    this.homeRecommendList=data.data.recommendPage.list;
  }
};
</script>

<style>
/* active_lists */

.active_lists {
  margin: 0 0.2rem;
  display: flex;
  flex-wrap: wrap;

}
.active_lists .active {
  margin: 0 0.025rem 0.15rem 0;
  width: 32%;
  overflow: hidden;
}

.active_lists .active img {
  /* height: 1.4rem; */
  width: 100%;
  border-radius: 0.1rem;
}
.active_lists .active .name {
  font-size: 0.13rem;
  height: 0.34rem;
  line-height: 0.18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.active_lists .active .shijian {
  font-size: 0.11rem;
  color: #999;
  display: block;
}
.active_lists .active .tp {
  margin-top: 0.02rem;
  font-size: 0.1rem;
  color: #b5bbc1;
}
.active_lists .active .tp .red {
  color: #ff3a56;
  font-size: 0.13rem;
  margin-right: 0.05rem;
}

/* load_more */

.load_more {
  width: 100%;
  height: 0.3rem;
  background: #fff7f7;
  text-align: center;
  line-height: 0.3rem;
  margin-bottom: 0.1rem;
  font-size:.12rem;
}
.load_more a {
  color: #c33;
}
</style>