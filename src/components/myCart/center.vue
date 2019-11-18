<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in data" :key="item.id">
      <label>
        <input
          type="checkbox"
          :checked="item.flag"
          @change="handleGoodsItemChange(item.flag,index)"
        />
      </label>
      <div class="goodsImg">
        <img :src="item.img" />
      </div>
      <div class="goodsInfo">{{item.name}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReducer(item,index)">-</button>
        <input type="text" :value="item.num" readonly />
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
  created() {
    this.$observer.$on("handleDeleteData", data => {
      this.data = data;
    });
  },

  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleReducer(item, index) {
      if (item.num == 1) {
        item.num = 1;
        this.data[index].num = item.num;
        sessionStorage.setItem("myCart", JSON.stringify(this.data));
      } else {
        item.num--;
        this.data[index].num = item.num;
        sessionStorage.setItem("myCart", JSON.stringify(this.data));
      }
    },
    handleAdd(item, index) {
      if (typeof item.num == "string") {
        item.num = Number(item.num) + 1;
        sessionStorage.setItem("myCart", JSON.stringify(this.data));
      } else {
        item.num++;
        sessionStorage.setItem("myCart", JSON.stringify(this.data));
      }
    },
    handleChangeData(item, index) {
      this.data[index].num = item.num;
      sessionStorage.setItem("myCart", JSON.stringify(this.data));
    },

    handleDelete(index) {
      this.data.splice(index, 1);
      sessionStorage.setItem("myCart", JSON.stringify(this.data));
    },
    handleGoodsItemChange(flag, index) {
      this.data[index].flag = flag;
    }
  },
  filters: {
    sign(num, price) {
      return "￥" + num * price;
    }
  }
};
</script>
<style>
.goods {
  width: 100%;
  display: flex;
  height: 1rem;
  align-items: center;
  justify-content: space-around;
  background: #ccc;
}
.goods > label {
  text-align: center;
}
.goods > .goodsInfo {
  width: 0.4rem;
  font-size: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.goods > .goodsPrice {
  text-align: center;
  width: 0.35rem;
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
  width: 0.2rem;
}

.goods > .Subtotal {
  text-align: center;
  width: 0.5rem;
}

.goods > .operation {
  text-align: center;
}
.goodsImg img {
  width: 0.6rem;
  height: 0.6rem;
}
</style>