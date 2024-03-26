<!--
 * @Author: BitCreate
 * @Date: 2024-03-26 14:41:16
-->
<template>
  <view class="label-container">
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">我的标签</view>
        <view class="label-edit" @click="changeEditStatus">
          {{ this.isEdit ? "完成" : "编辑" }}
        </view>
      </view>
      <view class="label-content">
        <view
          class="label-content-item"
          v-for="(item, index) in selfLabelList"
          :key="item._id"
        >
          {{ item.name }}
          <uni-icons
            @click="delLabel(index)"
            v-show="isEdit"
            class="icon-close"
            type="clear"
            color="red"
            size="20"
          />
        </view>
        <view class="no-data" v-if="!selfLabelList.length"> 当前没有数据</view>
      </view>
    </view>
    <!-- 标签推荐结构 -->
    <view class="label-box">
      <view class="label-header">
        <view class="label-title">标签推荐</view>
      </view>
      <view class="label-content">
        <view
          class="label-content-item"
          @click="addLabel(item)"
          v-for="(item, index) in recommendLabelList"
          :key="item._id"
        >
          {{ item.name }}
        </view>
        <view class="no-data" v-if="!recommendLabelList.length"> 当前没有数据</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isEdit: false,
      labelIds: [],
    };
  },
  methods: {
    // 添加标签
    addLabel(item) {
      if (!this.isEdit) return;
      this.labelIds.push(item._id);
    },
    // 删除标签
    delLabel(index) {
      this.labelIds.splice(index, 1);
    },
    //调整编辑的状态
    changeEditStatus() {
      this.isEdit && this._updateLabel();
      this.isEdit = !this.isEdit;
    },
    async _updateLabel() {
      // user信息 userInfo._id
      const label_ids = this.selfLabelList.map((item) => item._id);
      const res = await this.$http.update_label_ids({
        userId: this.userInfo._id,
        label_ids,
      });
      uni.showToast({
        title: res.message,
        mask: true,
      });
      this.updateUserInfo({ ...this.userInfo, label_ids });
    },
  },
  watch: {
    userInfo: {
      handler() {
        this.labelIds = this.userInfo.label_ids;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState(["labelList"]),
    selfLabelList() {
      return this.labelList.filter((item) => this.labelIds.includes(item._id));
    },
    recommendLabelList() {
      return this.labelList.filter(
        (item) => !this.labelIds.includes(item._id) && item._id
      );
    },
  },
};
</script>

<style lang="scss">
@import "./css/labelAdmin.scss";
</style>
