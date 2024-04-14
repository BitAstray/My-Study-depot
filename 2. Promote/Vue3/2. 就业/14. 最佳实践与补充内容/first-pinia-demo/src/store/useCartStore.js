/*
 * @Author: Astray
 * @Date: 2023-09-27 21:38:09
 */
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      carData: [
        {
          _id: 0,
          name: "皇帝柑10斤橘子新鲜当季水果大果贡柑橘应季蜜橘蜜桔包邮桔子",
          price: "35",
          image: "goods01.jpg",
          count: 3,
        },
        {
          _id: 1,
          name: "【大果】丹东99草莓红颜新鲜奶油牛奶东港大草莓新鲜水果包邮",
          price: "78",
          image: "goods02.jpg",
          count: 5,
        },
        {
          _id: 2,
          name: "精选苹果水果新鲜10斤包邮当季陕西延安水晶红富士净9整箱批发大",
          price: "22",
          image: "goods03.jpg",
          count: 2,
        },
        {
          _id: 3,
          name: "泰国进口金枕头榴莲3-4斤新鲜水果批发包邮巴掌榴莲带壳当季特产",
          price: "76",
          image: "goods04.jpg",
          count: 1,
        },
        {
          _id: 4,
          name: "现摘羊角蜜甜瓜6斤新鲜当季水果小香瓜脆瓜整箱5包邮应季羊角密",
          price: "39",
          image: "goods05.jpg",
          count: 6,
        },
      ],
    };
  },
  getters: {
    totalPrice: ({ carData }) => {
      return carData.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },

  actions: {
    increment(index) {
      this.carData[index].count++;
    },

    decrement(index) {
      this.carData[index].count--;
    },
    deleteShop(index) {
      this.carData.splice(index, 1);
    },
  },
});
