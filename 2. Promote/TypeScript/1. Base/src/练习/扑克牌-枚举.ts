/*
 * @Author: BitCreate
 * @Date: 2024-03-23 21:01:56
 */
// 一张牌
type NormalCard = {
  color: Color;
  mark: Mark;
};
enum Color {
  heart = "♥️",
  spade = "♠️",
  diamond = "♦️",
  club = "♣️",
}

enum Mark {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  J = "J",
  Q = "Q",
  K = "K",
}

type Deck = NormalCard[]; // 一副牌

// 创建一副扑克牌
function createDeck(): Deck {
  const deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({ color: c, mark: m });
    }
  }
  return deck;
}

// 输出一副扑克牌
function printDeck(deck: Deck) {
  let deckStr = "";
  deck.forEach((card, i) => {
    let str = card.color + card.mark;
    deckStr += str + "\t";
    if (i % 4 === 3) {
      deckStr += "\n";
    }
  });
  console.log(deckStr);
}

const deck = createDeck();
printDeck(deck);

export {};
