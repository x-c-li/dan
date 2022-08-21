import Carousel from "better-react-carousel";
import React from "react";
import "./Reviews.scss";

function Reviews(props) {
  return (
    <div className="Reviews">
      <div className="reviews-text">{props.review}</div>
      <div className="reviews-name">{props.name}</div>
      <div className="reviews-date">{props.date}</div>
    </div>
  );
}

export default Reviews;
