/*
 * @Author: Astray
 * @Date: 2023-05-25 18:07:11
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-25 18:07:26
 * @FilePath: \Code\15. vue从入门到实战\练习\04. 组件\src\components\MyButton.js
 */

const template = `<button @click="count++">当前点击了{{count}}次</button>`;

export default {
  data() {
    return {
      count: 0,
    };
  },
  template,
};
