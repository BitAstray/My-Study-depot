import React from "react";
import { GameComp } from "./components/GameComp";

interface IState {
  num: number;
}

class App extends React.Component<{}, IState> {
  state = {
    num: 0,
  };

  render() {
    return (
      <div>
        <GameComp />
      </div>
    );
  }
}

export default App;
