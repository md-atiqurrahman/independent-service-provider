import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Row>
                    <Col lg='7'>
                        <div className='banner-text'>
                            <h1>FOOD IS ONLY THE</h1>
                            <h1>BEGINNING</h1>
                            <p>My trusted state-of-the-art, 20,000 sq ft food service facility is designed to provide safe, healthy food for your virtual or in-person events. I am here to help no matter the size or scope of your gathering.
                            </p>
                            <h4>EXPLORE OUR OFFERINGS ON THESE NEW EVENT EXPERIENCES:
                            </h4>
                            <div className='btn-group'>
                                <Button style={{marginRight: '15px'}} variant="outline-dark">MICRO WEDDINGS</Button>
                                <Button style={{marginRight: '15px'}} variant="outline-dark">BIRTHDAY EVENTS</Button>
                                <Button variant="outline-dark">MARRIGE EVENTS</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;