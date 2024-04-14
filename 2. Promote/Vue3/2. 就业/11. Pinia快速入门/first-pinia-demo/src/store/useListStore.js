import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useCounterStore } from "./useCounterStore";

export const useListStore = defineStore("list", () => {
  // 组合式风格

  const counterStore = useCounterStore();

  const list = reactive({
    items: [
      {
        text: "学习 Pinia",
        isCompleted: true,
      },
      {
        text: "打羽毛球",
        isCompleted: false,
      },
      {
        text: "玩游戏",
        isCompleted: true,
      },
    ],
    counter: 100,
  });

  const doubleCounter = computed(() => list.counter * 2);
  const otherCounter = computed(() => counterStore.doubleCount * 3);

  const addItem = (newItem) => {
    list.items.push({
      text: newItem,
      isCompleted: false,
    });
  };

  const deleteItem = (index) => {
    list.items.splice(index, 1);
  };

  const completeItem = (index) => {
    list.items[index].isCompleted = !list.items[index].isCompleted;
  };

  return {
    list,
    addItem,
    deleteItem,
    completeItem,
    doubleCounter,
    otherCounter,
  };
});
