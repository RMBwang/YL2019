<template>
  <div class="allDetails">
    <div class="details">
      <div class="headTop">
        <div class="headBg">
          <div class="bg" :style="'background:url(//static.228.cn'+details.PBIGIMG+')'"></div>
        </div>
        <div class="containerOne">
          <div class="headIcon">
            <v-touch tag="div" @tap="handelBack()" class="iconfont">&#xe501;</v-touch>
            <div class="iconRight">
              <div class="iconfont">&#xe503;</div>
              <div class="iconfont">&#xe936;</div>
            </div>
          </div>
          <div class="contentTwo">
            <img :src="'//static.228.cn'+details.PBIGIMG" class="contentImg" />
            <div class="contentRight">
              <div class="contentName">{{details.NAME}}</div>
              <div class="contentLimit">实名观演</div>
              <div class="contentMoney">￥ 22.8</div>
            </div>
          </div>
        </div>
        <!-- 温馨提示 -->
        <div class="tips" v-html="details.SPECIAL"></div>
        <!-- 注意事项 -->
        <div class="care">
          <h3>注意事项</h3>
          <div class="careDetails" v-html="details.PRECAUTIONS"></div>
        </div>
        <!-- 公告 -->
        <div class="notice">
          <h3>购票公告</h3>
          <div class="tipsTwo" v-html="details.BUY_AFFICHE"></div>
        </div>
        <!-- 演出详情 -->
        <div class="showDetails" v-html="details.INTRODUCTION"></div>
        <!-- buy -->
      </div>
      <div class="buy">
        <div class="iconfont customer">&#xe62b;</div>
        <div class="buyNow" @click="handleBuy()">{{details.STATUS==1?'立即预定':'立即购买'}}</div>
      </div>
      <!-- 演出详情 -->
      <div class="showDetails" v-html="details.INTRODUCTION"></div>
      <!-- buy -->
    </div>
    <Center />
  </div>
</template>

<script>
import { detailsApi } from "@api/details";
import Center from "@common/components/center/index.vue";
export default {
  name: "Details",
  props: ["id"],
  components: {
    Center
  },
  data() {
    return {
      details: {}
    };
  },
  status_id: 1,
  async created() {
    // let data=await detailsApi();
    let data = await detailsApi(this.id);
    this.details = data.data.product;
    // console.log(this.details);
    // console.log(data.data.product.PRICE);
  },
  methods: {
    handelBack() {
      let path = this.$route.query.path || "/home";
      this.$router.push(path);
    },
    handleBuy() {
      let cartData = {
        id: String(this.details.PRODUCTID),
        name: this.details.NAME,
        price: String(this.details.MAXPRICE),
        num: "1",
        img: "http://static.228.cn" + this.details.PBIGIMG
      };
      // console.log(cartData);
      let hasData1 = sessionStorage.getItem("myCart");

      if (!hasData1) {
        sessionStorage.setItem("myCart", "[" + JSON.stringify(cartData) + "]");
      } else {
        let has = 0;
        let hasData = JSON.parse(hasData1);
        for (var i = 0; i < hasData.length; i++) {
          if (hasData[i].id == cartData.id) {
            hasData[i].num++;
            cartData.num = hasData[i].num;
            hasData.splice(i, 1);
            hasData.push(cartData);
            sessionStorage.setItem("myCart", JSON.stringify(hasData));
            has = 1;
            break;
          }
        }
        if (has == 0) {
          hasData.push(cartData);
          // console.log(hasData);
          sessionStorage.setItem("myCart", JSON.stringify(hasData));
        }
      }
        this.$router.push("/cart");
    }
  }
};
</script>

<style>
.allDetails {
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: hidden;
}

.details {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 0.4rem;
}
.headTop {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.headBg {
  height: 1.8rem;
  position: absolute;
  overflow: hidden;
  top: -0.5rem;
  left: -75%;
  width: 250%;
  border-radius: 50%;
  overflow: hidden;
}

.bg {
  opacity: 0.8;
  width: 100%;
  height: 2.5rem;
  position: absolute;
  filter: blur(10px);
  background-position: center;
  overflow: hidden;
}

.containerOne {
  position: relative;
}

.headIcon {
  height: 0.3rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.iconRight {
  width: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.headIcon .iconfont {
  display: block;
  height: 0.2rem;
  width: 0.2rem;
  border-radius: 50%;
  line-height: 0.2rem;
  text-align: center;
  font-size: 0.14rem;
  background: #ccc;
}

.contentTwo {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contentTwo .contentImg {
  height: 1.3rem;
  display: block;
  border-radius: 0.08rem;
}

.contentRight {
  color: #fff;
  margin-left: 0.2rem;
}

.contentName {
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin-bottom: 0.1rem;
  margin-bottom: 0.1rem;
}

.contentLimit {
  font-size: 0.1rem;
  margin-bottom: 0.2rem;
}

.contentMoney {
  font-size: 0.16rem;
  color: #000;
}

.tips {
  margin: 0.2rem;
  border-radius: 0.08rem;
  background: #fff;
  padding: 0.1rem;
}

.tipsLimit {
  width: 100%;
  border-bottom: 1px solid #ccc;
  font-size: 0.12rem;
  color: #999;
  text-align: center;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.all {
  height: 0.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tipLeft {
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tipsTime {
  font-size: 0.12rem;
}

.tipsPosition {
  font-size: 0.12rem;
}

.tipsLeft .iconfont {
  margin-left: 0.1rem;
}

.tipsRight {
  margin-right: 0.1rem;
}

.care {
  padding: 0.2rem;
}

.care h3 {
  margin-bottom: 0.1rem;
}

.care .careDetails {
  font-size: 0.14rem;
  color: #7b8187;
}

.showDetails {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.showDetails img {
  width: 100%;
  height: 100%;
}

.notice {
  padding: 0.2rem;
}
.notice h3 {
  margin-bottom: 0.1rem;
}

.buy {
  height: 0.4rem;
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
}

.customer {
  border-radius: 50%;
  height: 0.3rem;
  width: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  color: #ff2959;
  background: #fff;
  box-shadow: 0px 3px 8px 0px rgba(255, 58, 86, 0.2);
}

.buyNow {
  width: 2.5rem;
  height: 0.3rem;
  background: #ff2959;
  color: #fff;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.15rem;
}
</style>
