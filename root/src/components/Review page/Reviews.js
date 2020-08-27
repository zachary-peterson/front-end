import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'

import ReviewList from './Movies/MovieList';
import Review from './Movies/Movie';

const Reviews = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    const getReviews = () => {
      axios
      .get("https://quotes15.p.rapidapi.com/quotes/random/", {
        headers: {
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"quotes15.p.rapidapi.com",
        "x-rapidapi-key":"97f4e00602mshd2de2b3ab613c4bp126b61jsn5d75c08263e2",
        "useQueryString":true
        },params:{
        "language_code":"en"
        }
    })
      .then((response)=>{
          console.log(response)
      })
      .catch((error)=>{
          console.log(error)
      })
    }
    getReviews();
  }, []);


  return (
    <div>
      <Switch>
        <Route path='/'>
          <ReviewList reviews={reviewList}/>
        </Route>
        <Route path = '/reviews/:id'>
          <Review />
        </Route>
      </Switch>
    </div>
  );
};

export default Reviews;