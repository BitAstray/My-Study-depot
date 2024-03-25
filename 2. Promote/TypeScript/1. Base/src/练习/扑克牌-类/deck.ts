import { Mark, Color } from "./enums";
import { Card, NormalCard, JokerCard } from "./types";

interface PublishResult {
  play1: Deck;
  play2: Deck;
  play3: Deck;
  dipai: Deck;
}

export class Deck {
  private _deck: Card[] = [];
  constructor(cards?: Card[]) {
    if (cards) {
      this._deck = cards;
      return;
    }
    this._init();
  }

  private _init() {
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
      for (const c of colors) {
        this._deck.push({
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
        return "JK";
      },
    };
    this._deck.push(joker);
    joker = {
      type: "small",
      getString() {
        return "jk";
      },
    };
    this._deck.push(joker);
  }

  print() {
    let deckStr = "";
    this._deck.forEach((card, i) => {
      deckStr += card.getString() + "\t";
      if (i % 13 === 12) {
        deckStr += "\n";
      }
    });
    console.log(deckStr);
  }

  // 洗牌
  shuffle() {
    for (let i = 0; i < this._deck.length; i++) {
      const targetIndex = this._getRandom(0, this._deck.length);
      const temp = this._deck[i];
      this._deck[i] = this._deck[targetIndex];
      this._deck[targetIndex] = temp;
    }
  }

  // 发牌 => 四个card数组 => 三个玩家，一个底牌
  publish(): PublishResult {
    let play1: Deck, play2: Deck, play3: Deck, dipai: Deck;
    play1 = this._takeCards(17);
    play2 = this._takeCards(17);
    play3 = this._takeCards(17);
    dipai = new Deck(this._deck);
    return { play1, play2, play3, dipai };
  }

  private _takeCards(n: number): Deck {
    const cards: Card[] = [];
    for (let i = 0; i < n; i++) {
      cards.push(this._deck.shift() as Card);
    }
    return new Deck(cards);
  }

  /**
   * @description: 无法取到最大值
   * @param {number} min
   * @param {number} max
   */
  private _getRandom(min: number, max: number) {
    const dec = max - min;
    return Math.floor(Math.random() * dec + min);
  }
}
