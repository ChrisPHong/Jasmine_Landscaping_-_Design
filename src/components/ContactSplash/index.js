import "./Contact.css";
import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const Contact = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (errors.length > 0) {
      setShow(true);
      return;
    } else {
      console.log("sent");

      // emailjs.sendForm('service_qo7ioim', 'template_ybhyw45', e.target, 'bVwjn2fVYUy3phcPs')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

      // e.target.reset();
    }
  };

  useEffect(() => {
    let error = [];
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (firstName.length < 1) error.push("Provide A Name");
    if (firstName.replace(/\s/g, "").length < 4)
      error.push("Provide a Name with 3 characters");
    // if(lastName.length < 1) error.push('Provide A Last Name')
    // if(lastName.replace(/\s/g, '').length < 1) error.push('Provide a Last Name')
    if (regexEmail.test(email) < 1) error.push("Provide A Valid Email");
    if (phoneNumber.length < 0) error.push("Provide A Phone Number");
    if (phoneNumber.length != 10) error.push("Provide A Valid Phone Number");
    if (message.length < 0) error.push("Provide A Message");

    setErrors(error);
  }, [firstName, email, phoneNumber, message]);
  return (
    <div className="SplashContact-Container">
      {/* <div className="form-container"> */}
        <div>
          {show
            ? errors.map((error) => {
                return (
                  <>
                    <li style={{ color: "red" }}>{error}</li>
                  </>
                );
              })
            : null}
        </div>
        <form onSubmit={sendEmail} className="form-container">
          <input
            className="contact-input"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            name="first_name"
            placeholder="Name"
            required
          />

          <input
            className="contact-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            required
            placeholder="Email"
          />

          <input
            className="contact-input"
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
            type="numbers"
            name="phone"
            required
            placeholder="Phone Number"
          />

          <textarea
            className="contact-input textarea-input"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Brief description of project..."
            type="text"
            name="message"
            required
          />

          <input
            className="submit-button curvedButton"
            type="submit"
            value="Send Message"
          ></input>
        </form>
      {/* </div> */}
    </div>
  );
};

export default Contact;
