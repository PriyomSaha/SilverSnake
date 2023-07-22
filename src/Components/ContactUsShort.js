import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function ContactUsShort() {
  return (
    <Container fluid className="contact-us-short rounded py-3">
      <Row>
        <Col sm={6} className="align-self-start">
          <div>Ready to get started?</div>
          <div> Talk to us today !!!</div>
        </Col>
        <Col sm={6} className="align-self-end mt-2 ">
          <Button className="text-nowrap float-end ">Get Stared</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsShort;
