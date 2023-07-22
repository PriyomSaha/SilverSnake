import React from "react";
import Toast from "react-bootstrap/Toast";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCloseCircle } from "react-icons/io";

function Notifications(props) {
  return (
    <div>
      <Toast
        show={props.showSuccess}
        onClose={() => props.setShowSuccess(false)}
        delay={5000}
        autohide
        style={{
          zIndex: 99999,
          top: "1vh",
          right: "1vh",
          background: "#238636",
          color: "whitesmoke",
        }}
        className="position-fixed"
      >
        <Toast.Header>
          <GrStatusGood className="rounded me-2" />
          <strong className="me-auto">Success</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>
          Thanks for reaching out to us!<br></br> We received your interest
          details.We will get back to you soon :)
        </Toast.Body>
      </Toast>
      <Toast
        show={props.showFail}
        onClose={() => props.setShowFail(false)}
        delay={5000}
        autohide
        style={{
          zIndex: 99999,
          top: "1vh",
          right: "1vh",
          background: "#d32f2f",
          color: "whitesmoke",
        }}
        className="position-fixed"
      >
        <Toast.Header>
          <IoIosCloseCircle className="rounded me-2" />
          <strong className="me-auto">Error</strong>
          <small>Just now</small>
        </Toast.Header>
        <Toast.Body>
          Ooops !! <br></br>
          There is some error. Please try again after sometime!! <br></br>
          You are important to us :(
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default Notifications;
