import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import projectImage from "../../assets/project.png"

function Project() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="projct-heading">
                    My Recent <strong style={{ color: "green" }}>Work</strong></h1>
                <p style={{ color: "black" }}>
                    Here are a few project I've worked on recently
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={projectImage}
                            title="Movie App"
                            description="Movies and reviews for the movies"
                            ghLink="https://github.com/vikacxio/Movies"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}
export default Project;