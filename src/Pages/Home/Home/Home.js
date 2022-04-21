import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Social from '../Social/Social';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            <Services></Services>
            <Social></Social>
        </div>
    );
};

export default Home;