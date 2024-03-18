/*
 * @Author: Astray
 * @Date: 2023-06-14 21:25:29
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 21:46:31
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\store\banner.js
 */

import { getBanners } from "@/api/banner";
export default {
  namespaced: true,
  state: {
    loading: false,
    data: [],
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchBanner(ctx) {
      if (ctx.state.data.length) {
        return;
      }
      ctx.commit("setLoading", true);
      const resp = await getBanners();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
