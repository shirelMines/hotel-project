import {React ,useState, useContext} from 'react';
import BackgroundInnerBlock from '../../BackgroundInnerBlock/backgroundInnerBlock';
import {Link} from 'react-router-dom';
import BackgroundTemplate from '../../BackgroundTemplate/backgroundTemplate';
import RoomBlockTemplate from '../../RoomBlockTemplate/roomBlockTemplate';
import {Context} from '../../../context';
import '../Rooms/rooms.css';
import FilterRooms from './../../FilterRooms/filterRooms';

const Rooms = () => {

    const context= useContext(Context);
    const {allRooms,sortedRooms}= context;
    const [currentRooms, setCurrentRoom]= useState(allRooms);

    return ( 
        <div>
        <BackgroundTemplate backgroundStyle ="roomsStyle">
            <BackgroundInnerBlock title="Our Rooms">
                <Link to="/" className="btn-primary">return home</Link>
        </BackgroundInnerBlock>
        </BackgroundTemplate>
        
        <section className="rooms">

          <div >
           <h4>Search room</h4>
           <div className="linediv"></div>
         </div>
            
            <div>
              <FilterRooms ></FilterRooms>
            </div>
        <div className="rooms-center">
          
          {sortedRooms.length ===0 ? <h3>Sorry,no room matched your search</h3> 
          : sortedRooms.map(room => <RoomBlockTemplate key={room.id} room={room}></RoomBlockTemplate>)}
        </div>
        </section>
        </div>
     );
}

export default Rooms;