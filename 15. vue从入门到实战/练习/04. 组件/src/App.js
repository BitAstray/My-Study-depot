/*
 * @Author: Astray
 * @Date: 2023-05-25 18:01:16
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-05-25 18:09:53
 * @FilePath: \Code\15. vue从入门到实战\练习\04. 组件\src\App.js
 */
// Vue的根组件
import MyButton from "./components/MyButton.js";

const template = `
<div>
<h1>App组件</h1>
<MyButton />
</div>
`;

export default {
  components: {
    MyButton,
  },
  template,
};
