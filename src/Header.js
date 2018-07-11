import React, { Component } from "react";
import PropTypes from "prop-types"; //数据类型检测
import LifeCycle from "./Lifecycle";

export default class Header extends Component {
  constructor(props) {
    super(props);
    // this.age = this.props.age;
    this.state = {
      age: props.age,
      initVal: "val"
    };
  }
  addAge() {
    this.setState({
      age: this.state.age + 1
    });
    // console.log(this);
  }
  handleParent() {
    this.props.sayH(this.state.age);
  }
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      initVal: e.target.value
    });
  }
  render() {
    //console.log(this.props); //父子组件之间数据传递
    return (
      <div className="header">
        <div>name is {this.props.name}</div>
        {/* 写法一： <div onClick={this.addAge.bind(this)}>age is {this.age}</div>*/}
        <div
          onClick={() => {
            this.addAge();
          }}
        >
          age is {this.state.age}
        </div>
        <ul>
          {this.props.hobbies.map((h, i) => {
            return <li key={i}>{h}</li>;
          })}
        </ul>
        <div>{this.props.children}</div>
        <button className="btn" onClick={this.handleParent.bind(this)}>
          子组件按钮
        </button>
        <label>{this.state.initVal}</label>
        <input
          type="text"
          value={this.state.initVal}
          onChange={this.handleChange.bind(this)}
        />
        <LifeCycle age={this.state.age}>
          <div className="child2">111</div>
        </LifeCycle>
      </div>
    );
  }
}
Header.propTypes = {
  name: PropTypes.string //限制字符串
};
