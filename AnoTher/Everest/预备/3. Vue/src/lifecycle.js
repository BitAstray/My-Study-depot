export function mountComponent(vm, el) {
  const option = vm.$options;
  vm.$el = el; // 真实的dom元素
}

// Watcher 就是用来渲染的
// vm._render 通过解析render方法 渲染出虚拟dom _c _v _s
// vm._update 通过虚拟dom 创建真实的dom

// 渲染页面
let updateComponent = () => {
  vm._update(vm._render());
};
// 渲染watcher 每个组件都有一个watcher
new Watcher(vm, updateComponent, () => {}, true); // true表示他是一个渲染watcher
