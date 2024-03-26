/*
 * @Author: BitCreate
 * @Date: 2024-03-25 15:34:30
 */

import { mapState, mapMutations } from "vuex";

export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        checkedIsLogin() {
          return new Promise((resolve) => {
            if (this.userInfo) {
              resolve();
            } else {
              uni.navigateTo({ url: "/pages/userInfo/login/login" });
            }
          });
        },
        ...mapMutations(["updateUserInfo"]),
      },
      computed: {
        ...mapState(["userInfo"]),
      },
    });
  },
};
