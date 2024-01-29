 import Card from "react-bootstrap/Card"
 import { ImPointRight } from "react-icons/im";

 function AboutCard(){
    return (
        <Card className="quote-card-view">
            <Card.Body>
            <blockquote className="blockquote mb=0">
                <p style={{textAlign: ""}}>
                Hi Everyone, I am <span className="purple">Vikas Kumar</span> from <span className="purple"> Delhi, India.</span>
                    <br/>
                    I'm currently employed as software developer at HCL Tech.
                    <br />
                    I have completed B. Tech. in Computer Science at GGSIPU Delhi.
                    <br/>
                    <br />
                    Apart from coding, some other activity that I love to do!
                </p>
                <ul>
                    <li className="about-activity">
                    <ImPointRight /> Football
                    </li>
                    <li className="about-activity">
                    <ImPointRight /> Badminton
                    </li>
                    
                    <li className="about-activity">
                    <ImPointRight /> Travelling
                    </li>
                </ul>
            </blockquote>
            </Card.Body>
        </Card>
    )
 }

 export default AboutCard;