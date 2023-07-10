import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import responsive from "../Components/Images/realtime_responsive.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container
      fluid="lg"
      className="w-100 base-container d-flex align-items-center"
    >
      <Row className="g-5">
        <Col md={7} className="px-4">
          <span className="text-primary fs-5">
            &nbsp;<br></br>Welcome to
          </span>
          <br></br>
          <span className="fs-1 fw-bolder">SilverSnake IT Solutions</span>
          <br></br>
          <div className="py-3">
            Your Trusted Partner for Innovative IT Solutions.<br></br>
            At SilverSnake IT Solutions, we are committed to providing
            cutting-edge technology solutions that empower businesses to thrive
            in today&#39;s digital landscape. With our comprehensive range of
            services, including software development, managed services, cloud
            computing, cybersecurity, AI, ML, software products, and staffing,
            we are your one-stop destination for all your IT needs.
          </div>
          <div>
            At an IT Solutions provider, we prioritize delivering exceptional
            customer service and ensure that our solutions are scalable,
            reliable, and cost-effective. We understand that every business is
            unique, and we tailor our services to meet your specific
            requirements.
          </div>
          <Link to="/services">
            <Button className="mt-3">Explore our Services</Button>
          </Link>
        </Col>
        <Col
          md={5}
          className="d-flex align-middle justify-content-center clearfix"
        >
          <Image src={responsive} className="w-75 h-100" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
