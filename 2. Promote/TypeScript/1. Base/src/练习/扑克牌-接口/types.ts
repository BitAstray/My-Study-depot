/*
 * @Author: BitCreate
 * @Date: 2024-03-24 14:48:58
 */
import { Color, Mark } from "./enums";
// 一张牌
export type NormalCard = {
  color: Color;
  mark: Mark;
};

export type Deck = NormalCard[]; // 一副牌
