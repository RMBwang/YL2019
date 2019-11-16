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
var show_num = [];
        function draw(show_num) {
            var canvas_width = 90;
            // document.getElementById("canvas").style.width;
            var canvas_height = 40;
            //document.getElementById("canvas").style.height;
            console.log(canvas_width, canvas_height);
            var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
            var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            var aCode = sCode.split(",");
            var aLength = aCode.length;//获取到数组的长度

            for (var i = 0; i < 4; i++) {  //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
                var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                var deg = Math.random() - 0.5; //产生一个随机弧度
                var txt = aCode[j];//得到随机的一个内容
                show_num[i] = txt.toLowerCase();
                var x = 10 + i * 20;//文字在canvas上的x坐标
                var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                context.font = "bold 23px 微软雅黑";

                context.translate(x, y);
                context.rotate(deg);

                context.fillStyle = randomColor();
                context.fillText(txt, 0, 0);

                context.rotate(-deg);
                context.translate(-x, -y);
            }
            for (var i = 0; i <= 5; i++) { //验证码上显示线条
                context.strokeStyle = randomColor();
                context.beginPath();
                context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.stroke();
            }
            for (var i = 0; i <= 30; i++) { //验证码上显示小点
                context.strokeStyle = randomColor();
                context.beginPath();
                var x = Math.random() * canvas_width;
                var y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        }

        //得到随机的颜色值
        function randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }
        function change() {
            var registerTitle = document.getElementsByClassName("registerTitle")[0];
            var loginTitle = document.getElementsByClassName("loginTitle")[0];
            var login = document.getElementsByClassName("login")[0];
            var register = document.getElementsByClassName("register")[0];
            registerTitle.onclick = function () {
                login.style.display = "none";
                register.style.display = "block";
            }
            loginTitle.onclick = function () {
                login.style.display = "block";
                register.style.display = "none";
            }
        }
        window.onload = function () {
            draw(show_num);
            change();
            var canvas = document.getElementById("canvas");
            canvas.onclick = function () {
                draw(show_num);
            }
        }
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

