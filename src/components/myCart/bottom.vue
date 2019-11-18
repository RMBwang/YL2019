<template>
  <div class="footerCart">
    <label>
      <input type="checkbox"/>全选
    </label>
    <p @click="handleDeleteAll()">删除所有商品</p>
    <p class="count">
      已选择<span>几件</span>商品
    </p>
    <p class="total">总价:</p>
    <a href="##">结算</a>
  </div>
</template>

<script>
export default {
  name: "bottom",
  methods:{
    handleDeleteAll(){
      sessionStorage.removeItem("myCart");
      this.$observer.$emit("handleDeleteData",[]);
    }
  }
  
  
};
</script>

<style>
.footerCart {
  display: flex;
  height: .25rem;
  width: 100%;
  align-items: center;
  border: 1px solid #f3f3f3;
  justify-content: space-around;
  font-size:.12rem;
}

</style>