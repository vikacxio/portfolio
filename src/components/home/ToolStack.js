import { Col, Row } from "react-bootstrap";


import { SiPostman,SiLinux,SiMicrosoftazure} from "react-icons/si";
import { LiaLinode } from "react-icons/lia";
import { DiJava } from "react-icons/di";
//import { TbBrandVscode } from "react-icons/tb";
import { FaReact} from "react-icons/fa";
function ToolStack(){

    return(
        <Row style={{justifyContent:"center", paddingBlockStart:"50px"}}>
            
            {/* <Col xs={4} md={2} className="tech-icon">
            <SiLinux /> 
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icon">
            <FaWindows />
            </Col> */}
            <Col xs={4} md={2} className="tech-icons">
            <LiaLinode /> 
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <FaReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftazure />
            </Col>
            
            
        </Row>
    )
}
export default ToolStack;