<template>
  <div class="all">
    <Header title icon />
    <div class="login">
      <div class="safe">
        <div class="title">会员登录</div>
        <input type="text" placeholder="手机号/邮箱地址" class="username input" />
        <div class="tipsLogin">手机号/邮箱地址是必须的(内容可变)</div>
        <input type="password" placeholder="请输入密码" class="pwd input" />
        <div class="tipsPwd">密码是必须的(内容可变)</div>
        <div class="check">
          <div class="twoLogin">
            <input type="checkbox" class="checkbox" />两周内免登陆
          </div>
          <div class="forgetPassword">忘记密码</div>
        </div>
        <button>登录</button>
        <div class="otherLogo">
          <a href class="iconfont">&#xe601;</a>
          <a href class="iconfont">&#xe6f5;</a>
          <a href class="iconfont">&#xe60c;</a>
        </div>
        <div class="registerTitle">马上注册</div>
        <div class="foot">
          <span>登录注册表示同意</span>
          <a>永乐票务用户服务协议</a>
        </div>
      </div>
    </div>
    <div class="register" style="display:none;">
      <div class="safe">
        <div class="title">会员注册</div>
        <input type="text" placeholder="请输入手机号" class="username input" />
        <div class="tipsLogin">手机号/邮箱地址是必须的(内容可变)</div>
        <input type="password" placeholder="请输入密码" class="pwd input" />
        <div class="tipsPwd">密码是必须的(内容可变)</div>
        <div class="code">
          <input type="text" placeholder="请输入验证码（不区分大小写）" class="yanzhengma a1" />
          <canvas id="canvas" width="90" height="40"></canvas>
        </div>
        <button>登录</button>
        <div class="otherLogo">
          <a href class="iconfont">&#xe601;</a>
          <a href class="iconfont">&#xe6f5;</a>
          <a href class="iconfont">&#xe60c;</a>
        </div>
        <div class="loginTitle">马上登录</div>
        <div class="foot">
          <span>登录注册表示同意</span>
          <a>永乐票务用户服务协议</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {};
</script>



<style >
  .all {
  height: 100%;
  width: 100%;
  background: url("http://m2static.228.cn/images/loginBg.jpg") no-repeat center;
  padding-top:1rem;
}
#header{
    top:0
}

.all .back {
  height: 0.2rem;
  padding-top: 0.2rem;
  width: 100%;
  margin-bottom: 0.2rem;
}

.all .back a {
  font-size: 0.2rem;
  color: #fff;
  margin-left: 0.2rem;
  text-decoration: none;
}

.safe {
  width: 2.62rem;
  margin: 0 auto;
  color: #ccc;
}

.title {
  font-size: 0.32rem;
  color: #fff;
  margin-bottom: 0.2rem;
}
.input {
  outline: none;
}
.username,
.pwd {
  height: 0.46rem;
  width: 2.62rem;
  text-align: center;
  border-radius: 0.23rem;
  font-size: 0.16rem;
  background-color: transparent;
  color: #ccc;
}

.tipsLogin,
.tipsPwd {
  height: 0.2rem;
  font-size: 0.12rem;
  line-height: 0.2rem;
  color: #f00;
  text-align: center;
  visibility: hidden; /* 隐藏 */
}

.check {
  height: 0.4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  height: 0.46rem;
  width: 100%;
  border-radius: 0.23rem;
  font-size: 0.16rem;
  color: #ccc;
  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.2rem;
}

.otherLogo {
  margin-bottom: 0.2rem;
  height: 0.25rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.otherLogo .iconfont {
  color: #f00;
}

.registerTitle,
.loginTitle {
  margin-bottom: 0.2rem;
  font-size: 0.16rem;
  text-align: center;
}

.foot {
  font-size: 0.12rem;
  text-align: center;
}

.foot a {
  color: #f00;
}

.code {
  height: 0.46rem;
  width: 100%;
}

.yanzhengma {
  float: left;
  width: 1.88rem;
  height: 0.29rem;
  background: transparent;
}

#canvas {
  float: left;
  box-sizing: border-box;
  border: 1px solid #ddd;
  cursor: pointer;
  vertical-align: middle;
}

</style>

