import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
    const [services] = useServices();

    return (
            <div className='services'>
                <h1>SERVICES</h1>
                <div className='hr-line'>
                </div>
                <div className='service-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
    );
};

export default Services;