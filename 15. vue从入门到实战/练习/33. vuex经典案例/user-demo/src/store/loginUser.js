/*
 * @Author: Astray
 * @Date: 2023-06-14 15:36:09
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 17:49:24
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\store\loginUser.js
 */

import * as userApi from "@/api/user";
export default {
  namespaced: true,
  state: {
    loading: false,
    user: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    status(state) {
      if (state.loading) {
        return "loading";
      } else if (state.user) {
        return "login";
      } else {
        return "unlogin";
      }
    },
  },
  actions: {
    async login(ctx, payload) {
      ctx.commit("setLoading", true);
      const resp = await userApi.login(payload.loginId, payload.loginPwd);
      ctx.commit("setUser", resp);
      ctx.commit("setLoading", false);
      return resp;
    },
    async whoAmI(ctx) {
      ctx.commit("setLoading", true);
      const resp = await userApi.whoAmI();
      ctx.commit("setUser", resp);
      ctx.commit("setLoading", false);
    },
    async loginOut(ctx) {
      ctx.commit("setLoading", true);
      await userApi.loginOut();
      ctx.commit("setUser", null);
      ctx.commit("setLoading", false);
    },
  },
};
