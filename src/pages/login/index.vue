<template>
  <div class="all">
    <Header title icon />
    <div class="login">
      <div class="safe">
        <div class="title">会员登录</div>
        <input type="text" placeholder="手机号/邮箱地址" class="username input" v-model="UserName" />
        <div class="tipsLogin">手机号/邮箱地址是必须的(内容可变)</div>
        <input type="password" placeholder="请输入密码" class="pwd input" v-model="PassWord" />
        <div class="tipsPwd">密码是必须的(内容可变)</div>
        <div class="check">
          <div class="forgetPassword">忘记密码</div>
        </div>
        <button @click="handleLoginUser()">登录</button>
        <div class="otherLogo">
          <a class="iconfont">&#xe601;</a>
          <a class="iconfont">&#xe6f5;</a>
          <a class="iconfont">&#xe60c;</a>
        </div>
        <div class="registerTitle">马上注册</div>
      </div>
    </div>
    <div class="register" style="display:none;">
      <div class="safe">
        <div class="title">会员注册</div>
        <input type="text" placeholder="请输入手机号" class="username input" v-model="user" />
        <div class="tipsLogin">手机号/邮箱地址是必须的(内容可变)</div>
        <input type="password" placeholder="请输入密码" class="pwd input" v-model="pass" />
        <div class="tipsPwd">密码是必须的(内容可变)</div>
        <button @click="handleregister()">注册</button>
        <div class="loginTitle">马上登录</div>
      </div>
    </div>
  </div>
</template>



<script>
import G from "glob";
export default {
  data() {
    return {
      UserName: "", //登陆账号
      PassWord: "", //登陆密码
      user: "", //注册账号
      pass: "" //注册密码
    };
  },
  watch: {
    UserName() {
      console.log(this.UserName);
    },
    PassWord() {
      console.log(this.PassWord);
    },
    user() {
      console.log(this.user);
    },
    pass() {
      console.log(this.pass);
    }
  },
  /*
    "register":[{"username":"xxx","password":"xxx"},{},{}]
  
  */

  /*
    登录注册：
      1：获得 注册 和登陆的 账号密码框里面的内容
      2：将注册的账号跟密码存在sessStorage里面，然后获得登陆页面里面的账号跟密码，与sessStorage里面的账号密码作比较
          当用户再次注册的时候 将注册的页面的账号跟密码拉出来 跟sessStorage里面的账号密码
            如果存在：那么就弹出  用户存在


          当用户再次登录的时候：将账号跟密码拉出来跟sessStorage里面的账号密码作比较：
            1、输入的账号如果在sessStorage里面找不到，则弹出用户不存在
              如果账号相同密码不同，则弹出密码错误
            2、如果 用户输入的账号跟密码 与sessStorage里面的某一个数据一样 那么 就进入主页
  
  */
  methods: {
    handleregister() {
      if (!this.user && this.pass) {
        alert("请输入账号");
      } else if (this.user && !this.pass) {
        alert("请输入密码");
      } else if (!this.user && !this.pass) {
        alert("请输入账号跟密码");
      } else {
        let yonghu = JSON.parse(sessionStorage.getItem("User"));
        if (!yonghu) {
          yonghu = [{ username: this.user, password: this.pass }];

          sessionStorage.setItem("User", JSON.stringify(yonghu));

          alert("注册成功");
        } else {
          console.log(yonghu);
          let has = 0;
          for (var i = 0; i < yonghu.length; i++) {
            if (this.user == yonghu[i].username) {
              has = 1;
              alert("账号已注册");
              this.user = "";
              this.pass = "";

              break;
            }
          }
          if (has == 0) {
            yonghu.push({ username: this.user, password: this.pass });
            sessionStorage.setItem("User", JSON.stringify(yonghu));

            alert("注册成功");
            this.user = "";
            this.pass = "";
            
          }
        }
      }
    },
    handleLoginUser() {
      // alert(111)
      let GetUser = JSON.parse(sessionStorage.getItem("User"));
      console.log(GetUser);
      if (!GetUser) {
        alert("账号不存在");
        this.UserName = "";
        this.PassWord = "";
      } else {
        for (var i = 0; i < GetUser.length; i++) {
          if (
            this.UserName == GetUser[i].username &&
            this.PassWord == GetUser[i].password
          ) {
            alert("登陆成功");
            this.UserName = "";
            this.PassWord = "";
          } else {
            if (!this.UserName || this.UserName != GetUser[i].username) {
              alert("请输入正确的账号");
            } else if (!this.PassWord) {
              alert("请输入正确的密码");
            } else if (this.PassWord != GetUser[i].password) {
              alert("密码错误");
            }
          }
        }
      }
    }
  }
};

var show_num = [];
function change() {
  var registerTitle = document.getElementsByClassName("registerTitle")[0];
  var loginTitle = document.getElementsByClassName("loginTitle")[0];
  var login = document.getElementsByClassName("login")[0];
  var register = document.getElementsByClassName("register")[0];
  registerTitle.onclick = function() {
    login.style.display = "none";
    register.style.display = "block";
  };
  loginTitle.onclick = function() {
    login.style.display = "block";
    register.style.display = "none";
  };
}
window.onload = function() {
  // draw(show_num);
  change();
  var canvas = document.getElementById("canvas");
};
</script>



<style >
.all {
  height: 100%;
  width: 100%;
  background: url("http://m2static.228.cn/images/loginBg.jpg") no-repeat center;
  padding-top: 1rem;
}
#header {
  top: 0;
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
  background: red;
  color: #fff;
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

