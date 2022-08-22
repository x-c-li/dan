import React, { useRef } from "react";
import "./ContactForm.scss";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        // console.log(typeof process.env.REACT_APP_EMAILJS_SERVICE_ID),
        // console.log("serviceID", process.env.REACT_APP_EMAILJS_SERVICE_ID),
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        // console.log(typeof process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
        // console.log("templateid", process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        // console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        // console.log(typeof process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="contact-info">
        <h1>Contact Me</h1>

        <p>Email: dan@dan.com</p>
        <p>Phone Number: 306-123-4567</p>
        <p>Address: 123 Street St, Saskatoon SK</p>
        <h3>Mail in Instructions</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis
          dignissim nibh, nec feugiat enim facilisis in. Fusce fringilla sed
          lacus et feugiat. Sed nulla augue, imperdiet ut ante in, congue
          maximus urna. Etiam porttitor neque non aliquam posuere. Nullam
          sagittis magna a nunc lobortis pretium. Phasellus ac pretium diam.
          Pellentesque nec diam vel nisl commodo venenatis eget ac dolor.
        </p>
      </div>
      <form className="ContactForm" ref={form} onSubmit={sendEmail}>
        <h1>Email Me</h1>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="user_name" //must match template in emailjs
          placeholder="Your name.."
        />

        <label>Email Address</label>
        <input
          type="text"
          id="email"
          name="user_email"
          placeholder="Your email address..."
          required
        />

        <label>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
          required
        ></textarea>

        <button type="submit" value="Send">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
