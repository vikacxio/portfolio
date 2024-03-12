import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,DiDocker
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiSpringboot ,
  SiApachekafka, SiKubernetes
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
        <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
            <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiRedis />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiApachekafka />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiDocker />

            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiGit />

            </Col>
          
    </Row>
  )
}
export default Techstack;