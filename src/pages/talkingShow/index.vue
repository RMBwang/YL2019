<template>
  <div class="page">
    <Header title="永乐说" icon />
    <div class="container">
      <div class="slider">
        <!-- 此处为轮播图，先用一张图片代替 -->
        <img src="http://static.228.cn/upload/2018/12/05/1543981140805_d3x7.png" alt />
      </div>
      <div class="news">
        <div class="newsList" v-for="(item,index) in showList" :key="index">
          <div class="newsTop">
            <img :src="'//static.228.cn'+item.IMG" alt />
            <div class="right">
              <div class="newsTitle">{{item.REMARK}}</div>
              <div class="newsTime">2019-12-12</div>
            </div>
          </div>
          <div class="details">{{item.TEXT}}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import { talkingShowApi } from "@api/talkingShow";
export default {
  name: "TalkingShow",

  data() {
    return {
      showList: []
    };
  },
  async created() {
    let data = await talkingShowApi();
    console.log(data);
    this.showList = data.data.sxList;
    console.log(this.showList);
  }
};
</script>

<style>
.page{
  background: #eee;
}

.slider {
  height: 1.45rem;
  width: 100%;
  margin-bottom: 0.15rem;
  margin-top: 0.1rem;
}
.slider img {
  height: 100%;
  width: 100%;
  border-radius: 0.05rem;
}
.news {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
}
.newsList {
  height: 1.6rem;
  width: 100%;
  background: #fff;
  margin-bottom: 0.15rem;
}
.newsTop {
  padding: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.newsTop img {
  height: 0.8rem;
  width: 1.5rem;
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
.details {
  font-size: 0.11rem;
  margin-top: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.footer {
  height: 2rem;
  width: 100%;
}
.footer .bottomF {
  font-size: 0.1rem;
  text-align: center;
}
.footer .bottom1 {
  font-size: 0.1rem;
  text-align: center;
  color: #82888f;
  margin-bottom: 0.1rem;
}
.footer .bottomF a {
  margin: 0.1rem;
  color: #82888f;
}
</style>