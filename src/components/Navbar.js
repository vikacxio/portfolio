import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { CgFileDocument } from "react-icons/cg";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";



function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <h4 className="img-fluid logo" style={{marginTop: "5px"  }}> Vikas Kumar</h4>

                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">



                        <Nav.Item>

                            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                <h5 style={{ marginTop: "5px" }}> <AiOutlineHome style={{ marginBottom: "1px" }} /> Home</h5>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>

                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={() => updateExpanded(false)}>
                                <h5 style={{marginTop: "5px"  }}> <AiOutlineUser style={{ marginBottom: "1px", fontWeight: "bold" }} /> {" "}
                                    About</h5>

                            </Nav.Link>

                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/project"
                                onClick={() => updateExpanded(false)}>
                                <h5 style={{marginTop: "5px"  }}>< AiOutlineFundProjectionScreen style={{ marginBottom: "1px" }} /> {" "}
                                    Projects</h5>

                            </Nav.Link>


                        </Nav.Item>


                        <Nav.Item>

                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={() => updateExpanded(false)}
                            >
                                <h5 style={{ marginTop: "5px" }}> <CgFileDocument style={{ marginBottom: "1px" }} /> Resume</h5>
                            </Nav.Link>

                        </Nav.Item>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;