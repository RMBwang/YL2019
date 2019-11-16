<!--icon代表左上角箭头 写 就有 不写就没有-->
<template>
  <div class="page">
    <Header title="永乐票务" search home_icon  />

    <!-- <router-link tag="div" :to="'/city?path='+$route.path" class="city"> -->
      <!-- <span>{{this.$store.state.city.nm}}</span>
      <i class="iconfont">&#xe619;</i> -->
    <!-- </router-link> -->

    <div class="container">
      <!-- 轮播图 -->
      
      <div class="slider">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in slideList" :key="index">
            <img v-lazy="'http://static.228.cn'+image.IMG" class="sliderImg"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      

      <!-- 八个标题 -->

      <div class="title_nav">
        <ul class="title_nav-lists">
          <li class="title_lists-one">
            <router-link tag="div" :to="item.route" class="title-list" v-for="(item,index) in titles" :key="index.id" @click="handleCategory(item.path)">
              <p class="iconfont icon" v-html="item.icon"></p>
              <p class="word">{{item.title}}</p>
            </router-link>
          </li>
        </ul>
      </div>

      <h3 class="con_til">
        <router-link tag="p" to="/home/homeRecommend">推荐</router-link>
        <router-link tag="p" to="/home/homeVenue">场馆</router-link>
      </h3>
      <!-- 二级路由 -->
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      


      <Center />
    </div>
  </div>
</template>

<script>
import { homeRecommendApi, sliderApi } from "@api/home";
export default {
  name:"Home",

  data() {
    return {
      slideList: [],
      titles: [
        {
          id: 0,
          title: "演唱会",
          icon: "&#xe608;",
          route:"/category/yanchanghui",
        },
        {
          id: 1,
          title: "话剧舞台剧",
          icon: "&#xe60b;",
          route:"/category/huajuwutaiju",
        },
        {
          id: 2,
          title: "体育赛事",
          icon: "&#xe6c0;",
          route:"/category/tiyusaishi",
        },
        {
          id: 3,
          title: "儿童亲子",
          icon: "&#xe629;",
          route:"/category/ertongqinzi",
        },
        {
          id: 4,
          title: "全部分类",
          icon: "&#xe50b;",
          route:"/category",
        },
        {
          id: 5,
          title: "活动",
          icon: "&#xe685;",
          route:"/activity",
        },
        {
          id: 6,
          title: "永乐说",
          icon: "&#xe699;",
          route:"/talkingShow",
        },
        {
          id: 7,
          title: "我的",
          icon: "&#xe504;",
          route:"/login",
        }
      ]
    };
  },
  async created() {
    let data = await sliderApi();
    this.slideList = data.data.slideList;
  }
};
</script>

<style>


/* 轮播图 */

.slider {
  width: 100%;
  height: 1.46rem;
  overflow: hidden;
  position: relative;
}

.sliderImg{
  width:100%;height:100%;
}
.slider .banner {
  width: 100%;
  height: 100%;
}

.slider .logo {
  width: 100%;
  height: 100%;
}

.slider .logo a {
  height: 100%;
  width: 100%;
  display: block;
}

.slider .logo a img {
  height: 100%;
  width: 100%;
}

/* 八个标题 */
.title_nav {
  height: 1.35rem;
  /* width: 3.2rem; */
  margin: 0.25rem 0.2rem;
}

.title_nav .title_nav-lists {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.title_nav .title_nav-lists .title_lists-one {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.title_nav .title_nav-lists .title-list {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title_nav .title_nav-lists .title-list .icon {
  font-size: 0.25rem;
  margin-bottom: 0.06rem;
}
.title_nav .title_nav-lists .title-list .word {
  font-size: 0.13rem;
}

/* 推荐跟场馆 */
.con_til {
  height: 0.39rem;
  padding-top: 0.1rem;
  margin: 0 0.2rem 0.15rem 0.2rem;
  font-size: 0.22rem;
  display: flex;
}
.con_til p:nth-child(1) {
  margin-right: 0.15rem;
}
.con_til p {
  color: #b5bbc1;
}
.con_til .router-link-active {
  color: #000;
}
</style>

