/*
 * @Author: BitCreate
 * @Date: 2024-03-24 14:51:14
 */

import { Color, Mark } from "./enums";
import { Deck, JokerCard, NormalCard } from "./types";

// 创建一副扑克牌
export function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        color: c,
        mark: m,
        getString() {
          return this.color + this.mark;
        },
      } as NormalCard);
    }
  }
  let joker: JokerCard = {
    type: "big",
    getString() {
      return "JOKER";
    },
  };
  deck.push(joker);
  joker = {
    type: "small",
    getString() {
      return "joker";
    },
  };
  deck.push(joker);
  return deck;
}

// 输出一副扑克牌
export function printDeck(deck: Deck) {
  let deckStr = "";
  deck.forEach((card, i) => {
    deckStr += card.getString() + "\t";
    if (i % 4 === 3) {
      deckStr += "\n";
    }
  });
  console.log(deckStr);
}
