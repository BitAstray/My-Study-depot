// 仓库
import { defineStore } from "pinia";

// 第二个参数支持两种风格 options api  和 composition api
export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      num: 0,
    };
  },
  getters: {
    doubleCount: (state) => {
      return state.num * 2;
    },
  },
  actions: {
    //同步方法
    increment() {
      this.num++;
    },

    decrement() {
      this.num--;
    },

    // 异步方法
    async asyncIncrement() {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      this.increment();
    },

    async asyncDecrement() {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      this.decrement();
    },
  },
});
