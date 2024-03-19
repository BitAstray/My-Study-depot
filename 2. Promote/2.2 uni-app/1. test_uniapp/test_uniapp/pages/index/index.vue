<!--
 * @Author: BitCreate
 * @Date: 2024-03-18 15:52:53
-->
<template>
  <view>
    <button type="default" @click="getData">获取数据</button>
    <button type="default" @click="uploadImg">上传图片</button>
    <!-- #ifndef H5 -->

    <!-- #endif -->
  </view>
</template>

<script>
export default {
  methods: {
    async getData() {
      // console.log(this.$http);
      const res = await this.$http.get("https://study.duyiedu.com/api/herolist");
      console.log(res);
    },
    uploadImg() {
      uni.chooseImage({
        count: 6, //默认9
        sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album"], //从相册选择
        success: function (res) {
          console.log(JSON.stringify(res.tempFilePaths));
        },
      });
    },
  },
};
</script>

<style scoped></style>
