import React from 'react';
import BackgroundInnerBlock from '../BackgroundInnerBlock/backgroundInnerBlock';
import {Link} from 'react-router-dom';
import Services from '../Services/services';
import FeaturedRooms from '../FeaturedRooms/featuredRooms';
import BackgroundTemplate from '../BackgroundTemplate/backgroundTemplate';

const Home = () => {
    return (
    <React.Fragment>
      <BackgroundTemplate backgroundStyle="defaultStyle">
           <BackgroundInnerBlock title="Luxurious Rooms" subtitle="find the perfect suite for your vication">
                <Link to="/rooms" className="btn-primary">our rooms</Link>
            </BackgroundInnerBlock>
      </BackgroundTemplate> 

      <Services></Services>

      <FeaturedRooms></FeaturedRooms>
   </React.Fragment>
    );
}
 
export default Home;
