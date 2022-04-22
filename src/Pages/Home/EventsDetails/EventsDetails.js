import { Button } from 'react-bootstrap';
import { Link, Outlet, useParams } from 'react-router-dom';
import './EventDetails.css';

const EventsDetails = () => {
    const {eventName} = useParams();
    return (
        <div className="event-details">
            <h1>Wanna Plan A</h1>
             <Button><Link to='event'><span className='event-name'>{eventName}</span></Link></Button>
             <Outlet></Outlet>
        </div>
    );
};

export default EventsDetails;