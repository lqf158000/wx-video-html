<template>
  <div class="login-container">
    <strong>为防止信息泄漏，请填写以下认证问题：</strong>
    <br/><br/><br/>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="password">你小时候的梦想是当杂货铺老板，边玩_ _ _ _边看店</label>
        <input id="password" v-model="password" required />
      </div>
      <button type="submit">确认</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  mounted() {
    if(localStorage.getItem('wx-video-login')) {
      this.$router.replace('/sky');
    }
  },
  methods: {
    handleLogin() {
      if (this.password === '梦幻西游') {
        this.error = ''
        // 登录成功逻辑
        localStorage.setItem('wx-video-login', true);
        this.$router.push('/sky')
      } else {
        this.error = '错误，提示：一款四字游戏'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 10px;
  background: #409eff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}
.error {
  color: #f56c6c;
  margin-top: 16px;
  text-align: center;
}
</style>
