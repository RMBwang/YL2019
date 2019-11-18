<template>
  <div class="loginSuccess">
    <div class="big"></div>
    <div class="aa">
      <a href class="iconfont iconfontA">&#xe501;</a>
    </div>
    <div class="photo">
      <div class="photoImg">
        <img src="http://m2static.228.cn/images/head-photo.png" alt />
      </div>
      <div class="phone">12345678910</div>
    </div>
    <div style="background:#eee;flex:1;">
      <div class="moneyList">
        <div class="classify">
          <div class="money">1张</div>
          <div class="typeList">优惠券</div>
        </div>
        <div class="classify">
          <div class="money">0.0元</div>
          <div class="typeList">钱包</div>
        </div>
        <div class="classify">
          <div class="money">0</div>
          <div class="typeList">积分</div>
        </div>
      </div>
      <div class="myOrder">
        <div class="myOrderL">我的订单</div>
        <div class="myOrderR">&gt;</div>
      </div>
      <div class="myServer">
        <div class="myServerTop">我的服务</div>
        <div class="myServerBottom">
          <div class="myServerOther">
            <div class="iconfont iconfontP">&#xe791;</div>
            <div class="myServerList">收货地址</div>
          </div>
          <div class="myServerOther">
            <div class="iconfont iconfontP">&#xe618;</div>
            <div class="myServerList">我的活动</div>
          </div>
          <div class="myServerOther">
            <div class="iconfont iconfontP">&#xe660;</div>
            <div class="myServerList">我的提问</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

html,
body,
.loginSuccess {
  height: 100%;
  width: 100%;
}

.loginSuccess {
  display: flex;
  flex-direction: column;
}

html {
  font-size: 32vw;
}

body {
  font-size: 0.16rem;
}
li {
  list-style: none;
}

.aa {
  margin-top: 0.25rem;
  margin-bottom: 0.4rem;
}

.iconfontA {
  display: block;
  color: #fff;
  margin-left: 0.15rem;
  width: 0.25rem;
  height: 0.25rem;
  text-align: center;
  line-height: 0.25rem;
  font-size: 0.12rem;
  background: #ccc;
  border-radius: 50%;
}

.big {
  height: 1.7rem;
  width: 100%;
  background: url("http://m2static.228.cn/images/head-poho-bg.jpg") no-repeat
    center;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.photo {
  height: 0.8rem;
  width: 100%;
}

.photoImg {
  height: 0.5rem;
  width: 0.5rem;
  margin: 0 auto;
}

.photoImg img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.phone {
  font-size: 0.16rem;
  text-align: center;
  width: 100%;
  line-height: 0.3rem;
}

.moneyList {
  padding-top: 0.1rem;
  height: 0.4rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.15rem;
}

.classify {
  height: 0.4rem;
  width: 0.4rem;
  text-align: center;
  font-size: 0.12rem;
}

.money {
  line-height: 0.2rem;
}

.typeList {
  line-height: 0.2rem;
}

.myOrder {
  height: 0.4rem;
  background: #fff;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  line-height: 0.4rem;
  border-radius: 0.08rem;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.1rem;
}

.myOrderL {
  margin-left: 0.1rem;
}

.myOrderR {
  margin-right: 0.1rem;
  color: #c33;
}

.myServer {
  height: 2rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  background: #fff;
  border-radius: 0.08rem;
}

.myServerTop {
  height: 0.4rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  border-bottom: 1px solid #ccc;
  font-size: 0.14rem;
  line-height: 0.4rem;
}

.myServerBottom {
  height: 0.68rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.myserverOther {
  width: 0.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.iconfontP {
  font-size: 0.16rem;
  text-align: center;
}

.myServerList {
  font-size: 0.12rem;
  text-align: center;
}

.bottom {
  height: 0.5rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
  background: #fff;
}

.bottom .bottom1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bottom1 li a {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 0.05rem;
}

.bottom1 li .icon {
  font-size: 0.2rem;
}

.bottom1 li .words {
  font-size: 0.15rem;
}
</style>