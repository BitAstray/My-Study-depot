import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";
//导出指定的配置对象
export default function (el, bingding) {
  // 根据 bingding.value 的值,决定创建或删除img元素
  const curImg = getLoadingImage(el);
  if (bingding.value) {
    if (!curImg) {
      const img = createLoadingImg();
      el.appendChild(img);
    }
  } else {
    if (curImg) {
      curImg.remove();
    }
  }
}

//得到el中是否存在loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}
