import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/Header/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';



const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth);
       
    }
    return (
        <Navbar bg="light" expand="lg" sticky='top'>
            <Container className='nav-text-container' >
                <div>
                    <Navbar.Brand href="#home">
                     <img src={logo} alt="" />
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto link-names">
                            <CustomLink as={Link} to='/home'>Home</CustomLink>
                            <CustomLink as={Link} to="/about">About me</CustomLink>
                            <CustomLink as={Link} to="/blogs">Blogs</CustomLink>
                            <CustomLink as={Link} to="/login">
                                {
                                    user
                                        ?
                                    <p onClick={handleSignOut}>Sign out</p>
                                        :
                                    'Login'
                                }
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;