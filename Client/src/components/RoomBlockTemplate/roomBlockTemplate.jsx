import { React } from 'react';
import './roomBlockTemplate.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const RoomBlockTemplate = ({room}) => {

    const {images,name,price,id} = room;

    return ( 
    <article className="room">
        <div className="img-container">
            <img src={images[0]} alt="single room"></img>
            <div className="price-top">
                <h6>${price}</h6>
                <p>per night</p>
            </div>

         <div className="room-link">
         <Link to={`/rooms/${id}`} className="btn-primary">enter room</Link>
         </div>
         <div className="room-info">{name}</div>
        </div>
    </article>
     );
}

RoomBlockTemplate.propTypes={
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string),
        price:PropTypes.number.isRequired,
        id:PropTypes.string.isRequired,
    })
}
export default RoomBlockTemplate;