/*
 * @Author: BitCreate
 * @Date: 2024-03-23 21:01:56
 */

import { Deck } from "./deck";

const deck = new Deck();
deck.shuffle();
console.log("---------- 洗牌之后 ----------");
deck.print();
const result = deck.publish();
console.log("---------- 发牌结果 ----------");
console.log("玩家1：");
result.play1.print();
console.log("玩家2：");
result.play2.print();
console.log("玩家3：");
result.play3.print();
console.log("底牌：");
result.dipai.print();
