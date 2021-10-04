import {React,useContext} from 'react';
import {Context} from '../../context';
import '../FilterRooms/filterRooms.css';
import {FaCoffee,FaDog} from 'react-icons/fa';

const FilterRooms = () => {

    const context = useContext(Context);
    const {handleChange,handaleReasetFilters,allRooms,type,capacity,price,minPrice,maxPrice,maxSize,minSize,breakfast,pets} = context;

    const getUniqueArray =(roomsArray,value)=>{
       return [...new Set(roomsArray.map(room => room[value]))]//get all the unique value of type
    }
    //all unique type
    let roomsType= getUniqueArray(allRooms,"type");
    roomsType=["all",...roomsType];

    //all unique capacities
    let roomCapacity= getUniqueArray(allRooms,"capacity");
   
    return (  
    <section className="filter-container">
        <form className="filter-form">
            <div className="form-group">
            {/* {type} */}
            <label for="type">Room Type</label>
            <select className="form-control" id="type" name="type" onChange={handleChange}>
             {roomsType.map((type,index)=> <option key={index} value={type}>{type}</option>)}
           </select>
           </div>

           <div className="form-group">
           {/* {capacity} */}
           <label for="capacity">Minimum Guests</label>
            <select className="form-control" id="capacity" name="capacity" onChange={handleChange}>
             {roomCapacity.map((capacity,index)=> <option key={index} value={capacity}>{capacity}</option>)}
           </select>
           </div>
            
           <div className="form-group">
           {/* {range price} */}
           <label for="price">Price up to {price}$</label>
            <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
             onChange={handleChange}></input>
           </div>

           <div className="form-group">
           {/* {size} */}
           <label for="size">Size</label>
           <div className="size-inputs">
            <input type="number" name="minSize" value={minSize} id="size" 
            className="size-input" onChange={handleChange}></input>

            <input type="number" name="maxSize" value={maxSize} id="size" 
            className="size-input" onChange={handleChange}></input>
            </div>
            </div>

           <div className="form-group">
            {/* {extras} */}
            <div className="single-extra">
              <input type="checkbox" name="breakfast" id="breakfast" 
               checked={breakfast} onChange={handleChange}></input>
               <label for="breakfast"><FaCoffee></FaCoffee> Breakfast</label>
            </div>

            <div className="single-extra">
                <input type="checkbox" name="pets" id="pets" 
                checked={pets} onChange={handleChange}></input>
                <label for="pets"><FaDog></FaDog> Pets</label>
            </div>
           </div>
            
            <div className="form-group">
            <button className="btn" onClick={handaleReasetFilters}>Reaset Filters</button>
            </div>
        </form>
    </section>);
}
 
export default FilterRooms;