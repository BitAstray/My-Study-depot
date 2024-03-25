/*
 * @Author: BitCreate
 * @Date: 2024-03-25 14:06:02
 */
import React from "react";
import { ChessType, GameStatus } from "../types/enums";
import { BoardComp } from "./BoardComp";
import { GameStatusComp } from "./GameStatusComp";

interface IState {
  chesses: ChessType[];
  gameStatus: GameStatus;
  nextChess: ChessType.red | ChessType.black;
}

export class GameComp extends React.Component<{}, IState> {
  state: IState = {
    chesses: [],
    gameStatus: GameStatus.gaming,
    nextChess: ChessType.black,
  };

  componentDidMount() {
    this.init();
  }

  /**
   * 初始化数据
   */
  init() {
    this.setState({
      chesses: Array(9).fill(ChessType.none),
      gameStatus: GameStatus.gaming,
      nextChess: ChessType.black,
    });
  }

  /**
   * 处理棋子的点击事件
   * @param index
   */
  handleChessClick(index: number) {
    const chesses = this.state.chesses.slice();
    if (chesses[index] !== ChessType.none || this.state.gameStatus !== GameStatus.gaming) {
      return;
    }

    chesses[index] = this.state.nextChess;
    this.setState({
      chesses,
      nextChess: this.state.nextChess === ChessType.red ? ChessType.black : ChessType.red,
    });

    this.judgeGame(chesses, index);
  }

  /**
   * 判断游戏是否结束
   * @param chesses
   * @param index
   */
  judgeGame(chesses: ChessType[], index: number) {
    // 1. 判断是否有一方获胜
    const horMin = Math.floor(index / 3) * 3;
    const verMin = index % 3;
    if (
      (chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) ||
      (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) ||
      (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none) ||
      (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
    ) {
      this.setState({
        gameStatus: chesses[index] === ChessType.red ? GameStatus.redWin : GameStatus.blackWin,
      });
      return;
    }
    // 2. 判断是否平局
    if (!chesses.includes(ChessType.none)) {
      this.setState({
        gameStatus: GameStatus.equal,
      });
    }
    // 3. 游戏正在进行
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>井字棋游戏</h1>
        <GameStatusComp status={this.state.gameStatus} next={this.state.nextChess} />
        <BoardComp
          chesses={this.state.chesses}
          isGameOver={this.state.gameStatus !== GameStatus.gaming}
          onClick={(i) => this.handleChessClick(i)}
        />
        <button
          onClick={() => {
            this.init();
          }}
        >
          重新开始
        </button>
      </div>
    );
  }
}
