import React from 'react';
import img from '../../images/About/shape-2.png';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='details'>
                <h1>About me</h1>
                <p>I am Md.Atiqur Rahman.From my childhood I have a dream that one day I will become a good and popular programmer .So I have a lot of interest in programming or coding.I primarily  entered in programming by learing web-developent course at Programming-hero.After join the course i face some personal issues which hindrance in my learing flow but i was overcome it and i will be.At last i wanna say: 'I love coding and learn coding'.</p>
            </div>
            <div className='my-img'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default About;