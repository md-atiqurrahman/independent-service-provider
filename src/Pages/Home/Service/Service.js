import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, image, price, description } = service;
    const navigate = useNavigate();
    return (
        <Card className='card' style={{ width: '18rem'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <span className='price'>${price}</span> per guest
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button onClick={() => navigate('/eventDetails')} className='btn'>Checkout</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;