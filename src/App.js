import React from "react";
import "./App.css";
import Game from "./game";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.game = new Game();
  }

  componentDidMount() {
    setInterval(() => {
      this.game.update();
      this.setState({});
    }, 100);
  }

  update() {
    this.game.update();
  }

  render() {
    return (
      <div className="App">
        Your CPS: {this.game.lastClickRate}
        <br></br>
        <button style={{ marginTop: 25 }} onClick={this.game.onClick}>
          CLICK
        </button>
      </div>
    );
  }
}

export default App;
