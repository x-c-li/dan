import React from "react";
import "./ContactForm.scss";
function ContactForm() {
  return (
    <div className="container">
      <div className="contact-info">
        <h3>Contact Me</h3>
        <p>If your issues is not listed above, please contact me at…</p>
        <h5>Email: dan@dan.com</h5>
        <h5>Phone Number: 306-123-4567</h5>
        <h5>Address: 123 Street St, Saskatoon SK</h5>
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
      <form className="ContactForm" action="action_page.php">
        <h3>Send Me a Message</h3>
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
