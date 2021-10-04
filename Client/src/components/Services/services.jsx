import { React ,useState} from 'react';
import '../Services/services.css';
import { getServices } from './servicesList';

const Services = () => {
    
    const [services,SetServices]= useState(getServices);

    return ( 

    <section className="services">

        <div>
         <h4>Services</h4>
         <div className="linediv"></div>
         </div>

        <div className="services-center">

         {services.map(service => 
         <article className="service">
         <span>{service.icon}</span>
         <h6>{service.title}</h6>
         <p>{service.info}</p>
        </article>)}

        </div>
        </section>
    );
}
 
export default Services;