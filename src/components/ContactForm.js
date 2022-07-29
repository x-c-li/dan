import React from "react";
import "./ContactForm.scss";
function ContactForm() {
  return (
    <div className="container">
      <form className="ContactForm" action="action_page.php">
        <div className="form-title">
          <label>Contact Me</label>
        </div>
        <h3>If your issues is not listed above, please contact me at…</h3>
        <h3>Email: dan@dan.com</h3>
        <h3>Phone Number: 306-123-4567</h3>
        <h3>Address: 123 Street St, Saskatoon SK</h3>
        {/* <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
        ></input> */}

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
      <h3>Mail in</h3>
      <h5>instructions</h5>
    </div>
  );
}

export default ContactForm;
