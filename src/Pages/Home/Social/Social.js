import React from 'react';
import './Social.css';
import facebook from '../../../images/Social/facebook.png';
import instagram from '../../../images/Social/instagram.png';
import whatsapp from '../../../images/Social/whatsapp.png';
import twitter from '../../../images/Social/twitter.png';
import viber from '../../../images/Social/viber.png';

const Social = () => {
    return (
        <div className='social'>
            <h1>MY SOCIAL SITE</h1>
            <div className='hr-line'>
            </div>
            <div className='social-site'>
               <img src={facebook} alt="" />
               <img style={{marginLeft: '19px'}} src={instagram} alt="" />
               <img  style={{marginLeft: '19px'}}src={whatsapp} alt="" />
               <img  style={{marginLeft: '19px'}}src={twitter} alt="" />
               <img  style={{marginLeft: '19px'}}src={viber} alt="" />
            </div>
        </div>
    );
};

export default Social;