import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/VikasKumarResume.pdf"
import { Document, Page, pdfjs } from "react-pdf";

import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {

    const [width, setWidth] = useState(1200);
    useEffect(() => { setWidth(window.innerWidth) }, []);

    return (
        <div>
            <Container fluid className="resume-section">

                <Row style={{ justifyContent: "center", position: "relative", color: "red" }}>
                    <Button variant="primary"
                        href={pdf}
                        target="blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download resume
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center" >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.65} />
                    </Document>
                </Row>


            </Container>

        </div>
    )
}

export default Resume;