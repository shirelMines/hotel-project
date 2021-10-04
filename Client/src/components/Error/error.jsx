import {React} from 'react';
import {Link} from 'react-router-dom'
import '../Error/error.css';

const Error = () => {
    return (  
        <div>
            <div>Oops... error was occorse</div>
            <Link to="/rooms" className="btn-primary">back to rooms</Link>
        </div>
    );
}
 
export default Error;