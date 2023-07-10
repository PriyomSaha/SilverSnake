import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import contactUs from "../Components/Images/contact_us.svg";
// import Form from "react-bootstrap/Form";

function ContactUs(props) {
  return (
    <Container
      fluid="lg"
      className="w-100 base-container d-flex align-items-center"
    >
      <Row className="g-5">
        <Col md={7} className="px-4 fs-5">
          <br></br>
          <div className="py-3">
            <span className="fs-3 fw-bold" style={{ color: "#233d63" }}>
              Thank you for your interest in <br />
              SilverSnake Technologies LLP!
            </span>
            ,
            <br /> Whether you're looking to optimize your existing IT
            infrastructure, implement new technologies, enhance cybersecurity
            measures, or leverage cloud solutions, we have the expertise to
            address your unique business needs.
          </div>
          <div>
            Please reach out to us at your convenience to discuss your business
            needs further. We look forward to the opportunity to work with you
            and contribute to your digital success.
          </div>
          <div className="mb-3">Please fill some basic details.</div>
          <Button onClick={() => props.setShow(!props.show)}>Fill Form</Button>
        </Col>
        <Col
          md={5}
          className="d-flex align-middle justify-content-center clearfix"
        >
          <Image src={contactUs} className="w-100 h-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
