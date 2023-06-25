<!--
 * @Author: Astray
 * @Date: 2023-06-18 19:26:18
-->
<template>
  <div>
    <!-- 组件标题 -->
    <div class="title">{{ uploadTitle }}</div>
    <!-- 控件 -->
    <el-upload
      class="avatar-uploader"
      action="/api/upload"
      :headers="headers"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="value" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from "@/utils/auth";
export default {
  props: ["uploadTitle", "value"],
  computed: {
    imageUrl() {
      if (this.value) {
        return this.value;
      } else {
        return this.value;
      }
    },
    headers() {
      return {
        Authorization: "Bearer " + getToken(),
      };
    },
  },
  methods: {
    handleAvatarSuccess(res) {
      if (!res.code && res.data) {
        //上传成功
        this.$emit("input", res.data);
      }
    },
    beforeAvatarUpload() {},
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 15px 0;
  font-weight: 100;
}

.avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
