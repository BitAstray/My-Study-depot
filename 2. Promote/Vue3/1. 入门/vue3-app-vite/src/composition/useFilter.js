import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../Util/todoStorage";

const validHash = ["all", "active", "completed"];

export default function useFilter(todoRef) {
  const visibilityRef = ref("all");

  const onhashchange = () => {
    const hash = location.hash.replace(/#\/?/, "");
    if (validHash.includes(hash)) {
      visibilityRef.value = hash;
    } else {
      location.hash = "";
      visibilityRef.value = "all";
    }
  };

  // 1.组件挂载完成的生命周期函数
  onMounted(() => {
    window.addEventListener("hashchange", onhashchange);
  });
  // 2.组件销毁后的生命周期函数
  onUnmounted(() => {});
  window.removeEventListener("hashchange", onhashchange);

  const filteredTodosRef = computed(() => {
    return filter(todoRef.value, visibilityRef.value);
  });

  const remainingTodosRef = computed(
    () => filter(todoRef.value, "active").length
  );

  const completedTodosRef = computed(
    () => filter(todoRef.value, "completed").length
  );

  return {
    completedTodosRef,
    remainingTodosRef,
    visibilityRef,
    filteredTodosRef,
  };
}
