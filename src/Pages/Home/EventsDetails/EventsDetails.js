import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Outlet, useNavigate, useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import './EventDetails.css';

const EventsDetails = () => {
    const [services, setServices] = useState([]);
    const { eventName } = useParams();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://md-atiqurrahman.github.io/json-api/data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    let event = [];
    for (const service of services) {
        if (service.name === eventName) {
            event.push(service);
        }
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        navigate(`/eventDetails/${eventName}/event`)
    }

    return (
        <div className='event-details-container'>
            <div className="event-details">
                <div className='card-container'>
                    <h1>Wanna Plan A <span className='event-name'>{eventName}</span></h1>
                    <Card className='single-card'>
                        <Card.Img variant="top" src={event[0]?.image} />
                        <Card.Body>
                            <Card.Text>
                                <span className='price'>${event[0]?.price}</span> per guest
                            </Card.Text>
                            <Card.Text>
                                {event[0]?.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="form-container">
                    <form onSubmit={handleOnSubmit} className='form'>
                        <h4>Your Information</h4>
                        <div className="input-group">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name" id="" placeholder='Enter your name' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" name="email" id="" placeholder='Email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" name="phone" id="" placeholder='phone-number' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Your Address</label>
                            <input type="text" name="address" id="" placeholder='address' required />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default EventsDetails;