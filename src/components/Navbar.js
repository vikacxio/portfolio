import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoon } from "react-icons/bs";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";



function NavBar({ theme, toggleTheme }) {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const navRef = useRef(null);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                updateExpanded(false);
            }
        }

        if (expand) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [expand]);

    return (
        <Navbar
            ref={navRef}
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

                        <Nav.Item className="theme-toggle-item">
                            <button
                                className="theme-toggle-btn"
                                onClick={toggleTheme}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "white",
                                    cursor: "pointer",
                                    fontSize: "1.2rem",
                                    padding: "8px 16px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                aria-label="Toggle dark/light theme"
                            >
                                {theme === "dark" ? <BsSun /> : <BsMoon />}
                            </button>
                        </Nav.Item>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;