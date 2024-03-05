/*
 * @Author: BitCreate
 * @Date: 2024-03-04 21:53:16
 */
//* 1) promise 有三个状态 成功resolve 失败reject 等待pending
//* 2) 用户自己确定失败和成功原因 成功和失败也是用户定义的
//* 3) promise 默认执行器是立即执行
//* 4) promise的实例都拥有一个then方法,then方法中有两个参数,一个是成功的回调,一个是失败的回调
//* 5) 如果执行函数时发生异常也会执行失败逻辑
//* 6) promise状态一旦成功就不能失败，一旦失败就不能成功

//* promise是一个类

console.log("----------   This is using My Promise!   ----------");

const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";
const PENDING = "PENDING";

// resolvePromise 所有的promise都要坚持 bluebird q es6-promise
const resolvePromise = (promise2, x, resolve, reject) => {
  //* 1. 循环引用 自己等待自己完成 错误的实现
  if (promise2 === x) {
    // 用一个类型错误结束promise
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 后续的条件要严格判断 保证代码能和别的库一起使用
  let called; // 表示是否调用过成功或者失败
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    // 继续判断
    try {
      let then = x.then;
      if (typeof then === "function") {
        // 只能认为是一个promise了
        then.call(
          // 根据promise的状态决定是成功还是失败
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject); //递归解析的过程
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      //防止失败了再去成功
      if (called) return;
      called = true;
      reject(error); // 取then出错
    }
  } else {
    resolve(x);
  }
};

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallback = []; //存放成功回调
    this.onRejectedCallbacks = []; //存放失败回调
    let resolve = value => {
      // 成功
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.onFulfilledCallback.forEach(fn => fn());
      }
    };
    let reject = reason => {
      // 失败
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    try {
      executor(resolve, reject); // 立即执行
    } catch (e) {
      // 错误处理 需要直接走错误逻辑
      console.log(e);
      reject(e);
    }
  }
  //* 1. promise 调用then方法时可能当前的promise并没有成功或者失败
  //* 2. 发布订阅模式 如果当前状态是pending时 我们需要将成功的回调和失败的回调存放起来 等状态确定后再执行
  then(onFulfilled, onRejected) {
    //* 1.promise 成功和失败的回调的返回值 可以传递到外层的下一个then
    //* 2. 如果返回的是普通值的话(下一次的成功)，可能还有promise的情况(采用promise的状态走成功还是失败)，出错的情况(下一次的失败)
    //* 3. 错误处理 如果离自己最近的then没有错误处理(没有写错误函数) 会向下找
    //* 4. 每次执行完promise.then方法返回后返回的都是一个新的promise (promise一旦成功就不能失败，一旦失败就不能成功)

    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : err => {
            throw err;
          };

    let promise2 = new Promise((resolve, reject) => {
      // 为了实现链式调用
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        this.onFulfilledCallback.push(() => {
          // todo...
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          // todo...
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}

//? promise的延迟对象
Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};

// npm install promises-aplus-tests -g
// promises-aplus-tests promise.js

module.exports = Promise;
