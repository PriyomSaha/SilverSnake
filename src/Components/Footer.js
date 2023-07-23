import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container fluid className="footer-container">
          {/* <Row className="d-flex align-items-center">
            <Col
              sm={6}
              className="d-flex  justify-content-center justify-content-sm-start"
            >
              Follow us on
            </Col>
            <Col
              sm={6}
              className="d-flex align-middle justify-content-center justify-content-sm-end"
            >
              <span className="pe-2">
                <BsFacebook />
              </span>
              <span className="pe-2">
                <BsInstagram />
              </span>
              <span className="pe-2">
                <BsTwitter />
              </span>
              <span className="pe-2">
                <BsLinkedin />
              </span>
              <span className="pe-2">
                <BsGithub />
              </span>
            </Col>
          </Row> */}
          <Row>
            <Col sm={6} className="my-auto">
              <div className="d-flex my-auto justify-content-start">
                You can directly contact us here :
              </div>
              <div>
                <span style={{ color: "#97b1d7" }}>
                  <BsFillTelephoneFill />
                </span>
                &nbsp; : &nbsp;<a href="tel:+914035160829">+91 40 3516 0829</a>
              </div>
              <div>
                <span style={{ color: "#97b1d7" }}>
                  <BsFillTelephoneFill />
                </span>
                &nbsp; : &nbsp;
                <a href="tel:+91 40 3517 1332">+91 40 3517 1332</a>
              </div>
              <div>
                <span style={{ color: "#97b1d7" }}>
                  <MdEmail />
                </span>
                &nbsp; : &nbsp;
                <a href="mailto:contact@silversnakeit.com">
                  contact@silversnakeit.com
                </a>
              </div>
            </Col>
            <Col sm={6} className="mt-2 my-auto">
              <div className="d-flex my-auto justify-content-center justify-content-sm-end pe-2">
                Follow us on
              </div>
              <div className="d-flex my-auto justify-content-center justify-content-sm-end">
                <span className="pe-2">
                  <BsFacebook />
                </span>
                <span className="pe-2">
                  <BsInstagram />
                </span>
                <span className="pe-2">
                  <BsTwitter />
                </span>
                <span className="pe-2">
                  <BsLinkedin />
                </span>
                <span>
                  <BsGithub />
                </span>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="m-auto">
            © 2023 SilverSnake Technologies LLP - All right reserved
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
