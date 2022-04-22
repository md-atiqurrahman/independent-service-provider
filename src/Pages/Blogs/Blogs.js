import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h3>1.Difference between authorization and authentication?</h3>
            <p>Ans: We can verify an user by authentication but authorization decided that which resources are access by an user.Authentication works through checking password,email id and other information which provided by an user but authorization is works through settings which is developed by the organization.Authentication can be changed or visible by user but authorization can not be changeable or visible by user.</p>

            <h3>2.Why are you using firebase? What other options do you have to implement authentication?
            </h3>
            <p>Ans:I am using firebase authentication for my app because i can allow users in to my app using multiple sign-in method including email and password sign-in .Without email and password sign-in system firebase has some popular  third party identity provider like(google,facebook,github,twitter e.t.c ) sign-in system.For implement authentication i can use Back4App,Backendless,Parse,Kuzzle,AWS Amplify e.t.c as firebase alternatives.</p>
            <h3>3.What other services does firebase provide than  other authentication?
            </h3>
            <p>Ans: Firebase authentication system is quite better than any other authentication.Firebase  is better for many reasons than other authentication  system. Among them it's give us ready-made UI libraries,backend services,we can easily use SDKs in firebase and also gives us multiple sign in method including popular third party identity provider sign-in system. </p>
        </div>
    );
};

export default Blogs;