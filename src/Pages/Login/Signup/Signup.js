import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
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

    const [sendEmailVerification] = useSendEmailVerification(auth);


    if (user) {
        navigate('/home');
        return (
            <div style={{ margin: '200px', textAlign: 'center' }}>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setDefaultError('Password did not match.Please re-enter your password')
            return;
        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await sendEmailVerification();
            setDefaultError('')
        }
    }
    return (
        <div className='form-container'>
            <h1>Please Sign up</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="I agree to the terms and conditions above" />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                <p style={{ color: 'red' }}>{defaultError}</p>
                <Button
                    className='submit-btn'
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