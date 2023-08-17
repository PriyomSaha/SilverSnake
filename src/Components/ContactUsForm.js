import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Notifications from "./Notifications";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";
import Countries from "./Countries";
import PhoneInput from "react-phone-input-2";

function ContactUsForm(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [sendingUpdate, setSendingUpdate] = useState(false);

  const form = useRef();

  const sendEmail = async (e) => {
    await setSendingUpdate(true);
    await emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          props.setShow(false);
          setShowSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setShowFail(true);
          props.setShow(false);
        }
      );
    await setSendingUpdate(false);
  };

  const [country, setCountry] = useState("IN");
  const [mobile, setMobile] = useState();

  return (
    <div>
      <Notifications
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        showFail={showFail}
        setShowFail={setShowFail}
      />
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className="text-center">
            Fill some basic details
          </Modal.Title>
        </Modal.Header>
        <Form ref={form} className="needs-validation">
          <Modal.Body>
            <Form.Group className="mb-3 was-validated">
              <Form.Label>Your Good Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full name"
                autoFocus
                name="user_name"
                required
              />
              <div className="invalid-feedback">
                Please enter your full name
              </div>
            </Form.Group>
            <Form.Group className="mb-3 was-validated">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@domain.com"
                name="user_email"
                id="cust_email"
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email-id
              </div>
            </Form.Group>
            <Countries country={country} setCountry={setCountry} />
            <Form.Group className="mb-3">
              <Form.Label>Enter Phone number</Form.Label>
              <PhoneInput
                placeholder="Enter phone number"
                country={country.toLowerCase()}
                value={mobile}
                onChange={setMobile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Domain of Excellence</Form.Label>
              <Form.Select name="domain">
                {props.service}
                <option
                  value="All"
                  selected={props.service === "All" ? true : false}
                >
                  All
                </option>
                <option
                  value="Software Development"
                  selected={
                    props.service === "Software Development" ? true : false
                  }
                >
                  Software Development
                </option>
                <option
                  value="Managed Services"
                  selected={props.service === "Managed Services" ? true : false}
                >
                  Managed Services
                </option>
                <option
                  value="Cloud Computing"
                  selected={props.service === "Cloud Computing" ? true : false}
                >
                  Cloud Computing
                </option>
                <option
                  value="Cybersecurity"
                  selected={props.service === "Cybersecurity" ? true : false}
                >
                  Cybersecurity
                </option>
                <option
                  value="AI and ML"
                  selected={props.service === "AI and ML" ? true : false}
                >
                  AI and ML
                </option>
                <option
                  value="Software Products"
                  selected={
                    props.service === "Software Products" ? true : false
                  }
                >
                  Software Products
                </option>
                <option
                  value="Staffing Services"
                  selected={
                    props.service === "Staffing Services" ? true : false
                  }
                >
                  Staffing Services
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter some details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="You can provide some additional details"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                props.setShow(false);
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                sendEmail();
              }}
              disabled={sendingUpdate}
            >
              {sendingUpdate && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Send Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default ContactUsForm;
