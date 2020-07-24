import React, { useState } from "react";

import { connect } from "react-redux";
import CounterOutput from "../componet/ControlOutput";
import CounterControl from "../componet/CouterControl";
class Counter extends React.Component {
  state = {
    angka1: 0,
    angka2: 0,
  };

  handleForm = (e) => {
    const name = e.target.name;
    this.setState({
      ...this.state,
      [name]: e.target.value,
    });
    console.log(this.state.angka1);
  };
  render() {
    console.log(this.state.angka1);
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input type="number" name="angka1" onChange={this.handleForm} />
          <input type="number" name="angka2" onChange={this.handleForm} />

          <CounterControl
            label="+"
            clicked={() =>
              this.props.Tambah(this.state.angka1, this.state.angka2)
            }
          />
          <CounterControl
            label="-"
            clicked={() =>
              this.props.Kurang(this.state.angka1, this.state.angka2)
            }
          />
          <CounterControl
            label="*"
            clicked={() =>
              this.props.Kali(this.state.angka1, this.state.angka2)
            }
          />
          <CounterControl
            label="/"
            clicked={() =>
              this.props.Bagi(this.state.angka1, this.state.angka2)
            }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispact");
  return {
    Tambah: (angka1, angka2) =>
      dispatch({ type: "TAMBAH", angka1: angka1, angka2: angka2 }),
    Kurang: (angka1, angka2) =>
      dispatch({ type: "KURANG", angka1: angka1, angka2: angka2 }),
    Kali: (angka1, angka2) =>
      dispatch({ type: "KALI", angka1: angka1, angka2: angka2 }),
    Bagi: (angka1, angka2) =>
      dispatch({ type: "BAGI", angka1: angka1, angka2: angka2 }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
