import {React, useContext,useState,useEffect} from 'react';
import BackgroundInnerBlock from '../../BackgroundInnerBlock/backgroundInnerBlock';
import {Link} from 'react-router-dom';
import StyledBackground from './dynamicBackground';
import { Context } from '../../../context';
import Error from '../../Error/error';
import '../SingleRoomDetailes/singleRoomDetails.css'
import SliderImages from './SliderImages/sliderImages';
import {FaCheck,FaCoffee,FaDog} from 'react-icons/fa';

const SingleRoomDetails = (props) => {

    const context= useContext(Context);
    const {getRoom} = context;
    
    const [id, setId]= useState();
    const [currentRoom, setCurrentRoom] = useState();

    useEffect(()=>{
        const id=props.match.params.id;
        setId(id);

        const currentRoom =getRoom(id);
         setCurrentRoom(currentRoom);
    })

   
     if(!currentRoom){
         return ( <Error></Error>);
        
    }
    const {name,slug,type,price,size,capacity,pets,breakfast,featured,
        description,extras,images,reviews}= currentRoom;
        return(
            
        // details section
        <div>
        <StyledBackground image={images[0]}>
            <BackgroundInnerBlock title={name}>
                <Link to="/rooms" className="btn-primary">back to rooms</Link>
        </BackgroundInnerBlock>
        </StyledBackground>

        <section className="single-room">
         
           <SliderImages images={images}></SliderImages>

           <div className="single-room-info">
            <article className="description">
                <h3>Details</h3>
                <p>{description}</p>
            </article>
            <article className="info">
                <h3>Information</h3>
                <p>Price : ${price}</p>
                <p>Size : {size} SQFT</p>
                <p>Max capacity : {capacity > 1 ? capacity+" pepole" : capacity+" person"}</p>
                <p>{pets ? <p><FaDog></FaDog> Pets allowed</p> : "No pets allowed"}</p>
                <p>{breakfast && <p><FaCoffee></FaCoffee> Free breakfast included</p>}</p>
            </article>
           </div>
        </section>

        <section className="room-extras">
        <h3>Extras</h3> 
            <ul className="extras">
             {extras.map(extra=> <li><FaCheck></FaCheck> {extra}</li>)}  
             </ul>
        </section>
        </div>

       
    ); }

 
export default SingleRoomDetails;