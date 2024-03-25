/*
 * @Author: BitCreate
 * @Date: 2024-03-24 20:48:22
 */
import { Dictionary } from "./dictionary";

const dic = new Dictionary<string, number>();

dic.set("a", 1);
dic.set("b", 2);
dic.set("a", 11);

dic.forEach((key, val) => {
  console.log(`${key}: ${val}`);
});
