import { Button } from 'react-bootstrap';
import { Link, Outlet, useParams } from 'react-router-dom';
import './EventDetails.css';

const EventsDetails = () => {
    const {eventName} = useParams();
    return (
        <div className="event-details">
            <h1>Wanna Plan A <span className='event-name'>{eventName}</span></h1>
             <Button><Link to='event'><span className='btn-text'>See Details</span></Link></Button>
             <Outlet></Outlet>
        </div>
    );
};

export default EventsDetails;