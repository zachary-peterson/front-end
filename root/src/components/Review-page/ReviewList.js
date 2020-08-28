import React  , {useState}  from 'react';
import { Route, Link } from "react-router-dom";

const ReviewList = props => {
  const [showReviews, setShowReviews] = useState(false)
  const onClick = () => setShowReviews(true)
  return (
    <div className="review-list"> 
        <button onClick = {onClick}> <b>Click for Recent Reviews for eSchool in the Cloud </b></button>
      {props.reviews.map((review, index) => (
          <div>
            {showReviews
                ? <ReviewDetails key={index} review={review}/>
                : null 
            }
          </div>
      ))}
    </div>
  );
}


function ReviewDetails({ review }) {
  const {quoteText, quoteAuthor, _id} = review;
    console.log(review)
  return (
  
    <div className="review-card">
        <i className="review"> {quoteText}</i>
    <Link to={`/reviews/${_id}`}>
        <div className="reviewer">
            <strong>{quoteAuthor}</strong>, 
            {Math.random() < 0.5 
                ?<span>Volunteer</span>
                :<span>Student</span>}
        </div>
      </Link>
    </div>
  
  );
}

export default ReviewList;