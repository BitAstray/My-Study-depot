<template>
  <div class="container">
    <!-- 第一组 -->
    <p class="group-title">普通增加</p>
    <div class="btn-group">
      <button class="btn" @click="num--">-</button>
      <!-- 这里我们希望这个数据来源于状态仓库 -->
      <div class="num">{{ num }}</div>
      <button class="btn" @click="increment">+</button>
    </div>

    <!-- 第二组 -->
    <p class="group-title">Getters数据</p>
    <div class="btn-group">
      <button class="btn" @click="num--">-</button>
      <!-- 这里我们希望这个数据来源于状态仓库 -->
      <div class="num">{{ doubleCount }}</div>
      <button class="btn" @click="increment">+</button>
    </div>

    <!-- 第三组 -->
    <p class="group-title">异步的增加</p>
    <div class="btn-group">
      <button class="btn" @click="asyncDecrement">-</button>
      <!-- 这里我们希望这个数据来源于状态仓库 -->
      <div class="num">{{ num }}</div>
      <button class="btn" @click="asyncIncrement">+</button>
    </div>

    <!-- 第四组 -->
    <p class="group-title">store.$reset方法</p>
    <div class="btn-group">
      <button class="btn" @click="store.$reset">重置</button>
    </div>

    <!-- 第五组 -->
    <p class="group-title">store.$patch方法</p>
    <div class="btn-group">
      <input type="text" class="numInput" v-model="newNum" />
      <button class="btn" @click="setHandle">设置</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "../store/useCounterStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const newNum = ref("");

const store = useCounterStore();
// 从仓库解构数据
const { num, doubleCount } = storeToRefs(store);
// 从仓库解构方法
const { increment, asyncDecrement, asyncIncrement } = store;

const setHandle = function () {
  store.$patch({ num: ~~newNum.value });
  newNum.value = "";
};
</script>

<style scoped>
.container > .btn-group {
  /* outline: 1px solid red; */
  width: 280px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.num {
  font-size: 32px;
  font-weight: 300;
}
.btn {
  height: 30px;
  outline: none;
  font-size: 16px;
  font-weight: 100;
  cursor: pointer;
  padding: 0 10px;
}

.numInput {
  width: 200px;
  height: 30px;
  margin-right: 10px;
}

.group-title {
  text-align: center;
  margin-bottom: 0;
  font-weight: 200;
  font-size: 20px;
}
</style>
