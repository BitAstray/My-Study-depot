<!--
 * @Author: Astray
 * @Date: 2023-09-27 13:20:59
-->
<template>
  <div class="container">
    <div class="input-container">
      <p class="numInput">自己仓库的Getter数据：{{ doubleCounter }}</p>
      <button class="btn" @click="list.counter++">+1</button>
    </div>
    <div class="input-container">
      <p class="numInput">其他仓库的Getter数据：{{ otherCounter }}</p>
    </div>
    <!-- 添加新的待办事项 -->
    <div class="input-container">
      <input type="text" class="numInput" v-model="newItem" />
      <button class="btn" @click="addHandle">添加</button>
    </div>
    <!-- 待办事项列表 -->
    <div class="list">
      <div v-for="(it, index) in list.items" :key="index" class="item">
        <!-- 内容 -->
        <div
          :class="it.isCompleted ? 'del' : ''"
          @click="completeHandle(index)"
        >
          {{ it.text }}
        </div>
        <!-- 删除 -->
        <div class="close" @click="deleteHandle(index)">X</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useListStore } from "../store/useListStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const newItem = ref("");

const store = useListStore();

const { list, doubleCounter, otherCounter } = storeToRefs(store);

// 添加新的代办项目
const addHandle = () => {
  if (newItem.value) {
    // 添加
    store.addItem(newItem.value);
    newItem.value = "";
  } else {
    window.alert("请输入代办事项");
  }
};

// 删除代办项目
const deleteHandle = (index) => {
  store.deleteItem(index);
};

const completeHandle = (index) => {
  store.completeItem(index);
};
</script>

<style scoped>
.container {
  width: 300px;
  /* outline: 1px solid blue; */
  margin: 20px auto;
}
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid; */
}
.numInput {
  width: 75%;
  height: 30px;
}
.btn {
  width: 20%;
  cursor: pointer;
}
.list {
  margin-top: 20px;
}
.item {
  /* outline: 1px solid; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.close {
  width: 20px;
  height: 20px;
  /* border: 1px solid; */
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  border-radius: 4px;
  background-color: rgb(243, 83, 83);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.del {
  text-decoration: line-through;
}
</style>
