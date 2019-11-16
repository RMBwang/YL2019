<template >
  <div id="header">
    <v-touch @tap="handelBack()" class="left_icon" v-if="icon">
      <i class="iconfont">&#xe501;</i>
    </v-touch>

  <v-touch @tap="handelcity()" class="city" v-if="home_icon" :to="'/city?path='+$route.path">
      <span>{{this.$store.state.city.nm}}</span>
      <i class="iconfont">&#xe619;</i>
    </v-touch>

    <v-touch class="right_icon" v-if="search" @tap="handelSearch()" >
      <i class="iconfont">&#xe628;</i>
    </v-touch>

    <h2>{{title}}</h2>
  </div>
</template>



<script>
export default {
  name: "Header",
  props: {
    title: {
        type: String,
        default: "分类"
    },
    icon: {
      //左上角的 箭头
      type: Boolean
    },
     home_icon:{
       type:Boolean
     
    },
    search:{
      //右上角搜索
      type:Boolean
    }
  },
  methods: {
    handelBack() {
      this.$router.back();
// alert(111)
    },
    handelcity(){
      this.$router.push("city")
      // alert(222)
    },
    handelSearch(){
      this.$router.push("search")
    }
  }
};
</script>



<style>
#header {
  position: fixed;
  height: 0.4rem;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ff7e6f, #ff2959);
  box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
  color: #fff;
  /* color: #000 */
}
.left_icon {
  position: absolute;
  left: 0.1rem;
  font-size: 0.2rem;
}
.left_icon i {
  font-size: 0.25rem;
}
.right_icon{
  position: absolute;
  right:.1rem;
  
}
.right_icon i{
  font-size:.2rem
}




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
  left: -.9rem;

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
</style>