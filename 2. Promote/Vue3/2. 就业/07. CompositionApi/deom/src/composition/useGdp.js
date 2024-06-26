/*
 * @Author: Astray
 * @Date: 2023-09-24 20:28:30
 */

import { computed, ref, watch } from "vue";
import gasp from "gsap";
const colors = ["#334552", "#B34335", "#a2c3ac", "#6e9Fa5", "#c8846c"];
export default function useGdp(gdpRef, maxSize) {
  const maxValue = computed(() => {
    if (gdpRef.value.length) {
      return Math.max(...gdpRef.value.map((it) => it.value));
    }
    return 0;
  });

  const bars = ref([]);
  // 条形图的最新状态
  const barsTarget = computed(() => {
    return gdpRef.value.map((it, i) => ({
      ...it,
      color: colors[i % colors.length],
      size: (it.value / maxValue.value) * maxSize,
    }));
  });

  watch(
    barsTarget,
    () => {
      for (let i = 0; i < barsTarget.value.length; i++) {
        if (!bars.value[i]) {
          bars.value[i] = { ...barsTarget.value[i], size: 0, value: 0 };
        }
        //bars.value[i] 中的属性 逐步变化到 barsTarget.value[i]
        gasp.to(bars.value[i], {
          ...barsTarget.value[i],
          duration: 1,
        });
      }
    },
    {
      deep: true,
    }
  );

  return {
    bars,
  };
}
