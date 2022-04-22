import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const [user,loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
        return(
            <div style={{margin: '200px', textAlign: 'center'}}>
                 <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;