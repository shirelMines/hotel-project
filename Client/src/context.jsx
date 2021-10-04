import * as React  from 'react';
import {Component} from 'react';
import axios from 'axios';

const imgHeader = "/images/";
axios.defaults.baseURL="http://localhost:4000";

export const Context = React.createContext();

export class Provider extends Component {
    state = { 
        allRooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        maxSize:0,
        minSize:0,
        breakfast:false,
        pets:false,
        
    };
   
   async componentDidMount(){
      const {data:dataBase} = await axios.get();//get database from the server

      const allRooms= this.formatDataBase(dataBase);
      const featuredRooms= allRooms.filter(room => room.featured===true)
      const maxPrice= Math.max(...allRooms.map(room=> room.price));
      const minPrice= Math.min(...allRooms.map(room=> room.price));
      const maxSize= Math.max(...allRooms.map(room=> room.size));
      const minSize= Math.min(...allRooms.map(room=> room.size));

      this.setState(
        { allRooms,
          sortedRooms:allRooms,
          featuredRooms,
          loading:false,
          price:maxPrice,
          minPrice:minPrice,
          maxPrice:maxPrice,
          maxSize:maxSize,
          minSize:minSize
        });
    }

     formatDataBase = (data)=>{
       const temp = data.map(item=> {
           const id = item._id;
           const images= item.images.map(image => (imgHeader+image).toString());//save new images url
           const rooms= {...item,images,id}//create new room format
           return rooms;
       })
       return temp;
    }

    getRooom =(id)=>{
      const arrAllRooms= [...this.state.allRooms];
      const room = arrAllRooms.find(room => room.id.toString() === id);
      console.log(room);
      return room;
    }


    handleChange=(event)=>{
      const target = event.target;
      const value = target.type==="checkbox" ? target.checked : target.value;
      const name = event.target.name;
      this.setState({[name]: value},this.filterByType);
    }


    filterByType =()=>{
      let {allRooms,type,capacity,price,maxSize,minSize,breakfast,pets}= this.state;
      let allRoomsArr = [...allRooms];
      //parse
      capacity= parseInt(capacity);
      maxSize = parseInt(maxSize);
      minSize = parseInt(minSize);

      //by type
      if(type!=="all"){
        allRoomsArr = allRoomsArr.filter(room=> room.type === type)
      }
      
      //by capacity
      if(capacity!==1){
      allRoomsArr = allRoomsArr.filter(room => room.capacity >= capacity);
      }

      //by price
      allRoomsArr = allRoomsArr.filter(room=> room.price <= price);

      //by size
      allRoomsArr = allRoomsArr.filter(room=> room.size>= minSize && room.size<= maxSize)
      
      //by breakfast
      if(breakfast){
      allRoomsArr = allRoomsArr.filter(room => room.breakfast===true)
      }

      //by pets
      if(pets){
      allRoomsArr = allRoomsArr.filter(room => room.pets===true)
      }

      this.setState({sortedRooms:allRoomsArr})
    }

    handaleReasetFilters=()=>{
      let {allRooms,sortedRooms,type,capacity,price,minPrice,maxPrice,maxSize,minSize,breakfast,pets}= this.state;

      this.setState(
        { allRooms,
          sortedRooms:allRooms,
          type:"all",
          capacity:1,
          price:maxPrice,
          minPrice:minPrice,
          maxPrice:maxPrice,
          maxSize:maxSize,
          minSize:minSize,
          breakfast:false,
          pets:false
        });

    }

    render() { 
        return ( 
            <Context.Provider value={{...this.state, getRoom:this.getRooom,
            handleChange:this.handleChange ,
            }}>
                {this.props.children}
            </Context.Provider>
         );
    }
}
 
export const Consumer = Context.Consumer;



