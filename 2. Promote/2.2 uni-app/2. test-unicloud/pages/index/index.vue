<template>
  <view>
    <text>用户名</text>
    <input type="text" v-model="useName" />
    <text>年龄</text>
    <input type="text" v-model="age" />
    <button type="default" @click="_sendUserInfo">提交表单</button>
    <view class="list-wrapper">
      用户列表
      <view class="list" v-for="(item, index) in userList" :key="index">
        <text>{{ `${item.userName}-${item.age}` }}</text>
        <button type="default" size="mini" @click="_delUser(item._id)">删除</button>
      </view>
    </view>
    <button @click="uploadFile">上传文件</button>
  </view>
</template>

<script>
export default {
  onLoad() {
    this._initUserInfo();
  },
  data() {
    return {
      useName: "",
      age: "",
      userList: [],
    };
  },
  methods: {
    async _sendUserInfo() {
      const res = await uniCloud.callFunction({
        name: "add_user",
        data: { userName: this.useName, age: this.age },
      });
      this._initUserInfo();
    },
    async _initUserInfo() {
      const res = await uniCloud.callFunction({
        name: "get_user",
      });
      this.userList = res.result.data.data;
    },
    async _delUser(_id) {
      const res = await uniCloud.callFunction({
        name: "del_user",
        data: { _id },
      });
      this._initUserInfo();
    },
    uploadFile() {
      uni.chooseImage({
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: ({ tempFilePaths, tempFiles }) => {
          uniCloud.uploadFile({
            cloudPath: "my-photo.png", //文件名
            filePath: tempFilePaths[0], //文件信息
            success: (res) => {
              console.log(res);
            },
            fail: (error) => {
              console.log(error);
            },
          });
        },
        fail: (error) => {},
      });
    },
  },
};
</script>

<style scoped>
.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
