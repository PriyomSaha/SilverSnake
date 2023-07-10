import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function ContactUsShort() {
  return (
    <Container fluid className="contact-us-short rounded py-3">
      <Row>
        <Col className="align-self-start col-8">
          <div>Ready to get started?</div>
          <div> Talk to us today !!!</div>
        </Col>
        <Col className="align-self-end col-4">
          <Button className="text-nowrap float-end ">Get Stared</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsShort;
