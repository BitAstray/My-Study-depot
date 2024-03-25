// function take<T>(arr: Array<T>, n: number) {
//   if (n >= arr.length) {
//     return arr;
//   }
//   const newArr = [];
//   for (let i = 0; i < n; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// take(["a", "b", "c"], 2); // ['a', 'b']

// type callback<T> = (n: T, i: number) => boolean;
interface callback<T> {
  (n: T, i: number): boolean;
}

export class ArrayHelper<T> {
  arr: T[];
  constructor(arr: T[]) {
    this.arr = arr;
  }
  take(n: number) {
    if (n >= this.arr.length) {
      return this.arr;
    }
    const newArr = [];
    for (let i = 0; i < n; i++) {
      newArr.push(this.arr[i]);
    }
    return newArr;
  }
  shuffle() {
    return this.arr.sort(() => Math.random() - 0.5);
  }
}

// // 泛型约束
// interface hasNameProperty {
//   name: string;
// }

// // 对象name属性单词首字母大写
// function nameToUpperCase<T extends hasNameProperty>(obj: T): T {
//   obj.name = obj.name
//     .split(" ")
//     .map((s) => s[0].toUpperCase() + s.slice(1))
//     .join(" ");
//   return obj;
// }

// const o = {
//   name: "jack",
//   age: 18,
// };

// const newO = nameToUpperCase(o);

// 多泛型
// 将两个数组进行混合
function mixinArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
    result.push(arr2[i]);
  }
  return result;
}

console.log(mixinArray([1, 2, 3], ["a", "b", "c"]));
