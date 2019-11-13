<!--icon代表左上角箭头 写 就有 不写就没有-->
<template>
  <div class="page">
    <Header title="永乐票务" search />
    <router-link tag="div" to="/city" class="city">
      <span>全国</span>
      <i class="iconfont">&#xe619;</i>
    </router-link>

    <div class="container">
      
      
      <!-- 轮播图 -->
      <div class="slider">
        <div class="banner">
          <div class="logo">
            <a href>
              <img src="http://static.228.cn/upload/2019/11/07/1573122606412_i5e9.jpg" />
            </a>
          </div>
        </div>
        <!-- 五个小圆点 -->
        <div class="dot"></div>
      </div>

      <!-- 八个标题 -->

      <div class="title_nav">
        <ul class="title_nav-lists">
          <li class="title_lists-one">
            <div class="title-list" v-for="(item,index) in titles" :key="index.id">
              <p class="iconfont icon" v-html="item.icon"></p>
              <p class="word">{{item.title}}</p>
            </div>
          </li>
        </ul>
      </div>

      <h3 class="con_til">
        <router-link tag="p" to="/home/homeRecommend" >推荐</router-link>
        <router-link tag="p" to="/home/homeVenue">场馆</router-link>
      </h3>
      <!-- 二级路由 -->
      <router-view></router-view>
      <!-- <HomeRecommend></HomeRecommend> -->
      <!-- <HomeVenue></HomeVenue> -->

      <Center />
    </div>
  </div>
</template>



    // HomeVenue
  },
  data() {
    return {
      titles: [
        {
          id: 0,
          title: "演唱会",
          icon: "&#xe608;"
        },
        {
          id: 1,
          title: "话剧舞台剧",
          icon: "&#xe60b;"
        },
        {
          id: 2,
          title: "体育赛事",
          icon: "&#xe6c0;"
        },
        {
          id: 3,
          title: "儿童亲子",
          icon: "&#xe629;"
        },
        {
          id: 4,
          title: "全部分类",
          icon: "&#xe50b;"
        },
        {
          id: 5,
          title: "活动",
          icon: "&#xe685;"
        },
        {
          id: 6,
          title: "永乐说",
          icon: "&#xe699;"
        },
        {
          id: 7,
          title: "我的",
          icon: "&#xe504;"
        }
      ]
    };
  }
};
</script>

<style>

.city {
  height: 0.4rem;
  line-height: 0.4rem;
  position: relative;
  text-align: center;
  color: #fff;
  font-size: 0.12rem;
  white-space: nowrap;
  margin-left: 0.1rem;
  display: inline-block;
}

.city span {
  margin-right: 0.3rem;
}

.city i {
  position: absolute;
  left: 0.3rem;
  top: 0;
  display: block;
  width: 0.07rem;
  height: 0.05rem;
  padding-right: 0.08rem;
}

/* 轮播图 */

.slider {
  width: 100%;
  height: 1.46rem;
  overflow: hidden;
  position: relative;
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
.con_til p{
 
  color: #b5bbc1;
}
.con_til .router-link-active{
  color: #000;
 
}
</style>

