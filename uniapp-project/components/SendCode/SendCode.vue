<template>
  <view class="code-container">
    <view class="vCode-btn" @click="getForm">
      {{ runTime ? `${time}秒后重新获取` : "获取验证码" }}
    </view>
  </view>
</template>

<script>
export default {
  name: "SendCode",
  // 不支持小程序
  // props: {
  //   form: Object,
  // },
  data() {
    return {
      timeId: null,
      time: 60,
      runTime: false,
    };
  },
  methods: {
    getForm() {
      if (this.runTime) return;
      this.$emit("getForm", this._SendCode);
    },
    async _SendCode(form) {
      const { phone } = await form.validateField(["phone"]);
      this.runTime = true;
      // 创建定时器
      this.timeRunning();
      // 发送验证码
      const res = await this.$http.get_code({ phone });
    },
    timeRunning() {
      this.timeId = setInterval(() => {
        this.time--;
        if (this.time <= 0) {
          clearInterval(this.timeId);
          this.runTime = false;
          this.time = 60;
        }
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.timeId);
  },
};
</script>

<style lang="scss" scoped>
.code-container {
  // width: 200rpx;
  margin-right: 20rpx;
  .vCode-btn {
    background-color: $base-color;
    text-align: center;
    color: #fff;
    padding: 20rpx;
    border-radius: 10rpx;
    opacity: 0.8;
  }
}
</style>
