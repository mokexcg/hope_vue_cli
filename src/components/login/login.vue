<template>
    <div class="initEntry">
        <form action="" class="boxform">
            <div>
                <div class="boxLogin">
                    <span>用户名：</span>
                    <input type="text" class="" ref="user" placeholder="用户名" v-model="userName">
                </div>
                <div class="boxLogin">
                    <span>密码：</span>
                    <input type="password" placeholder="密码" v-model="userPass" v-on:focus="focusPass()">
                </div>
                <div class="boxLogin">
                    <span>验证码：</span>
                    <input type="text" class="check" v-model="userCheck" v-on:focus="focusCheck()">
                    <div class="checkMa" v-on:click="changeCheck()">
                      <span class="checkSpan">8</span>
                      <span class="checkSpan">8</span>
                      <span class="checkSpan">8</span>
                      <span class="checkSpan">8</span>
                    </div>
                    <!-- <span class="checkMa" ref="check" v-on:click="changeCheck()">888</span> -->
                </div>
                <input type="submit" value="登录" name="submit" class="submit" v-on:click="login()">
                <!-- <router-link to="/first">
                    <button class="btn btn-default">点击跳转</button>
                </router-link> -->
            </div>
        </form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      userPass: '',
      userCheck: ''
    }
  },
  mounted: function () {
    this.changeCheck()
  },
  methods: {
    focusPass () {
      if (!this.userName) {
        this.$message({
          message: '用户名不存在',
          type: 'warning'
        })
      }
    },
    focusCheck () {
      if (!this.userPass) {
        this.$message({
          message: '密码不存在',
          type: 'warning'
        })
      }
    },
    changeCheck () {
      let code = ''
      let span = document.getElementsByClassName('checkSpan')
      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 36)
        code = arr[num]
        span[i].innerText = code
        span[i].style.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
      }
    },
    login () {
      // if (this.$refs.user.value === 'mokeke') {
      //   console.log('mokeke')
      //   this.$router.push('/layout')
      // } else {
      //   this.$router.push('/')
      // }
      let checkMa = document.getElementsByClassName('checkMa')[0].outerText
      if (this.userName === 'mokeke' && this.userPass === 'abcd.1234') {
        if (this.userCheck === checkMa) {
          this.$router.push('/layout')
        } else {
          this.$message.error('您输入的验证码有误')
        }
      } else {
        this.$message.error('您输入的用户名或密码有误')
      }
    }
  }
}
</script>
<style>
.initEntry {
  /* background: url('../../../static/img/blank.jpg') center no-repeat; */
  /* background-size: 100%; */
  background: rgba(100,197,197,1);
  height: 100%;
  overflow: auto;
}
.boxform {
  /* border: 1px solid #000; */
  width: 354px;
  margin: 0 auto;
  margin-top: 260px;
  background: rgba(83,162,162,1);
  padding-top: 25px;
  padding-right: 40px;
  padding-bottom: 16px;
  box-shadow: -2px -2px 2px 1px rgba(86, 141,168,1);
}
span {
  display: inline-block;
  width: 100px;
  text-align: right;
  padding-right: 10px;
  float: left;
}
.boxLogin {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
input {
  height: 22px;
  width: 240px;
  text-indent: 5px;
}
.check {
  width: 180px;
}
.checkSpan {
  display:inline-block;
  width: 1px;
}
.checkMa {
  display: inline-block;
  width: 50px;
  height: 28px;
  margin-left: 10px;
  background: #ff8;
  line-height: 28px;
  padding-left: 3px;
}
.submit {
  width: 80px;
  height: 28px;
  margin: 10px auto;
}
</style>
