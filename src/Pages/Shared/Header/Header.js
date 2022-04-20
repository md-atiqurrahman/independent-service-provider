import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/Header/logo.png';


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container className='nav-text-container' >
                <div>
                    <Navbar.Brand href="#home" className='logo-container'>
                        <img src={logo} alt="" />
                        <h3>Catering By Ozdemir</h3>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto link-names">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#about">About me</Nav.Link>
                            <Nav.Link href="#blogs">Blogs</Nav.Link>
                            <Nav.Link href="#blogs">login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;