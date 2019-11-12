<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <TarBar v-if="$route.meta.flag"/>
  </div>
</template>


<script>
import TarBar from "@common/components/tabBar"
export default {
  name:"App",
  components:{
    TarBar
  }
}
</script>



<style>
#app{
  width: 100%;
  height: 100%;
  background: #fff;
}
.page{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-bottom: .5rem;
  

}
.container{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin-bottom: .5rem;
  margin-top:.4rem;
  overflow: auto;
}

</style>
