<!--
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 18:37:57
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\component\UserName.vue
-->
<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>

    <template v-if="status === 'login'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a href="" @click.prevent="handleLoginOut">退出</a>
    </template>

    <router-link to="/login" v-else exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]),
    ...mapState("loginUser", ["user"]),
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
