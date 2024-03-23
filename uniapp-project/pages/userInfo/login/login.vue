<!--
 * @Author: BitCreate
 * @Date: 2024-03-21 12:22:46
-->
<template>
  <view class="login-container">
    <image src="/static/img/login_bg.png" mode="scaleToFill" class="banner-bg" />
    <!-- 导航 -->
    <view class="login-nav">
      <view class="nav-item" :class="{ active: type === 'account' }" @click="changeNav"
        >账号登录</view
      >
      <view class="nav-item" :class="{ active: type !== 'account' }" @click="changeNav"
        >手机登录</view
      >
    </view>
    <!-- 表单 -->
    <!-- 账号密码 -->
    <uni-forms
      class="form"
      ref="form"
      :model="formData"
      validateTrigger="blur"
      label-align="center"
    >
      <view class="" v-if="type === 'account'" key="account">
        <uni-forms-item name="username" label="账号">
          <uni-easyinput
            :inputBorder="false"
            class="form-input"
            v-model="formData.username"
            placeholder="请输入用户名"
          ></uni-easyinput>
        </uni-forms-item>
        <uni-forms-item name="password" label="密码">
          <uni-easyinput
            class="form-input"
            type="password"
            :inputBorder="false"
            v-model="formData.password"
            placeholder="请输入密码"
          />
        </uni-forms-item>
      </view>
      <!-- 手机号 -->
      <view class="" v-if="type === 'phone'" kye="phone">
        <uni-forms-item name="phone" label="手机号">
          <uni-easyinput
            class="form-input"
            :inputBorder="false"
            v-model="formData.phone"
            placeholder="请输入手机号"
          />
        </uni-forms-item>
        <uni-forms-item name="code" label="验证码">
          <uni-easyinput
            class="form-input"
            :inputBorder="false"
            v-model="formData.code"
            placeholder="请输入验证码"
          >
            <template #right>
              <SendCode @getForm="getForm" />
            </template>
          </uni-easyinput>
        </uni-forms-item>
      </view>
      <!-- bottom -->
      <button class="login-btn" @click="_userLoginSubmit">立即登录</button>
      <view class="login-other">
        <view class="login-other-item">忘记密码</view>
        <view class="login-other-item">注册账号</view>
      </view>
    </uni-forms>
  </view>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      type: "account",
      formData: {
        username: "",
        password: "",
        phone: "",
        code: "",
      },
      userRules: {
        username: {
          rules: [
            { required: true, errorMessage: "请输入用户名" },
            { min: 2, max: 10, errorMessage: "长度在 6 到 10 个字符" },
          ],
        },
        password: { rules: [{ required: true, errorMessage: "请输入密码" }] },
        phone: {
          rules: [
            { required: true, errorMessage: "请输入手机号" },
            {
              pattern: /^1[3-9]\d{9}$/,
              errorMessage: "请输入正确的手机号",
            },
          ],
        },
      },
    };
  },
  methods: {
    onReady() {
      this.$refs.form.setRules(this.userRules);
    },
    async _userLoginSubmit() {
      const res = await this.$refs.form.validate();
      // 发送数据到后端
      this._sendUserInfo({ ...res, type: this.type });
    },
    changeNav() {
      if (this.type === "account") {
        this.type = "phone";
      } else {
        this.type = "account";
      }
    },
    async _sendUserInfo(data) {
      const userInfo = await this.$http.user_login(data);
      if (userInfo) {
        // 使用store的形式进行存储
        this.updateUserInfo(userInfo);
        uni.showToast({
          title: "登录成功",
          icon: "none",
          mask: true,
        });
        setTimeout(() => {
          uni.navigateBack();
        }, 1500);
      }
    },
    // 像验证码组件发送form表单
    getForm(callback) {
      callback && callback(this.$refs.form);
    },
    ...mapMutations(["updateUserInfo"]),
  },
};
</script>

<style lang="scss">
page {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
@import "./css/login.scss";
</style>
