import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import ReviewDetails from './ReviewList';
import ReviewList from './ReviewList';

function Reviews() {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const getReviews = () => {
      axios
      .get("https://quote-garden.herokuapp.com/api/v2/genre/education?page=1&limit=10")
      .then((response)=>{
          console.log(response.data.quotes)
            setReviewList(response.data.quotes)
      })
      .catch((error)=>{
          console.log(error)
      })
    }
    getReviews();
  }, []);

  if (!reviewList) {
    return <div>Loading reviews...</div>;
  }

  return (
    <Router>
     <div>
      <Switch>
        <Route path='/'>
          <ReviewList reviews={reviewList}/>
        </Route>
        <Route path = '/reviews/:id'>
          <ReviewDetails/>
        </Route>
      </Switch> 
    </div>
    </Router>
  );
};

export default Reviews;
