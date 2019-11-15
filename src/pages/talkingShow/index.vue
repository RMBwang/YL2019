<template>
  <div class="page">
    <Header title="永乐说" icon />
    <div class="container">
      <div class="slider">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in focusImgList" :key="index">
            <img v-lazy="'http://static.228.cn'+image.IMG" class="sliderImg" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="news">
        <div class="newsList" v-for="(item,index) in showList" :key="index">
          <div class="newsTop">
            <img :src="'//static.228.cn'+item.IMG" class="newsTopImg" />
            <div class="right">
              <div class="newsTitle">{{item.REMARK}}</div>
              <div class="newsTime">2019-12-12</div>
            </div>
          </div>
          <hr />
          <div class="details">{{item.TEXT}}</div>
        </div>
      </div>
      <div class="open">展开更多</div>
      <Center />
    </div>
  </div>
</template>

<script>
import { talkingShowApi } from "@api/talkingShow";
import Center from "@common/components/center";
export default {
  name: "TalkingShow",
  components: {
    Center
  },
  data() {
    return {
      showList: [],
      focusImgList:[],
    };
  },
  async created() {
    let data = await talkingShowApi();
    this.showList = data.data.sxList;
    this.focusImgList=data.data.focusImgList;
    console.log(this.focusImgList);
  }
};
</script>

<style>
.page {
  background: #f5f6f7;
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
  border-radius: 0.08rem;
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
hr {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
}
.details {
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  font-size: 0.11rem;
  margin-top: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.open {
  height: 0.3rem;
  margin-left: 0.15rem;
  margin-right: 0.15rem;
  background: #fff7f7;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.12rem;
  color: #c33;
}
</style>