import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lifecycle: "true"
    };
  }
  handleClick() {
    this.setState({
      lifecycle: "false"
    });
  }
  componentWillMount() {
    console.log("组件被挂载前调用 componentWillMount方法");
  }
  componentDidMount() {
    console.log("组件已经被挂载后调用 componentDidMount方法,在render之后");
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(
      "componentWillReceiveProps方法在初始化render时不会被调用,仅在更新props调用。"
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //   可以在此处判断，是否调用render方法
    console.log(
      "返回一个布尔值，在组件接收新的props或者state时被调用。在初始或者使用forceUpdate时不会被调用"
    );
    console.log(nextProps, this.props);
    console.log(nextState, this.state);
    if (nextState.lifecycle === this.state.lifecycle) {
      return false; //此时不需要更新
    }
    return true; //return false;可以阻止更新。 return true；正常更新
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "组件即将被更新，调用componentWillUpdate方法，在render前。初始化不会被调用"
    );
  }
  componentDidUpdate() {
    console.log(
      "组件确认更新时调用 componentDidUpdate方法,初始化时不会被调用,在render之后"
    );
  }
  componentWillUnmount() {
    console.log("组件被卸载时调用 componentWillUnmount方法");
  }
  render() {
    console.log("进入render方法");
    return (
      <div onClick={this.handleClick.bind(this)}>{this.state.lifecycle}</div>
    );
  }
}
