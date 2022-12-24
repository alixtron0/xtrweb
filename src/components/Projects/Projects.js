import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tn2 from "../../Assets/Projects/tn2.png"
import vpn from "../../Assets/Projects/vpn.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tn2}
              isBlog={false}
              title="TN BOT"
              description="A good music bot"
            //  ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://discord.com/api/oauth2/authorize?client_id=952467912386572338&permissions=1088811301696&scope=bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vpn}
              isBlog={false}
              title="best vpn"
              description="the best vpn for iran conditions you can register an order from mt Telegram ID:@alixtron"
            //  ghLink=""
              demoLink="https://t.me/xtron_vpn"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
