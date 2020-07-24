import React from "react";
//import { getMeeting, createMeeting } from "../../API/meetingApi/meetingApi";
import axios from "axios";
class CreateMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TempatMeeting: "",
      Client: "",
      Tanggal: "",
      Waktu: "",
      Update: true,
    };
  }

  handleForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const meetting = {
      TempatMeeting: this.state.TempatMeeting,
      Client: this.state.Client,
      Tanggal: this.state.Tanggal,
      Waktu: this.state.Waktu,
    };

    axios.post(`/meeting`, meetting).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    this.setState({
      TempatMeeting: "",
      Client: "",
      Tanggal: "",
      Waktu: "",
    });
    alert("berhasil tambah meeting");
    window.location.reload(false);
  };

  render() {
    let { idMeeting } = this.props;
    console.log(idMeeting);
    return (
      <div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <form
              class="text-center border border-light p-5"
              onSubmit={this.handleSubmit}
            >
              <p class="h4 mb-4">Create Meeting schedule</p>

              <input
                type="text"
                class="form-control mb-4"
                placeholder="Tempat Meeting"
                name="TempatMeeting"
                value={this.state.value}
                onChange={this.handleForm}
              />

              <input
                type="text"
                id="defaultLoginFormPassword"
                class="form-control mb-4"
                placeholder="Client Meeting"
                name="Client"
                value={this.state.value}
                onChange={this.handleForm}
              />
              <input
                type="date"
                id="defaultLoginFormPassword"
                class="form-control mb-4"
                placeholder="Tanggal Meeting"
                name="Tanggal"
                value={this.state.value}
                onChange={this.handleForm}
              />
              <input
                type="time"
                id="defaultLoginFormPassword"
                class="form-control mb-4"
                placeholder="Waktu Meeting"
                name="Waktu"
                value={this.state.value}
                onChange={this.handleForm}
              />

              <button class="btn btn-info btn-block my-4" type="submit">
                Create
              </button>
            </form>
          </div>
          {/* {this.state.Update ? (
            <div className="row d-flex justify-content-center">
              <form
                class="text-center border border-light p-5"
                onSubmit={this.handleSubmit}
              >
                <p class="h4 mb-4">Update Meeting schedule</p>

                <input
                  type="text"
                  class="form-control mb-4"
                  placeholder="Tempat Meeting"
                  name="TempatMeeting"
                  value={this.state.value}
                  onChange={this.handleForm}
                />

                <input
                  type="text"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Client Meeting"
                  name="Client"
                  value={this.state.value}
                  onChange={this.handleForm}
                />
                <input
                  type="date"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Tanggal Meeting"
                  name="Tanggal"
                  value={this.state.value}
                  onChange={this.handleForm}
                />
                <input
                  type="time"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Waktu Meeting"
                  name="Waktu"
                  value={this.state.value}
                  onChange={this.handleForm}
                />

                <button class="btn btn-info btn-block my-4" type="submit">
                  Update
                </button>
              </form>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
    );
  }
}

export default CreateMeeting;
