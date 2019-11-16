<template>
  <div class="cart">
    <Top />
    <Center />
    <Bottom />
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
    Bottom
  },
  created() {
    this.$store.dispatch("handleAsyncGoodsList");
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.cart {
  width: 990px;
  margin: 30px auto;
}
</style>