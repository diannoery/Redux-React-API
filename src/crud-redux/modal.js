import React from "react";
import { Button, Modal } from "react-bootstrap";

class ModalUpdate extends React.Component {
  render() {
    let {
      show,
      tempatMeeting,
      waktu,
      tanggal,
      idMeeting,
      client,
      close,
      handleForm,
      handleSubmit,
    } = this.props;
    return (
      <>
        <Modal show={show} onHide={close} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Update Meeting</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row d-flex justify-content-center">
              <form
                class="text-center border border-light p-5"
                onSubmit={handleSubmit}
              >
                <p class="h4 mb-4">Update Meeting schedule</p>

                <input
                  type="text"
                  class="form-control mb-4"
                  placeholder="Tempat Meeting"
                  name="TempatMeeting"
                  value={tempatMeeting}
                  onChange={handleForm}
                />

                <input
                  type="text"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Client Meeting"
                  name="Client"
                  value={client}
                  onChange={handleForm}
                />
                <input
                  type="date"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Tanggal Meeting"
                  name="Tanggal"
                  value={tanggal}
                  onChange={handleForm}
                />
                <input
                  type="time"
                  id="defaultLoginFormPassword"
                  class="form-control mb-4"
                  placeholder="Waktu Meeting"
                  name="Waktu"
                  value={waktu}
                  onChange={handleForm}
                />

                <button class="btn btn-info btn-block my-4" type="submit">
                  Update
                </button>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalUpdate;
