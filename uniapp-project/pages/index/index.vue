<!--
 * @Author: BitCreate
 * @Date: 2024-03-19 16:51:29
-->
<template>
  <view class="home-container">
    <NavBar></NavBar>
    <!-- 选项卡 -->
    <TabBar
      :labelList="labelList"
      :activeIndex="activeIndex"
      @changeActiveIndex="changeActiveIndex"
    ></TabBar>
    <!-- 文章列表 -->
    <ArticleList
      class="list-container"
      :labelList="labelList"
      :activeIndex="activeIndex"
      @changeActiveIndex="changeActiveIndex"
    ></ArticleList>
  </view>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  onLoad() {
    this._initLabelList();
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    async _initLabelList() {
      if (this.labelList.length) return;
      const res = await this.$http.get_label_list();
      this.setLabelList([{ name: "全部" }, ...res]);
    },
    changeActiveIndex(index) {
      this.activeIndex = index;
    },
    ...mapMutations(["setLabelList"]),
  },
  computed: {
    labelList() {
      if (this.userInfo) {
        this.activeIndex = 0;
        return [
          { name: "全部" },
          ...this.$store.state.labelList.filter((item) =>
            this.userInfo.label_ids.includes(item._id)
          ),
        ];
      } else {
        return this.$store.state.labelList;
      }
    },
  },
};
</script>

<style lang="scss">
page {
  display: flex;
  height: 100%;
}
.home-container {
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
  @include flex(flex-start, column);
  align-items: inherit;
}
.list-container {
  flex: 1;
  box-sizing: border-box;
}
</style>
