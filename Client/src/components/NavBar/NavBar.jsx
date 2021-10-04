import { React ,useState } from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (
        
        <div className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src="/logo.png" className="logo"></img>
                    </Link>
                 
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                    <li>
                        <Link to="">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default NavBar;
