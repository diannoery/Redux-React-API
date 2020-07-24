import React from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import CreatePage from "./create";
import ModalUpdate from "./modal";
import Swal from "sweetalert2";
import { connect } from "react-redux";

class MeetingList extends React.Component {
  state = {
    //meeting: [],
    id: "",
    show: false,
    delete: false,
    TempatMeeting: "",
    Client: "",
    Tanggal: "",
    Waktu: "",
  };

  componentDidMount() {
    axios.get(`/meeting`).then((res) => {
      const meeting = res.data.Results;
      this.props.GetMeeting(meeting);
      //this.setState({ meeting: meeting });
      //console.log(meeting);
    });
  }

  handleModal = (meetingList) => {
    console.log(meetingList);
    this.setState({
      show: true,
      id: meetingList.id,
      TempatMeeting: meetingList.TempatMeeting,
      Client: meetingList.Client,
      Tanggal: meetingList.Tanggal,
      Waktu: meetingList.Waktu,
    });
  };
  handleModalDelete = (meetingList) => {
    this.setState({
      delete: true,
      id: meetingList.id,
    });
  };
  handleDelete = () => {
    axios.delete(`/meeting/${this.state.id}`).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    this.setState({
      id: "",
      TempatMeeting: "",
      Client: "",
      Tanggal: "",
      Waktu: "",
      delete: false,
    });
    Swal.fire("berhasil Hapus meeting", window.location.reload(false));
  };
  handleClose = () => {
    this.setState({
      show: false,
      delete: false,
    });
  };

  handleFormUpdate = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  handleSubmitUpdate = (event) => {
    event.preventDefault();

    const meetting = {
      TempatMeeting: this.state.TempatMeeting,
      Client: this.state.Client,
      Tanggal: this.state.Tanggal,
      Waktu: this.state.Waktu,
    };

    axios.put(`/meeting/${this.state.id}`, meetting).then((res) => {
      console.log(res);
      console.log(res.data);
    });
    this.setState({
      id: "",
      TempatMeeting: "",
      Client: "",
      Tanggal: "",
      Waktu: "",
    });

    Swal.fire("berhasil Update meeting", window.location.reload(false));
  };
  render() {
    console.log(this.state.meeting);
    const listMeetting = this.props.meeting.map((meetingList, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{meetingList.TempatMeeting}</td>
        <td>{meetingList.Client}</td>
        <td>{meetingList.Tanggal}</td>
        <td>{meetingList.Waktu}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => this.handleModal(meetingList)}
          >
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </Button>
          <Button
            variant="danger"
            onClick={() => this.handleModalDelete(meetingList)}
            style={{ marginLeft: 10 }}
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </td>
      </tr>
    ));
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h1>Fetch API</h1>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">NO</th>
                    <th scope="col">Tempat Meetting</th>
                    <th scope="col">Client</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Waktu</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>{listMeetting}</tbody>
              </table>
            </div>
            <div className="col-md-4">
              {" "}
              <CreatePage />
              {/* <ModalExample /> */}
            </div>
          </div>
        </div>

        <ModalUpdate
          show={this.state.show}
          close={this.handleClose}
          delete={this.state.delete}
          tempatMeeting={this.state.TempatMeeting}
          tanggal={this.state.Tanggal}
          client={this.state.Client}
          waktu={this.state.Waktu}
          idMeeting={this.state.id}
          handleForm={this.handleFormUpdate}
          handleSubmit={this.handleSubmitUpdate}
        />
        {/* MOdal Delete */}
        <Modal
          show={this.state.delete}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Data Meeting</Modal.Title>
          </Modal.Header>
          <Modal.Body>Anda Yakin Hapus Data Meeting?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleDelete}>
              Delete Data
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { meeting: state.meeting };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispact");
  return {
    GetMeeting: (data) => dispatch({ type: "GETMEETING", data: data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingList);
