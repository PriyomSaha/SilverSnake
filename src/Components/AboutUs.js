import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
// import as from "../Components/Images/AS.gif";
import as from "../Components/Images/AS.svg";

function AboutUs() {
  return (
    <Container
      fluid="lg"
      className="w-100 base-container d-flex align-items-center"
    >
      <Row className="g-5">
        <Col md={7} className="px-4 fs-5">
          <br></br>
          <div className="py-3">
            <span>At &nbsp;</span>
            <span className="fs-3 fw-bold" style={{ color: "#233d63" }}>
              SilverSnake IT Solutions
            </span>
            ,
            <br /> We pride ourselves on our customer-centric approach,
            delivering solutions that exceed expectations and drive tangible
            results. Our team of experienced professionals is passionate about
            technology and dedicated to helping your business succeed.
          </div>
          <div>
            Contact us today to explore how SilverSnake IT Solutions can
            transform your business with our innovative IT services and
            solutions. Let us be your trusted partner on your digital journey.
          </div>
          <Button className="mt-2">Contact us</Button>
        </Col>
        <Col
          md={5}
          className="d-flex align-middle justify-content-center clearfix"
        >
          <Image src={as} className="w-75 h-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
