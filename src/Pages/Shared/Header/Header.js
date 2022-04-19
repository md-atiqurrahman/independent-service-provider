import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/Header/logo.png';


const Header = () => {
    return (
        <>
            <Navbar className='navbar' sticky='top'>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Collapse className="link-names me-auto justify-content-end">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#about">About me</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;