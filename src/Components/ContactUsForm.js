import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Notifications from "./Notifications";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";
import Countries from "./Countries";
import PhoneInput from "react-phone-input-2";
import {
  useServiceStore,
  useShowContactUsFormStore,
} from "./States/ManageStates";

function ContactUsForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const [sendingUpdate, setSendingUpdate] = useState(false);

  const domain = useServiceStore((state) => state.service);
  const setDomain = useServiceStore((state) => state.setService);
  const setShow = useShowContactUsFormStore((state) => state.setIsOpen);
  const show = useShowContactUsFormStore((state) => state.isOpen);

  const form = useRef();

  const sendEmail = async (e) => {
    await setSendingUpdate(true);
    await emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        // form.current,
        {
          user_name: name,
          user_email: email,
          user_mobile: `+${mobile}`,
          domain: domain,
          message: message,
          country: country.split("-")[1],
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setShow();
          setShowSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setShowFail(true);
          setShow();
        }
      );
    await setSendingUpdate();
  };

  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [country, setCountry] = useState("IN-India");
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState();

  return (
    <div>
      <Notifications
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        showFail={showFail}
        setShowFail={setShowFail}
      />
      <Modal
        show={show}
        onHide={() => setShow()}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                country={country.split("-")[0].toLowerCase()}
                enableSearch={true}
                countryCodeEditable={false}
                value={mobile}
                onChange={setMobile}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Domain of Excellence</Form.Label>
              <Form.Select
                name="domain"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Managed Services">Managed Services</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="AI and ML">AI and ML</option>
                <option value="Software Products">Software Products</option>
                <option value="Staffing Services">Staffing Services</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Enter some details</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                placeholder="You can provide some additional details"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                setShow();
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
