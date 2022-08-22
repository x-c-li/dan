import React from "react";
import "./Reviews.scss";
import ReactReadMoreReadLess from "react-read-more-read-less";

function Reviews(props) {
  return (
    <div className="Reviews">
      <div className="reviews-text">
        <ReactReadMoreReadLess
          charLimit={150}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          readMoreClassName="read-more"
          readLessClassName="read-more"
        >
          {props.review}
        </ReactReadMoreReadLess>
      </div>
      <div className="reviews-reviewer-info">
        <div>
          <div className="reviews-name">{props.name}</div>
          <div className="reviews-date">{props.date}</div>
        </div>
        <img className="reviews-img" src={props.avatar} />
      </div>
    </div>
  );
}

export default Reviews;
