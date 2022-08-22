import React from "react";
import Carousel from "better-react-carousel";
import Reviews from "./Reviews";
import "./ReviewList.scss";
import avatar001 from "./imgs/avatar-001.png";
import avatar002 from "./imgs/avatar-002.png";
import avatar003 from "./imgs/avatar-003.png";
import avatar004 from "./imgs/avatar-004.png";
import avatar005 from "./imgs/avatar-005.png";
import avatar006 from "./imgs/avatar-006.png";
import avatar007 from "./imgs/avatar-007.png";

function ReviewList(props) {
  const reviews = [
    {
      date: "March 45, 2847",
      name: "Bob",
      avatar: avatar001,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor asdf slkeijs lasdkjfwefo. alskwef lkasdfjwdn asdfkjwel ldkjfwjelkjf wlijej.",
    },
    {
      date: "March 45, 2847",
      name: "Charles",
      avatar: avatar002,
      review:
        " amet, consectetur adipiscing elit. Donec dolor asdf slkeijs lasdkjfwefo. alsk",
    },
    {
      date: "March 45, 2847",
      name: "Sara",
      avatar: avatar003,
      review:
        "t. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis vestibulum semper. Quisque sed lectus porta, fringilla purus semper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent e",
    },
    {
      date: "March 45, 2847",
      name: "Johnny",
      avatar: avatar004,
      review:
        "emper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent euismod sit amet justo",
    },
    {
      date: "March 45, 2847",
      name: "Rebecca",
      avatar: avatar005,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nulla, aliquam quis vulputate id, dapibus non eros. Maecenas blandit sagittis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis vestibulum semper. Quisque sed lectus porta, fringilla purus semper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent euismod sit amet justo nec ultrices. Maecenas volutpat laoreet feli",
    },
    {
      date: "March 45, 2847",
      name: "Khalid",
      avatar: avatar006,
      review:
        " Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. ",
    },
    {
      date: "March 45, 2847",
      name: "Rena",
      avatar: avatar007,
      review:
        " Maecenas volutpat laoreet felis, non consectetur nisl. Praesent mauris ante, venenatis quis maximus vitae, fringilla eu metus.",
    },
  ];

  // const review = reviews.map((review) => {
  //   return (
  //     <div>
  //       <Reviews date={review.date} name={review.name} review={review.review} />
  //     </div>
  //   );
  // });

  return (
    <div className="ReviewList">
      <h1>Customer Reviews</h1>
      <Carousel cols={3} rows={1} gap={5} loop showDots>
        {reviews.map((review) => (
          <Carousel.Item>
            <Reviews
              date={review.date}
              name={review.name}
              review={review.review}
              avatar={review.avatar}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
  // return <div>{review}</div>;
}

export default ReviewList;
