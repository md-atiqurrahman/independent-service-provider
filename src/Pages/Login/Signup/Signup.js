import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [defaultError, setDefaultError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user) {
        navigate('/home');
    }

    const handleOnSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setDefaultError('Password did not match.Please re-enter your password')
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password);
            setDefaultError('')
        }
    }
    return (
        <div className='form-container'>
            <h1>Please Sign up</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I agree to the terms and conditions above" />
                </Form.Group>
                <p>{error?.message}</p>
                <p style={{ color: 'red' }}>{defaultError}</p>
                <Button
                    disabled={!agree}
                    variant="primary"
                    type="submit">
                    Submit
                </Button>
                <p className='signup-text'>Already have an account?
                    <Link className='signup-link' to='/login'> Please login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Signup;