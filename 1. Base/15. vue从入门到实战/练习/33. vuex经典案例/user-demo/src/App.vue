<!--
 * @Author: Astray
 * @Date: 2023-05-24 17:05:03
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-12 21:39:18
 * @FilePath: \Code\15. vue从入门到实战\练习\33. vuex经典案例\user-demo\src\App.vue
-->
<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/news">News</router-link>
      |
      <user-name />
    </div>
    <router-view />
  </div>
</template>

<script>
import UserName from "./component/UserName";
export default {
  components: {
    UserName,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav .ml-5 {
  margin-left: 5px;
}
</style>
