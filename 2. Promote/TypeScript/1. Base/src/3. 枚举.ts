enum Gender {
  male = "男",
  female = "女",
}

let gender: Gender;
gender = Gender.male;

console.log(gender);

// 扩展知识： 枚举的位运算
enum Permission {
  Read = 1, // 0001
  Write = 2, // 0010
  Create = 4, // 0100
  Delete = 8, // 1000
  All = 15, // 1111
}
// 1. 如何组合权限
// 读写权限
// 使用位或运算符 两个都为0时结果为0 否则为1
/*
  0001
| 0010
-------
  0011
*/
let p: Permission = Permission.Read | Permission.Write;

// 2. 如何判断是否拥有某个权限
// 使用位与运算符 两个都为1时结果为1 否则为0
/*
  0011
& 0001
-------
  0001
*/
function hasPermission(target: Permission, per: Permission) {
  return (target & per) === per;
}
hasPermission(p, Permission.Read); // true

// 3. 如何删除某个权限
// 使用位异或运算符 不同为1 相同为0
/*
  0011
^ 0010
-------
  0001
*/
p = p ^ Permission.Write; // 删除写权限

export {};
