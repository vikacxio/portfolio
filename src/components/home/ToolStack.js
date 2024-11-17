import { Col, Row } from "react-bootstrap";


import { SiLinux,SiMicrosoftazure,SiMongodb} from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
//import { TbBrandVscode } from "react-icons/tb";
import { FaReact} from "react-icons/fa";
function ToolStack(){

    return(
        <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
            
            {/* <Col xs={4} md={2} className="tech-icon">
            <SiLinux /> 
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icon">
            <FaWindows />
            </Col> */}
            <Col xs={4} md={2} className="tool-icons">
            <BiLogoSpringBoot /> 
            </Col>
            <Col xs={4} md={2} className="tool-icons">
            <DiJava />
            </Col>
            <Col xs={4} md={2} className="tool-icons">
            <FaReact />
            </Col>
            <Col xs={4} md={2} className="tool-icons">
            <SiMongodb />
            </Col>
            <Col xs={4} md={2} className="tool-icons">
            <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tool-icons">
            <SiMicrosoftazure />
            </Col>
            
            
        </Row>
    )
}
export default ToolStack;