import {React, useContext,useState} from 'react';
import { Context } from '../../context';
import '../Reviews/reviews.css';

const Reviews = ({reviews}) => {

 const context= useContext(Context);
 const [review, setReview] = useState("");
 
function handleChange(e){
  const review= e.target.value;
  setReview(review);
 }

    return ( 
      <section>
        <div className="review-container">
          <div>
                {reviews.map(singleReview=> <p className="single-review">{singleReview}</p>)}
          </div>
        </div>
        <form>
          <div><input type="text" value={review} onChange={handleChange}></input></div>
          <div><button>Applay</button></div>
          </form>
        </section>
     );
}
 
export default Reviews;