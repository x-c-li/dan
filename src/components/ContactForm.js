import React, { useState } from "react";
import "./ContactForm.scss";
// import { db } from "../firebase/firebaseConfig";

function ContactForm() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [loader, setLoader] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoader(true);

  //   //db collection in firebase - we named it contacts here
  //   db.collection("email")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //     })
  //     .then(() => {
  //       setLoader(false);
  //       alert("Your message has been submitted");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  return (
    <div className="container">
      <form
        className="ContactForm"
        action="https://formsubmit.co/a69aa978cd7f2af9071bd0bbee8d0fe3"
        method="POST"
      >
        <div className="form-title">
          <label>Contact Me</label>
        </div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          // value={name}
          // onChange={(e) => setName(e.target.value)}
        ></input>

        <label>Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email address..."
          required
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
