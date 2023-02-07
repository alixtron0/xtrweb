import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./card";
import Particle from "../Particle";
import qr1 from "../../Assets/Projects/qr1.png"

function qrcode() {
  return (
    <Container fluid className="qrcode-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          . <strong className="purple">. </strong>
        </h1>
        <p style={{ color: "white" }}>
          v2rayng config
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qr1}
              isBlog={false}
              title="qrcode"
              description="scan this with v2rayng"
            //  ghLink="https://github.com/soumyajit4419/Chatify"
            //  demoLink="https://discord.com/api/oauth2/authorize?client_id=952467912386572338&permissions=1088811301696&scope=bot"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default qrcode;
