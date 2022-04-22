import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import google from '../../../images/Social/google.png';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const
        [
            signInWithGoogle,
            googleUser,
            googleLoading,
            googleError
        ] = useSignInWithGoogle(auth);

    if (user || googleUser)
     {
        navigate(from, { replace: true });
    }


    const handleOnSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <h1>Please login</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='signup-text'>New to Catering by Odzemir ?
                    <Link className='signup-link' to='/signup'> Please Sign up</Link>
                </p>
                <button className='google-btn' onClick={() =>  signInWithGoogle()}>
                    <img style={{ marginRight: '5px',width: '36px',height: '36px'}} src={google} alt="" />
                    Continue with Google</button>
            </Form>
        </div>
    );
};

export default Login;