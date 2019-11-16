<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in data" :key="item.id">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsItemChange(index)" />
      </label>
      <div class="goodsImg">
        <img :src="item.img"/>
      </div>
      <div class="goodsInfo">{{item.name}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReducer(item,index)">-</button>
        <input type="text" :value="item.num" />
        <button @click="handleAdd(item,index)">+</button>
      </div>
      <p class="Subtotal">{{item.num | sign(item.price)}}</p>
      <p class="operation" @click="handleDelete(index)">删除</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "center",
  created(){
    this.$observer.$on("handleDeleteData",(data)=>{
      this.data=data;
    })
  },
  props:{
    data:{
      type:Array,
      required:true
    }
  },
  methods:{
    handleReducer(item,index){
      console.log(this.data,123);
      if(item.num==1){
        item.num=1;
        this.data[index].num=item.num;
      }else{
        item.num--;
        this.data[index].num=item.num;
      }
    },
    handleAdd(item,index){
      item.num++;
      this.data[index].num=item.num;
    },
    handleDelete(index){
      this.data.splice(index,1);
      // sessionStorage.setItem("myCart",JSON.parse(this.data));
    }
  },
  filters:{
    sign(num,price){
      return "￥"+(num*price)
    }
  },
  // beforeDestroy(){
  //   sessionStorage.setItem("myCart",JSON.parse(this.data));
  // }
};
</script>

<style>
.goods {
  width: 100%;
  display: flex;
  height: 1rem;;
  align-items: center;
  justify-content: space-around;
  background: #ccc;
}
.goods > label {
  text-align: center;
}
.goods > .goodsInfo{
  width:.4rem;font-size:.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.goods > .goodsPrice {
  text-align: center;
  width:.35rem;
  text-align: center;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  height: 20px;
  border: 0;
}
.goods > .num > input {
  display: block;
  width:.2rem;
}

.goods > .Subtotal {
  text-align: center;
  width:.5rem;
}

.goods > .operation {
  text-align: center;
}
.goodsImg img {
  width: .6rem;;
  height: .6rem;;
}
</style>