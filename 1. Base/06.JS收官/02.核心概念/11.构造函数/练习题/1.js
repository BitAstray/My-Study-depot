/*
 * @Author: Astray bitcreate@qq.com
 * @Date: 2023-03-07 14:45:26
 * @LastEditors: Astray bitcreate@qq.com
 * @LastEditTime: 2023-03-07 16:12:56
 * @FilePath: \Code\JS收官\02.核心概念\11.构造函数\练习题\1.js
 */
/* 
利用构造函数创建一幅扑克牌
*/

/* 
Deck: 一副扑克牌
Poker： 一张扑克牌
*/

/**
 * @description: 创建一张扑克牌
 * @param {number} number 点数 1-1, ..., 11-j, 12-q, 13-k, 14-小王, 15-大王
 * @param {number} color 花色 1-黑桃, 2-红桃, 3-梅花, 4-方片
 */
function Poker(number, color) {
  this.number = number;
  this.color = color;
  this.print = function () {
    if (this.number === 14) {
      console.log("joker");
      return;
    }
    if (this.number === 15) {
      console.log("Joker");
      return;
    }
    //其他情况
    var colors = ["♠", "♥", "♣", "♦"];
    var color = colors[this.color - 1];
    var numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    var number = numbers[this.number - 1];
    console.log(color + number);
  };
}

/**
 * @description: 一副扑克牌
 */
function Deck() {
  this.pokers = [];
  for (var i = 1; i <= 13; i++) {
    for (var j = 1; j <= 4; j++) {
      this.pokers.push(new Poker(i, j));
    }
  }
  this.pokers.push(new Poker(14, 0));
  this.pokers.push(new Poker(15, 0));

  this.print = function () {
    for (var i = 0; i < this.pokers.length; i++) {
      this.pokers[i].print();
    }
  };
}

var deck = new Deck();
deck.print();
