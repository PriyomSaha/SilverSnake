import React from "react";
import Card from "react-bootstrap/Card";
import engineering from "../Components/Images/engineering_team.svg";
import development from "../Components/Images/development.svg";
import cloudHosting from "../Components/Images/cloud_hosting.svg";
import cyberSecurity from "../Components/Images/cyber_security.svg";
import aiMl from "../Components/Images/ai_ml.svg";
import softwareProducts from "../Components/Images/software_products.svg";
import connectingTeams from "../Components/Images/connecting_teams.svg";

import { Col, Container, Row } from "react-bootstrap";

function Services() {
  let variant = "light";
  return (
    <Container fluid="lg" className="base-container mt-2">
      <Row>
        <div
          style={{ fontSize: "3vw" }}
          className="pb-3 fw-bolder text-muted text-start shadow-sm mb-3 bg-body-tertiary rounded"
        >
          Our field of Excellence and Services provided are -
        </div>
      </Row>
      <Row className="g-5">
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={development} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">
                Software Development:
              </Card.Title>
              <Card.Text>
                Our expert team of software developers specializes in delivering
                customized solutions tailored to meet your unique business
                requirements. From web applications to mobile apps and
                enterprise software, we leverage the latest technologies and
                best practices to develop robust and scalable solutions that
                drive growth and efficiency.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={engineering} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">
                Managed Services:
              </Card.Title>
              <Card.Text>
                Focus on your core business while we take care of your IT
                infrastructure. Our managed services ensure seamless operations
                and optimal performance of your systems. From network management
                and data backup to server maintenance and IT support, we
                proactively monitor and manage your IT environment to minimize
                downtime and maximize productivity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={cloudHosting} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">Cloud Computing:</Card.Title>
              <Card.Text>
                Focus on your core business while we take care of your IT
                infrastructure. Our managed services ensure seamless operations
                and optimal performance of your systems. From network management
                and data backup to server maintenance and IT support, we
                proactively monitor and manage your IT environment to minimize
                downtime and maximize productivity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={cyberSecurity} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">Cybersecurity:</Card.Title>
              <Card.Text>
                Protect your valuable data and secure your digital assets with
                our robust cybersecurity solutions. We understand the evolving
                threat landscape and offer comprehensive strategies to safeguard
                your business from cyberattacks. From vulnerability assessments
                and penetration testing to security monitoring and incident
                response, we employ industry-leading practices to ensure the
                highest level of protection.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={aiMl} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">AI and ML:</Card.Title>
              <Card.Text>
                Unlock the potential of artificial intelligence and machine
                learning to drive innovation and gain a competitive edge. Our AI
                and ML solutions enable you to leverage data-driven insights,
                automate repetitive tasks, and enhance decision-making. Whether
                you need chatbot development, predictive analytics, or natural
                language processing, we have the expertise to deliver
                transformative AI- powered solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img
              variant="top"
              src={softwareProducts}
              className="img-fit"
            />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">
                Software Products:
              </Card.Title>
              <Card.Text>
                Discover our range of cutting-edge software products designed to
                streamline your business processes and enhance efficiency. From
                CRM systems and project management tools to inventory management
                and HR solutions, our software products are built to address
                specific business needs and provide a seamless user experience.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xxl={4} role="button">
          <Card
            bg={variant}
            key={variant}
            text={"dark"}
            className="mb-2 card-hover"
          >
            <Card.Img variant="top" src={connectingTeams} className="img-fit" />
            <Card.Body className="slider">
              <Card.Title className="fs-3 fw-bold">
                Staffing Services:
              </Card.Title>
              <Card.Text>
                Finding the right talent for your IT projects can be a daunting
                task. Let us take care of it for you. Our staffing services
                connect you with highly skilled professionals who have the
                expertise and experience to meet your project requirements.
                Whether you need temporary resources or long-term placements, we
                have a vast network of qualified IT professionals ready to
                support your business objectives.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
