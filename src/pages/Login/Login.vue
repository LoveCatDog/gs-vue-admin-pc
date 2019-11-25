<template>
  <div class="login_wrap">
    <div class="login_bj">
      <!-- <img class="header_logo" src="@/assets/images/logo.png" /> -->
      <p class="header_title">车队后台管理PC端</p>
    </div>
    <div class="login_box">
      <div class="left_box">
        <div>
          <img src="@/assets/images/login_mall1.png" />
        </div>
      </div>
      <div class="right_box">
        <el-form label-width="80px" :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item>
            <p class="enter">登录后台入口</p>
          </el-form-item>
          <el-form-item prop="account">
            <el-input
              prefix-icon="el-icon-user-solid"
              v-model="loginForm.account"
              placeholder="请输入账号"
              prop="account"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-view"
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
              clearable
              prop="password"
            ></el-input>
          </el-form-item>
          <!-- native.prevent :在该输入框中按下回车键应该提交表单，但是我们希望阻止这一默认行为，可以在 el-form 中添加 @submit.native.prevent。-->
          <el-form-item>
            <el-button
              @click="handleLogin('loginForm')"
              size="medium"
              type="primary"
              style="width:100%"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { loginBtn } from "@/api/login";
import { validate } from "@/util/validate";

export default {
  data() {
    var validatorAccount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatorPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        account: "super", //账号
        password: "admin" //密码
      },
      loading: false, //点击登录按钮是否显示加载中
      loginRules: {
        account: [
          { validator: validatorAccount, required: true, trigger: "blur" }
        ],
        password: [
          { validator: validatorPassword, required: true, trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleLogin(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          let account = this.loginForm.account;
          let password = this.$md5(this.loginForm.password);
          this.loginSubmit(account, password);
        } else {
          return false;
        }
      });
    },
    loginSubmit: function(account, password) {
      this.loading = true;
      this.$store
        .dispatch("Login", {
          username: account,
          password
        })
        .then(res => {
          console.log("res", res);
          this.loading = false;
          this.$router.push("/home");
        })
        .catch(error => {
          this.loading = false;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login_wrap {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(238, 238, 238);

  .login_bj {
    background: url(../../assets/images/login_bj.png) no-repeat center center;
    min-width: 1200px;
    height: 50%;
    text-align: center;
    .header_title {
      color: #eee;
      font-size: 60px;
      padding: 6% 0 0;
    }
    .header_logo {
      width: 300px;
      padding: 1% 0 0;
    }
  }
  .login_box {
    width: 890px;
    height: 350px;
    background: rgba(255, 255, 255, 0.4);
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    margin: -130px auto auto;
    box-sizing: border-box;
    padding: 54px 100px 60px;
    .left_box {
      float: left;
      margin-top: -18px;
      width: 250px;
      margin-right: 66px;
      img {
        width: 100%;
      }
    }

    .right_box {
      float: left;
      width: 350px;
      .enter {
        font-size: 25px;
        color: #fff;
      }
    }
  }
}
</style>