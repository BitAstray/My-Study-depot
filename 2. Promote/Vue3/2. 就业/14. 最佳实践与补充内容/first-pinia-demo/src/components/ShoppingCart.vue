<!--
 * @Author: Astray
 * @Date: 2023-09-27 21:31:49
-->
<template>
  <div class="container">
    <table>
      <thead>
        <th>商品名</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in carData" :key="index">
          <td class="name">
            <img :src="item.image" alt="" class="img" />
            {{ item.name }}
          </td>
          <td>{{ "￥" + (+item.price).toFixed(2) }}</td>
          <td>
            <button @click="decrement(index)">-</button>
            {{ item.count }}
            <button @click="increment(index)">+</button>
          </td>
          <td>
            {{ "￥" + (+item.price * item.count).toFixed(2) }}
          </td>
          <td>
            <button @click="deleteShop(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p class="totalPrice" v-if="carData.length !== 0">
      总价：{{ totalPrice }} 元
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCartStore } from "../store/useCartStore";
export default {
  computed: {
    ...mapState(useCartStore, ["carData", "totalPrice"]),
  },
  methods: {
    ...mapActions(useCartStore, ["increment", "decrement", "deleteShop"]),
  },
};
</script>

<style scoped>
.container {
  width: 900px;
  margin: 20px auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.img {
  width: 80px;
  vertical-align: middle;
}
tr {
  /* outline: 1px solid; */
  border-bottom: 1px solid #ccc;
  height: 100px;
  line-height: 100px;
}
td {
  line-height: 80px;
  /* text-align: center; */
  padding: 0 5px;
}
td:not(:first-child) {
  text-align: center;
}

.td {
  width: 10%;
}
.totalPrice {
  text-align: right;
  font-size: 18px;
  font-weight: 300;
}
</style>
