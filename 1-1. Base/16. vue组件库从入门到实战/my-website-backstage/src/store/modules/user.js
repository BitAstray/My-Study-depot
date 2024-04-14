/*
 * @Author: Astray
 * @Date: 2023-06-16 15:41:29
 */
import { login, getInfo } from "@/api/user";
import { resetRouter } from "@/router";
import { removeToken } from "@/utils/auth.js";

const getDefaultState = () => {
  return {
    user: null, //存储登录后的用户信息
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
  };
};

const state = getDefaultState();

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((res) => {
          const { data } = res;
          if (data) {
            commit("SET_USER", data);
            resolve();
          } else {
            reject(res);
          }
        })
        .catch((err) => {
          if (err) {
            reject(err);
          }
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo()
        .then((res) => {
          if (typeof res === "string") {
            // 未登录或token过期
            res = JSON.parse(res);
            if (res.code === 401) {
              reject(res.msg);
            }
          } else {
            commit("SET_USER", res.data);
            resolve();
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // user logout
  logout({ dispatch }) {
    resetRouter();
    return dispatch("resetToken");
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken();
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
