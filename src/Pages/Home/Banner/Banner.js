import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div id='banner' className='banner'>
            <Container >
                <Row>
                    <Col sm= '12' md= '12'lg='12'>
                        <div className='banner-text'>
                            <h1>HAVE A FUNCTION? I'VE GOT THE CATERING.</h1>
                            <p>Bringing high quality food and service to your next event.
                            </p>
                            <button>ENQUIRE NOW</button>
                        </div>
                       
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;