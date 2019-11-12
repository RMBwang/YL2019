<template>
  <div class="bottom">
    <ul>
      <router-link tag="li" v-for="item in tabbars" :key="item.id" :to="item.path">
        <i class="iconfont" v-html="item.icon"></i>
        <span>{{item.text}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      tabbars: [
        {
          id: 0,
          text: "首页",
          icon: "&#xe6b1;",
          path: "/home"
        },
        {
          id: 1,
          text: "分类",
          icon: "&#xe50b;",
          path: "/category"
        },
        {
          id: 2,
          text: "搜索",
          icon: "&#xe628;",
          path: "/search"
        },
        {
          id: 3,
          text: "我的",
          icon: "&#xe504;",
          path: "/mine"
        }
      ]
    };
  }
};
</script>


<style>

.bottom {
    height: .5rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    box-sizing: border-box;
    background: #fff;
}

.bottom ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%
}
.bottom ul li {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:.05rem;
    width: 25%;
    height: 100%;
    justify-content: center;
}
.bottom ul li i {
    font-size: .2rem;
}
.bottom ul li span {
    font-size: .15rem
}
.bottom ul .router-link-active{
    color: red
}
</style>