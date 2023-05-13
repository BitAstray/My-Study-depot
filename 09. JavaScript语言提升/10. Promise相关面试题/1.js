const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
});

promise.then(() => {
  console.log(3); //进入微队列
});

console.log(4);

/* 
  1
  2
  4
  3
*/
