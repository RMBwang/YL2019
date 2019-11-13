<template >
  <div id="header">
    <v-touch @tap="handelBack()" class="left_icon" v-if="icon">
      <i class="iconfont">&#xe501;</i>
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
    }
  },
  methods: {
    handelBack() {
      this.$router.back();
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
  color: #fff
}
.left_icon {
  position: absolute;
  left: 0.1rem;
  font-size: 0.2rem;
}
.left_icon i {
  font-size: 0.25rem;
}
</style>