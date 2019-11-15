<template>
  <div class="page">
    <Header title="永乐说" icon />
    <div class="container">
      <div class="slider">
        <!-- 此处为轮播图，先用一张图片代替 -->
        <img src="http://static.228.cn/upload/2018/12/05/1543981140805_d3x7.png" class="sliderImg" />
      </div>
      <div class="news">
        <div class="newsList" v-for="(item,index) in showList" :key="index">
          <div class="newsTop">
            <img :src="'//static.228.cn'+item.IMG" class="newsTopImg"/>
            <div class="right">
              <div class="newsTitle">{{item.REMARK}}</div>
              <div class="newsTime">2019-12-12</div>
            </div>
          </div>
          <hr/>
          <div class="details">{{item.TEXT}}</div>
        </div>
      </div>
      <div class="open">展开更多</div>
      <Center/>
    </div>
  </div>
</template>

<script>

import { talkingShowApi } from "@api/talkingShow";
import Center from "@common/components/center";
export default {
  name: "TalkingShow",
  components:{
    Center,
  },
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
  background: #F5F6F7;
}

.slider {
  height: 1.45rem;
  width: 100%;
  margin-bottom: 0.15rem;
  margin-top: 0.1rem;
}
.slider .sliderImg {
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
  border-radius: .08rem;
}
.newsTop {
  padding: 0.15rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border-bottom: 1px solid #ccc; */
}
.newsTop .newsTopImg {
  display: block;
  height: 0.8rem;
  /* width: 1.5rem; */
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
hr{
  margin-left:.15rem;margin-right:.15rem;
}
.details {
  margin-left:.15rem;
  margin-right:.15rem;
  font-size: 0.11rem;
  margin-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.open{
  height:.3rem;margin-left:.15rem;margin-right:.15rem;background:#fff7f7;text-align: center;line-height: .3rem;font-size: .12rem;color:#c33;
}
</style>