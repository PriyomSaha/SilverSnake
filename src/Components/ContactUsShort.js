import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
  useServiceStore,
  useShowContactUsFormStore,
} from "./States/ManageStates";

function ContactUsShort() {
  const setShow = useShowContactUsFormStore((state) => state.setIsOpen);
  const setDomain = useServiceStore((state) => state.setService);

  useEffect(() => {
    setDomain("All");
  }, []);

  return (
    <Container fluid className="contact-us-short rounded py-3">
      <Row>
        <Col sm={6} className="align-self-start">
          <div>Ready to get started?</div>
          <div> Talk to us today !!!</div>
        </Col>
        <Col sm={6} className="align-self-end mt-2 ">
          <Button className="text-nowrap float-end " onClick={() => setShow()}>
            Get Stared
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUsShort;
