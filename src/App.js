import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./Header";
import "./App.css";

class App extends Component {
  sayHellow(val) {
    console.log("父组件say方法" + val);
  }
  render() {
    const user = {
      name: "111",
      age: 26,
      hobbies: ["s", "s1", "s2"]
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header
          name={user.name}
          hobbies={user.hobbies}
          age={user.age}
          sayH={this.sayHellow}
        >
          <div className="child">is a children</div>
        </Header>
      </div>
    );
  }
}

export default App;
