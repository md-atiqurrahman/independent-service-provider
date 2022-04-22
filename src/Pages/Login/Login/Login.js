import React, { useRef, useState } from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';
import google from '../../../images/Social/google.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const Login = () => {
    const [defaultError, setDefaultError] = useState('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate('');
    let location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const
        [
            signInWithGoogle,
            googleUser,
        ] = useSignInWithGoogle(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user || googleUser) {
        navigate(from, { replace: true });
    }


    const handleOnSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    const handleResetPassword = async (event) => {
        const email = emailRef.current.value;
        if (!email) {
            setDefaultError('Please enter your email first...')
            return;
        }
        await sendPasswordResetEmail(email);
        toast.success('Please check your email and reset password')
        setDefaultError('')

    }

    return (
        <div className='form-container'>
            <h1>Please Login</h1>
            <Form className='form' onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                <p style={{ color: 'red' }}>{defaultError}</p>
                <Button className='submit-btn' variant="primary" type="submit">
                    Submit
                </Button>
                <p className='signup-text'>Forgot Password ?
                    <a onClick={handleResetPassword} className='signup-link'> Reset password</a>
                </p>
                <p className='signup-text'>New to Catering by Odzemir ?
                    <Link className='signup-link' to='/signup'> Please Sign up</Link>
                </p>
                <div className='hr-line'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button className='google-btn' onClick={() => signInWithGoogle()}>
                    <img style={{ marginRight: '5px', width: '36px', height: '36px' }} src={google} alt="" />
                    Continue with Google</button>
            </Form>
        </div>
    );
};

export default Login;