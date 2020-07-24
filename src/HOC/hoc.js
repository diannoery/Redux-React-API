import React, { Component } from "react";
import SubmitButton from "./button";

class HocLocalStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      favorite: "",
      result: "",
    };
  }

  onChange = (e) => {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmitButton = () => {
    this.setState({
      ...this.state,
      result: (
        <SubmitButton
          username={this.state.username}
          favorite={this.state.favorite}
        />
      ),
    });
  };

  handleClearButton = () => {
    localStorage.clear();
    this.setState({
      ...this.state,
      username: "",
      favorite: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="favorite"
          value={this.state.favorite}
          onChange={this.onChange}
        />
        <button onClick={this.handleSubmitButton}>Submit</button>
        <button onClick={this.handleClearButton}>Clear</button>
        {this.state.result}
      </div>
    );
  }
}

export default HocLocalStorage;
