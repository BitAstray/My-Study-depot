/*
 * @Author: BitCreate
 * @Date: 2024-03-24 14:48:58
 */
import { Color, Mark } from "./enums";

export interface Card {
  getString: () => string;
}

export interface JokerCard extends Card {
  type: "big" | "small";
}

export interface NormalCard extends Card {
  color: Color;
  mark: Mark;
}
