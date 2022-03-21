import React from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import Brand from "../../assets/images/logo.png";
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { BiWallet } from "react-icons/bi";


import "./styles.scss";


const NavBar = () => {
    return (
        <Navbar collapseOnSelect variant="dark" expand="lg" className="nomadNavBar" >
            <Container fluid>
                <Navbar.Brand href="/" >
                    <img src={Brand} alt="Logo" className="brandPositioning"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto itemsPositioning">
                        <Nav.Item>
                            <Nav.Link className="itemColor">roadmap</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="itemColor">team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="itemColor">gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="itemColor">contact us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="navbar-right">
                        <Button variant="secondary" className="nomadNavBarButtonTwitter rounded-0"><FaTwitter /></Button>{' '}
                        <Button variant="secondary" className="nomadNavBarButtonTwitter rounded-0"><FaDiscord /></Button>{' '}
                        <Button variant="light" className="nomadNavBarButtonWallet rounded-0"><BiWallet /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
