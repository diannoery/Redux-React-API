import React from "react";
import "./App.css";
import Counter from "./container/Counter";
import Calculator from "./calculator/container/Counter";
import HOC from "./HOC/hoc";
import Index from "./crud-redux/navbar";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <HOC /> */}
        {/* <Calculator /> */}
        <Index />
      </div>
    );
  }
}

export default App;
