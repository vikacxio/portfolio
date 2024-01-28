import { Container, Row, Col } from "react-bootstrap";
import AboutCard from "./AboutCard";
import aboutImage from "./../../assets/aboutpng.png"
import Techstack from "./TechStack";

function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col md={7} style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px"
                    }}>
                        <h1 style={{ marginLeft: "100px", fontSize: "2.1em", paddingBottom: "20px", }}>
                            Know who <strong className="green"> I'm</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "10px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={aboutImage} alt="about" className="img-fluid" />
                    </Col>
                </Row>
                <h1 className="project-heading" style={{ textAlign: "center", color:"black"}}>
                    Professional <strong className="green">skillset</strong>
                </h1>
                <Techstack />
            </Container>
        </Container>
    )
}

export default About;