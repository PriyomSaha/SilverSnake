import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ContactUsForm(props) {
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title className="text-center">
          Help us understand your need better
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@domain.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Domain of Excellence</Form.Label>
            <Form.Select>
              <option value="All"> All</option>
              <option value="1">Software Development</option>
              <option value="2">Managed Services</option>
              <option value="3">Cloud Computing</option>
              <option value="4">Cybersecurity</option>
              <option value="5">AI and ML</option>
              <option value="6">Software Products</option>
              <option value="7">Staffing Services</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter some details</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.setShow(false)}>
          Send Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactUsForm;
