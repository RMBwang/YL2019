<template>
<div class="topAll">
  <!-- <h2 class="shoppingCart">购物车</h2> -->
  <Header icon title="我的购物车" />
  <div class="topCart">
    <label>
      <input
        type="checkbox"
        @change="handleSelectedAllChange()"
        :checked="checkedAll"
      />全选
    </label>
    <div></div>
    <div></div>
    <p>商品</p>
    <p>单价</p>
    <p>数量</p>
    <p>小计</p>
    <p>操作</p>
  </div>
</div>
</template>

<script>
export default {
  name: "top",
  data(){
    return {
      checkedAll:true,
    }
  },
  methods: {
   handleSelectedAllChange(){
     this.checkedAll=!this.checkedAll;
     let datax=JSON.parse(sessionStorage.getItem("myCart"));
     console.log(datax);
     for(var i=0;i<datax.length;i++){
      datax[i].flag=this.checkedAll;
     }
     sessionStorage.setItem("myCart",JSON.stringify(datax));
     console.log();
   }
  }
};
</script>

<style>
.topAll{
  width:100%;
  height:.65rem;
}
.topCart {
  width: 100%;
  height:.25rem;
  background: #f3f3f3;
  display: flex;
  align-items: center;
  margin-top:.4rem;
  justify-content: space-around;
  margin-top:.4rem;
}
.shoppingCart{
  color:#f00;text-align: center;line-height:.4rem;
}
</style>