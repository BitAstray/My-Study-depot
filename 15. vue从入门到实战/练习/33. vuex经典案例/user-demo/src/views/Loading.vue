<template>
  <h1>正在恢复登录中</h1>
</template>

<script>
export default {
  created() {
    this.unWatch = this.$watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router
            .push(this.$route.query.returnUrl || "/home")
            .catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>

<style lang="less" scoped></style>
