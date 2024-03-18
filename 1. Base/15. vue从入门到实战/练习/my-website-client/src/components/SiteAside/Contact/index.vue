<!--
 * @Author: Astray
 * @Date: 2023-05-27 20:16:38
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-06-14 22:10:56
 * @FilePath: \Code\15. vue从入门到实战\练习\my-website\src\components\SiteAside\Contact\index.vue
-->
<template>
  <ul class="contact-container">
    <li>
      <a
        :href="data.github"
        target="_blank"
      >
        <Icon type="github" />
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <Icon type="mail" />
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
        <Icon type="qq" />
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.qqQrCode"
          alt=""
        />
      </div>
    </li>
    <li>
      <a class="weixin">
        <Icon type="weixin" />
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img
          :src="data.weixinQrCode"
          alt=""
        />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  @itemHeight: 30px;
  width: 100%;
  color: @gray;
  font-size: 14px;
  padding: 12px;
  li {
    position: relative;
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 10px 0;
    &:hover .pop {
      transform: scaleY(1);
    }
  }
  span {
    margin-left: 8px;
  }
  a {
    cursor: pointer;
  }
  .pop {
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.25s;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #fff;
    img {
      display: block;
      width: 150px;
      height: 150px;
    }
    &::after {
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
      content: "";
      border: 10px solid transparent;
      border-top: 10px solid #fff;
    }
  }
}

.icon-container {
  font-size: 26px;
  vertical-align: -5px;
}

.weixin {
  .icon-container {
    font-size: 30px;
    text-indent: -3px;
  }
}
</style>
