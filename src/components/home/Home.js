import { Container, Row, Col } from "react-bootstrap"

import TypeAnimation from "./TypeAnimation"
import SecondHome from "./SecondHome";
//import homepic from "../../assets/home.png"
import ToolStack from "./ToolStack";

function Home() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">

                    <Row>
                        <Col md={6} className="home-header">
                            <h1 style={{ paddingBottom: 10 }} className="heading">Namaste  <span className="wave" role="img" aria-labelledby="wave">🙏</span>
                            </h1>

                            <h1 className="heading-name">
                                I'm
                                <strong className="main-name"> Vikas Kumar</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <TypeAnimation />
                            </div>


                        </Col>
                        <Col >
                        <h1 className="project-heading" style={{ marginTop: "60px", textAlign: "center" }}>
                        "Hey<strong className="home-head"> ya!</strong>"</h1>
                        <ToolStack/>
                        </Col>
                    </Row>

                </Container>

            </Container>
            <SecondHome />

        </section>
    )
}

export default Home;