/*
 * @Author: BitCreate
 * @Date: 2024-03-25 13:43:45
 */
import { ChessType } from "../types/enums";
import { ChessComp } from "./ChessComp";
import "./BoardComp.css";

interface IProps {
  chesses: ChessType[];
  isGameOver?: boolean;
  onClick?: (index: number) => void;
}

const BoardComp: React.FC<IProps> = function (props) {
  const isGameOver = props.isGameOver!;

  const list = props.chesses.map((type, index) => {
    return (
      <ChessComp
        type={type}
        key={index}
        onClick={() => {
          if (isGameOver) return;
          props.onClick && props.onClick(index);
        }}
      />
    );
  });

  return <div className="board">{list}</div>;
};

BoardComp.defaultProps = {
  isGameOver: false,
};

export { BoardComp };
