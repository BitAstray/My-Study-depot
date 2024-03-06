/*
 * @Author: BitCreate
 * @Date: 2024-03-06 16:32:38
 */
class Watcher {
  constructor(vm, exprOrFn, callback, options) {
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    this.callback = callback;
    this.options = options;

    this.getter = exprOrFn; // 将内部传递过来的函数 放到getter属性上
    this.get(); // 调用get方法会让渲染watcher执行
  }
  get() {
    this.getter();
  }
  update() {
    this.get();
  }
}

export default Watcher;
