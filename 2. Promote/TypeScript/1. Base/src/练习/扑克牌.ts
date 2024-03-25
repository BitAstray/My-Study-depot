/*
 * @Author: BitCreate
 * @Date: 2024-03-23 21:01:56
 */
// 一张牌
type NormalCard = {
  color: Color;
  mark: number;
};
type Color = "♥️" | "♠️" | "♦️" | "♣️";

type Deck = NormalCard[]; // 一副牌

// 创建一副扑克牌
function createDeck(): Deck {
  const deck: Deck = [];
  for (let i = 1; i <= 13; i++) {
    deck.push(
      { color: "♥️", mark: i },
      { color: "♠️", mark: i },
      { color: "♦️", mark: i },
      { color: "♣️", mark: i }
    );
  }
  return deck;
}

// 输出一副扑克牌
function printDeck(deck: Deck) {
  let deckStr = "";
  deck.forEach((card, i) => {
    let str = card.color;
    if (card.mark <= 10) {
      str += card.mark;
    } else {
      switch (card.mark) {
        case 11:
          str += "J";
          break;
        case 12:
          str += "Q";
          break;
        case 13:
          str += "K";
          break;
        case 14:
          str += "A";
          break;
      }
    }
    deckStr += str + "\t";
    if (i % 13 === 12) {
      deckStr += "\n";
    }
  });
  console.log(deckStr);
}

const deck = createDeck();
printDeck(deck);

export {};
