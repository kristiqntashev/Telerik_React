import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./style/style.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!!</h1>
      </div>
    );
  }
}

export default hot(App);
