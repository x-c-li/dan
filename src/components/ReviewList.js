import React from "react";
import Carousel from "better-react-carousel";
import Reviews from "./Reviews";
function ReviewList(props) {
  const reviews = [
    {
      date: "March 45, 2847",
      name: "Bob",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor asdf slkeijs lasdkjfwefo. alskwef lkasdfjwdn asdfkjwel ldkjfwjelkjf wlijej.",
    },
    {
      date: "March 45, 2847",
      name: "Charles",
      review:
        " amet, consectetur adipiscing elit. Donec dolor asdf slkeijs lasdkjfwefo. alsk",
    },
    {
      date: "March 45, 2847",
      name: "Sara",
      review:
        "t. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis vestibulum semper. Quisque sed lectus porta, fringilla purus semper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent e",
    },
    {
      date: "March 45, 2847",
      name: "Johnny",
      review:
        "emper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent euismod sit amet justo",
    },
    {
      date: "March 45, 2847",
      name: "Rebecca",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor nulla, aliquam quis vulputate id, dapibus non eros. Maecenas blandit sagittis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec facilisis vestibulum semper. Quisque sed lectus porta, fringilla purus semper, iaculis purus. In justo nulla, dapibus tempus posuere accumsan, tincidunt ac tellus. Ut tempor lacus sit amet dolor tincidunt facilisis. Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. Praesent mattis vestibulum orci eget aliquet. Praesent euismod sit amet justo nec ultrices. Maecenas volutpat laoreet felis, non consectetur nisl. Praesent mauris ante, venenatis quis maximus vitae, fringilla eu metus.",
    },
    {
      date: "March 45, 2847",
      name: "Khalid",
      review:
        " Sed vel dolor bibendum, facilisis massa sit amet, pharetra orci. ",
    },
    {
      date: "March 45, 2847",
      name: "Rena",
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
    <div>
      <Carousel cols={1} rows={1} gap={5} loop>
        {reviews.map((review) => (
          <Carousel.Item>
            <Reviews
              date={review.date}
              name={review.name}
              review={review.review}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
  // return <div>{review}</div>;
}

export default ReviewList;
