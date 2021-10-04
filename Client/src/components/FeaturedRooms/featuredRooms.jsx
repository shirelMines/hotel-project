import { React,useContext } from 'react';
import {Context} from '../../context';
import RoomBlockTemplate from '../RoomBlockTemplate/roomBlockTemplate';
import '../FeaturedRooms/featuredRooms.css'

const FeaturedRooms = () => {
    const context = useContext(Context);
    const {featuredRooms} = context;
    
    return ( 
    <section className="featured-rooms">

        <div>
         <h4>Recommended rooms</h4>
         <div className="linediv"></div>
         </div>
          
        <div className="featured-rooms-center">
         {featuredRooms.map(room => <RoomBlockTemplate key={room.id} room={room}></RoomBlockTemplate>)}
         </div>
    </section>
    
    
    );
}
 
export default FeaturedRooms;
