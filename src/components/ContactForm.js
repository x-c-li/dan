import React from "react";
import "./ContactForm.scss";
import { db } from "../firebase/firebaseConfig";

function ContactForm() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        fname: fname,
        lname: lname,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFname("");
    setLname("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container">
      <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="form-title">
          <label>Contact Me</label>
        </div>
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your first name..."
          onChange={(e) => setLname(e.target.value)}
        ></input>

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
          onChange={(e) => setLname(e.target.value)}
        ></input>

        <label for="email">Email Address</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Your email address..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label for="subject">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something..."
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        {/* <input type="submit" value="Submit"></input> */}
        <button
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
