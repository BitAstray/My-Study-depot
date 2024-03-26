<!--
 * @Author: BitCreate
 * @Date: 2024-03-25 15:24:32
-->
<template>
  <view class="search-container">
    <NavBar
      isSearch
      :parentVal="parentVal"
      @updateVal="parentVal = $event"
      @sendSearchData="_sendSearchData"
    ></NavBar>
    <!-- 搜索容器 -->
    <view class="search-wrapper" v-if="!isSearch">
      <!-- 没有进行搜索操作的处理 -->
      <view class="search-history-container">
        <!-- 头部内容 -->
        <view class="search-header">
          <text class="history-text">搜索历史</text>
          <text class="history-clean" @click="clearHistory">清空</text>
        </view>
        <!-- 内容部分 -->
        <view class="search-history-content" v-if="historyList.length">
          <view
            @click="openHistory(item)"
            class="history-content-item"
            v-for="(item, index) in historyList"
            :key="index"
          >
            {{ item }}
          </view>
        </view>
        <!-- 没有内容 -->
        <view class="no-data" v-else> 暂无搜索历史 </view>
      </view>
    </view>
    <!-- 开始进行搜索操作 -->
    <view v-else class="search-list-container">
      <ListItem
        v-if="searchList.length"
        :searchList="searchList"
        @saveSearchHistory="saveSearchHistory"
      ></ListItem>
      <view class="no-data" v-else> 没有搜索到相关数据 </view>
    </view>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isSearch: false,
      searchList: [],
      parentVal: "",
    };
  },
  methods: {
    // 发送数据到云函数
    async _sendSearchData() {
      this.isSearch = true;
      if (!this.parentVal) {
        this.searchList = [];
        this.isSearch = false;
        return;
      }
      const { articleList } = await this.$http.get_search_data({
        searchVal: this.parentVal,
      });
      this.searchList = articleList;
    },
    saveSearchHistory() {
      this.setHistory(this.parentVal);
    },
    ...mapMutations(["setHistory", "clearHistory"]),
    // 点击历史纪录搜索
    openHistory(item) {
      this.parentVal = item;
      this._sendSearchData();
    },
  },
  computed: {
    ...mapState(["historyList"]),
  },
};
</script>

<style lang="scss">
@import "./css/search.scss";
</style>
