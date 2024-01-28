import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import todo from "../../assets/todo.png"
import ems from "../../assets/ems.png"
import login from "../../assets/login.png"
import colorization from "../../assets/colorization.png"
import crawler from "../../assets/crawler.png"
import projectImage from "../../assets/project-1.png"

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
                            description="The Full Stack Movie Application is a dynamic and immersive platform that seamlessly integrates Spring Boot for the backend, React.js for the frontend and mongodb to store data, offering users a comprehensive and engaging experience in exploring and discovering movies. "
                            ghLink="https://github.com/vikacxio/Movies"
                        />

                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={login}
                            title="Login Api"
                            description="The Spring Boot JWT Login API with Regex Validation is a secure and efficient authentication solution built for modern web applications. Leveraging the Spring Boot framework, JSON Web Tokens (JWT), and regular expressions, this API provides a robust and flexible authentication mechanism for user login."
                            ghLink="https://github.com/vikacxio/LoginApi"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={ems}
                            title="Employee management system"
                            description="The Java Swing Employee Management System with MySQL Integration is a feature-rich and visually appealing application designed to streamline the complexities of employee management within organizations. Developed using Java Swing for the graphical user interface and MySQL for efficient data storage."
                            ghLink="https://github.com/vikacxio/EmployeeManagementSystem"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={colorization}
                            title="GreyScale image colorization"
                            description="The Grayscale Image Colorization Application is an innovative project developed in Python, employing Convolutional Neural Networks (CNNs) to add vibrant and realistic colors to grayscale images. This application is designed to bring life to monochromatic pictures by leveraging deep learning techniques."
                            ghLink="https://github.com/vikacxio/Greyscale-colorization"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={todo}
                            title="To Do App"
                            description="The Node.js To-Do Application with MongoDB Integration is a robust and user-friendly task management system designed to streamline the organization of daily activities. Leveraging the power of Node.js for server-side scripting and MongoDB for efficient data storage, this application offers a seamless and scalable solution for individuals and teams seeking a modern approach to task management."
                            ghLink="https://github.com/vikacxio/ToDo"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard imgPath={crawler}
                            title="Web Crawler"
                            description="Web Crawler is a versatile and efficient project designed for navigating and extracting information from the vast landscape of the World Wide Web. Built using Python, this web crawler is a powerful tool that automates the process of fetching and organizing data from various websites."
                            ghLink="https://github.com/vikacxio/Python-web-crawler"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}
export default Project;