<!--
 * @Author: Astray
 * @Date: 2023-09-22 19:13:03
-->
<template>
  <div class="container">
    <div class="list">
      <strong>编辑:</strong>
      <div class="list">
        <CheckEditor
          v-for="item in prodects"
          :key="item.id"
          v-model="item.sell"
          v-model:title.trim="item.title"
        />
      </div>
    </div>
    <div class="list">
      <strong>销售中:</strong>
      <div>
        <template v-for="(item, index) in sells" :key="item.id">
          <span>{{ index + 1 + ". " }}</span>
          <strong>{{ item.title }}</strong>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import CheckEditor from "./components/CheckEditor.vue";
import { ref, computed } from "vue";
const defaultSells = [
  {
    id: 1,
    sell: true,
    title: "iphone15",
  },
  { id: 2, sell: false, title: "xiaomi" },
  { id: 3, sell: true, title: "huawei" },
  { id: 4, sell: true, title: "oppo" },
];

export default {
  components: {
    CheckEditor,
  },

  setup() {
    const prodectsRef = ref(defaultSells);

    const sellsRef = computed(() =>
      prodectsRef.value.filter((item) => item.sell)
    );
    console.log(sellsRef.value);
    return {
      sells: sellsRef,
      prodects: prodectsRef,
    };
  },
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  width: 1000px;
  margin: 50px auto;
}
.list {
  display: flex;
  margin: 1em 0;
  align-items: center;
}
strong {
  margin-right: 1em;
}
</style>
