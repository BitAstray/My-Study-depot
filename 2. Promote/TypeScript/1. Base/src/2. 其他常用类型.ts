/*
 * @Author: BitCreate
 * @Date: 2024-03-23 16:21:40
 */
let str: string | null; // 字符串或null
function noReturn(): void {} // 无返回值
function neverReturn(): never {
  throw new Error("error");
} // 永远不会返回值
let a: "A"; // 字面量类型
let arr1: [string, number]; // 元组
let any: any; // 任意类型

// 类型别名
type User = {
  name: string;
  age: number;
};

// 函数重载
function reverse(x: number, y: number): number;
function reverse(x: string, y: string): string;
function reverse(x: number | string, y: number | string): number | string {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return x.toString() + y.toString();
  }
}
// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}

export {};
