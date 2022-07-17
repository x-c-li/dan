import React from "react";
import "./ContactForm.scss";
function ContactForm() {
  return (
    <div class="container">
      <form className="ContactForm" action="action_page.php">
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your Name..."
        ></input>

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
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
