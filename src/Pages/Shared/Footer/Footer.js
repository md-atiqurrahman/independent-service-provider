import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer-container">
            <footer>
                <div className='copyright-text'>
                    <p><small>Copyright © {year} Catering By Ozdemir - All Rights Reserved.</small></p>
                </div>
                <div className='web-maker'>
                    <p><small>Powered by <span className='company-name'>Web-Hunter</span></small></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;