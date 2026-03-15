import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import moglixIcon from "../../assets/moglix-logo.png";
import ukgIcon from "../../assets/ukg-logo.png";
import yatraIcon from "../../assets/Yatra_logo.svg";
import hclIcon from "../../assets/hcl-logo.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span style={{ color: "blue" }}>Vikas Kumar</span>, based in{" "}
            <span style={{ color: "blue" }}>Delhi, India.</span>
            <br />

            I currently hold the position of a SDE-2 at{" "}
            <span>
              <img
                src={ukgIcon}
                alt="UKG Logo"
                style={{ height: "20px", verticalAlign: "middle", marginLeft: "4px" }}
              />
            </span>.
            <br />

            I have earned a Bachelor's degree in Computer Science from GGSIPU Delhi.
            <br />
            <br />

            Previously worked at:
            <br />

            <div style={{ marginTop: "8px" }}>
              <div>
                <img src={yatraIcon} alt="Yatra Logo" style={{ height: "30px" }} />
              </div>
              <div>
                <img src={moglixIcon} alt="Moglix Logo" style={{ height: "30px" }} />
              </div>
              <div>
                <img src={hclIcon} alt="HCL Logo" style={{ height: "20px" }} />
              </div>
            </div>

            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;