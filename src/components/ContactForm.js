import React from "react";
import "./ContactForm.scss";
function ContactForm() {
  return (
    <div className="container">
      <form className="ContactForm" action="action_page.php">
        <div className="form-title">
          <label>Contact Me</label>
        </div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
        ></input>

        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email address..."
        ></input>

        <label for="subject">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
        ></textarea>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default ContactForm;
