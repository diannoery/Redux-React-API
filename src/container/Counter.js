import React from "react";

import { connect } from "react-redux";
import CounterOutput from "../componet/ControlOutput";
import CounterControl from "../componet/CouterControl";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT", value: 1 }),
    onDecrement: () => dispatch({ type: "DECREMENT", value: 1 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
