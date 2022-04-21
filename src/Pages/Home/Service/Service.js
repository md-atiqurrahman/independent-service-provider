import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, image, price, description } = service;
    return (
        <Card className='card' style={{ width: '18rem'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  Price starting at: <span className='price'>${price}</span>
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button className='btn'>Checkout</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;