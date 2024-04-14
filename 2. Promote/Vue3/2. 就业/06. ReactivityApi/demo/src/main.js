import { watch, reactive, ref } from "vue";

const state = reactive({ a: 1, b: 2 });
let count = ref(0);

watch(
  () => state.a,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  },
  {
    immediate: true,
  }
);

state.a++;
