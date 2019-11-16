<template>
  <div class="activityDetail">
    <div class="hezi">
      <div class="headBg1">
        <div class="iconfont icon" @click="handleBack()">&lt;</div>
        <div class="bg1" :style="'background:url(http://static.228.cn'+news[0].PBIGIMG+')'"></div>
      </div>
    </div>
    <div class="detailName">{{detailsNews}}</div>
    <div class="newsTop" v-for="(item,index) in news" :key="index" v-show="news">
      <img :src="'http://static.228.cn'+item.PBIGIMG" class="newsTopImg" />
      <div class="right">
        <div class="newsTitle">{{item.NAME}}</div>
        <div class="newsTime">{{item.SHOWDATE}}</div>
        <div class="newsPosition">{{item.VNAME}}</div>
        <div class="newsMoney">{{item.MINPRICE}}-{{item.MAXPRICE}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
import { activityDetailApi } from "@api/activityDetail";
export default {
  name: "ActivityDetail",
  data() {
    return {
      news: [],
      detailsNews: ""
    };
  },
  methods:{
      handleBack(){
          this.$router.back();
      }
  },
  props: ["name"],
  async created() {
    let data = await activityDetailApi(this.name);
    this.news = data.data.subjectProductList;
    this.detailsNews = data.data.subjectMap.SHARECONTENT;
    console.log(this.news);
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  width: 100%;
}

html {
  font-size: 32vw;
}

body {
  font-size: 0.16rem;
}

.activityDetail {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto;
}

.hezi {
  height: 2rem;
  overflow: hidden;
  width: 100%;
}

.icon {
  height: 0.2rem;
  width: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  font-size: 0.13rem;
  color: #ccc;
  background: #999;
  border-radius: 50%;
  position: absolute;
  top:.6rem;z-index: 20;left:2.5rem;
}
.headBg1 {
  height: 2rem;
  position: relative;
  overflow: hidden;
  top: -0.5rem;
  left: -75%;
  width: 250%;
  border-radius: 50%;
  overflow: hidden;
}

.bg1 {
  width: 100%;
  height: 2.5rem;
  background-position: center;
  overflow: hidden;
  background-repeat: no-repeat;
}

.newsList {
  height: 1.6rem;
  width: 100%;
  background: #fff;
  margin-bottom: 0.15rem;
  border-radius: 0.08rem;
}

.newsTop {
  padding: 0.15rem;
  display: flex;
  align-items: center;
}

.detailName {
  margin: 0.1rem;
  font-size: 0.14rem;
  color: #999;
}
.newsTop .newsTopImg {
  height: 1.3rem;
  display: block;
  border-radius: 0.08rem;
  margin-right: 0.1rem;
}

.newsTop .newsTitle {
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.1rem;
}

.newsTop .newsTime {
  font-size: 0.1rem;
  color: #ccc;
}
.newsPosition {
  font-size: 0.12rem;
  color: #ccc;
  margin-bottom: 0.2rem;
}
.newsMoney {
  font-size: 0.13rem;
  color: #f00;
  font-weight: bold;
}
hr {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
}
</style>