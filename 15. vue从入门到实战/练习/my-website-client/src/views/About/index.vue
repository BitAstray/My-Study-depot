<template>
  <div
    class="about-cantainer"
    v-loading="loading || !srcLoaded"
  >
    <iframe
      class="about-content"
      :src="src"
      v-if="src"
      @load="srcLoaded = true"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scoped>
.about-cantainer {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>
