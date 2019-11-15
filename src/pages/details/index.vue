<template>
  <div class="allDetails">
  <div class="details">
    <div class="headTop">
      <div class="headBg">
        <div class="bg"></div>
      </div>
      <div class="containerOne">
        <div class="headIcon">
          <v-touch tag="div" @tap="handelBack()" class="iconfont">&#xe501;</v-touch>
          <div class="iconRight">
            <div class="iconfont">&#xe503;</div>
            <div class="iconfont">&#xe936;</div>
          </div>
        </div>
        <div class="content">
          <img
            src="http://static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg"
            class="contentImg"
          />
          <!-- http://static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg -->
          <div class="contentRight">
            <div class="contentName">【双十一活动专属】YEO JIN GOO MOONLIGHT FAN MEETING IN MACAU CHINA</div>
            <div class="contentLimit">实名观演</div>
            <div class="contentMoney">￥ 22.8</div>
          </div>
        </div>
      </div>
      <!-- 温馨提示 -->
      <div class="tips">
        <div
          class="tipsLimit"
        >【温馨提示】本演出将于11月11日11:11开启售票，建议您提前注册、登录永乐票务网站或客户端，便于第一时间秒杀成功；为了保证您能够更顺利购票，请下载最新版本的APP(版本号：V3.6.5)；</div>
        <div class="all">
          <div class="tipsLeft">
            <div class="tipsTime">
              <i class="iconfont">&#xe502;</i>
              <span>2019.11.17</span>
            </div>
            <div class="tipsPosition">
              <i class="iconfont">&#xe791;</i>
              <span>澳门老百汇</span>
            </div>
          </div>
          <div class="tipsRight">></div>
        </div>
      </div>
      <!-- 注意事项 -->
      <div class="care">
        <h3>注意事项</h3>
        <div class="careDetails">
          a)演出详情仅供参考，具体信息以现场为准；
          <br />b)1.2米以下儿童谢绝入场，1.2米以上儿童需持票入场；
          <br />c)演出票品具有唯一性、时效性等特殊属性，如非活动变更、活动取消、票品错误的原因外，不提供退换票品服务，购票时请务必仔细核对并审慎下单。
          <br />d)需要开具发票的购票客户，请您在演出/活动开始5天前提供相关发票信息至在线客服，演出/活动结束后将统一由演出/活动主办单位开具增值税发票。
        </div>
      </div>
      <!-- 公告 -->
      <div class="notice">
        <h3>购票公告</h3>
        <div class="noticeTips">【温馨提示】</div>
        <p>
          1.本演出将于
          <span>XX月XX日</span>开启售票；
        </p>
        <p>
          2.本演出
          <span>不支持银行转账</span> 的购票方式
        </p>
        <p>
          3.为尽可能地保证公平，让更多歌迷朋友买到心仪的价位，购票下单后
          <span>15分钟内</span>未支付将被取消订单回滚库存；大家可密切刷新网页进行购买；
        </p>
        <p>4.部分银行信用卡网上支付有限额，请大家提前跟卡片所属银行核实限额，以免耽误付款；</p>
        <p>5.为了确保广大观众的利益，对于异常订购行为，永乐票务有权取消相应订单！（同一注册ID、同一收货地址及姓名、同一手机号、同一支付方式账号、同一版本号信息购买设备均视为异常购票行为）</p>
        <p>6.同一订单同等价位门票确保连座；</p>
        <p>
          7.抢票前请在“我的永乐-收货地址”中维护好准确的收货地址，以便后期更快收到您的票品；
          <span>抢票成功后将不支持修改配送方式及收货地址。</span>
        </p>
      </div>
      <!-- 演出详情 -->
      <div class="showDetails"></div>
      <!-- buy -->
    </div>
  </div>
    <div class="buy">
      <div class="iconfont customer">&#xe62b;</div>
      <div class="buyNow">立即购买</div>
    </div>
  </div>
</template>

<script>
import {detailsApi} from "@api/details"
export default {
    name:"Details",
    props:["id"],
    data(){
      return {
        details:""
      }
    },
    async created(){
      let data=await detailsApi();
      // console.log(data);
    },
    methods:{
      handelBack(){
        // let path=this.$route.query.path;
        // console.log(path)
        // this.$router.push(path)

        let path = this.$route.query.path || "/home";
        this.$router.push(path);
      }
    }
    
};
</script>

<style>


.allDetails {
  height: 100%;
  width: 100%;
  background: #eee;
}

.details {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: .4rem;
}
.headTop {
  width: 100%;
  position: relative;
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
  background: url("http://static.228.cn/upload/2019/11/08/AfterTreatment/1573194546388_l5c2-0.jpg") center;
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

.content {
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content .contentImg {
  height: 1.3rem;
  width: 1rem;
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
  height: 1.2rem;
  margin: 0.2rem;
  border-radius: 0.08rem;
  background: #fff;
  padding: 0.1rem;
  padding-bottom: 0;
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

.notice {
  padding: 0.2rem;
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
