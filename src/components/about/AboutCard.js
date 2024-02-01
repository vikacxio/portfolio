 import Card from "react-bootstrap/Card"
 import { ImPointRight } from "react-icons/im";

 function AboutCard(){
    return (
        <Card className="quote-card-view">
            <Card.Body>
            <blockquote className="blockquote mb=0">
                <p style={{textAlign: ""}}>

                Hi, I'm <span style={{color:"blue"}}>Vikas Kumar</span>, based in <span style={{color:"blue"}}> Delhi, India.</span>
                <br />
                I currently hold the position of a software developer at HCL Tech.
                <br />
                I have earned a Bachelor's degree in Computer Science from GGSIPU Delhi.
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