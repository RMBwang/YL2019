<template>
  <div class="cart">
    <Top class="cartTopIndex"/>
    <Center :data="data" class="cartCenterIndex"/>
    <Bottom class="cartBottomIndex"/>
  </div>
</template>

<script>
import Bottom from "@components/myCart/bottom";
import Center from "@components/myCart/center";
import Top from "@components/myCart/top";
export default {
  name: "myCart",
  components: {
    Top,
    Center,
    Bottom,
  },
  data(){
    return {
      data:[],
    }
  },
  created() {
    this.data=JSON.parse(sessionStorage.getItem("myCart"));
    console.log(this.data);
  },
  
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.cart {
  width:100%;
  height:100%;
  overflow: auto;
}
.cartTopIndex{
  width:100%;
  height:.65rem;
  position: fixed;
  left:0;
  top:0;
  background:#fff;
}
.cartCenterIndex{
  margin-top:.65rem;
}
.cartBottomIndex{
  margin-bottom: .5rem;
}

</style>