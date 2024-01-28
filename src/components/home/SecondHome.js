
import { Container, Row, Col } from "react-bootstrap";
import avtar from "./../../assets/avtar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function SecondHome(){
    return(
    <Container fluid className="home-about-section" id="about">
      <Container >
      <Row>
        <Col md={6} className="myAvtar">
            <Tilt>
              <img src={avtar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
      
      
          <Col md={6} className="home-about-social">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vikacxio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/vikacxio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vikas-kumar-4351231b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vikacxio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
          </Row>
       
      

      </Container>
    </Container>


    )

}
export default SecondHome;