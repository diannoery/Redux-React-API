import React, { Component } from "react";

export default function WithLocalStorage(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      localStorage.setItem("userName", this.props.username);
      localStorage.setItem("favoriteFood", this.props.favorite);
    }

    render() {
      return <WrappedComponent />;
    }
  };
}
