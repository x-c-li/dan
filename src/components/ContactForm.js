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
        // console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY),
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
      <form className="ContactForm" ref={form} onSubmit={sendEmail}>
        <div className="form-title">
          <label>Contact Me</label>
        </div>
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
