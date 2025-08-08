import { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [isEmailValid, setIsEmailValid] = useState();
  const [isNameValid, setIsNameValid] = useState();

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email id required");
      setIsEmailValid(false);
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email id");
      setIsEmailValid(false);
    } else {
      setEmailError("");
      setIsEmailValid(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "name") {
      const nameRegex = /^[A-Za-z\s]+$/;
      if (nameRegex.test(value.trim())) {
        setFormValues({ ...formValues, [name]: value });
        setNameError("");
        setIsNameValid(false);
      } else if (value.length === 1) {
        setFormValues({ ...formValues, [name]: "" });
        setNameError("");
        setIsNameValid(false);
      } else {
        setNameError("Please enter correct name");
        setIsNameValid(true);
      }
    }

    if (name == "phone") {
      let phoneValue = value.replace(/\D/g, "").slice(0, 10);
      if (phoneValue.startsWith("0")) {
        phoneValue = phoneValue.slice(1);
      }
      setFormValues({ ...formValues, [name]: phoneValue });
      if (phoneValue.length < 10 && phoneValue.length === 0) {
        setPhoneError("Please enter a valid 10 digit phone number");
      } else {
        setPhoneError("");
      }
    }

    if (name == "email") {
      setFormValues({ ...formValues, [name]: value });
      validateEmail(value);
    }

    if (name == "message") {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const Submit = (e) => {
    e.preventDefault();
    if (formValues.name === "") {
      alert("Please enter your name");
      onfocus(formValues.name);
    } else if (formValues.phone === "") {
      alert("Please enter your phone number");
      onfocus(formValues.phone);
    } else if (formValues.email === "") {
      alert("Please enter your email");
      onfocus(formValues.email);
    } else if (formValues.message === "") {
      alert("Please enter your message");
      onfocus(formValues.message);
    } else {
      alert("Form submitted successfully!");
      window.location.reload();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            {" "}
            im currently available to take new projects, so feel free to send me
            a message about anything tha you want me to work on. You can contact
            anytime.{" "}
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>xyz@mail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>9876543219</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Bangalore, KA, India</p>
            </div>
          </div>
        </div>
        <div className="container">
          <form className="contact-right" onSubmit={Submit}>
            <div className="content">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formValues.name}
                onChange={handleChange}
              />
              <div
                style={{
                  minHeight: "20px",
                  marginTop: "5px",
                }}
              >
                {nameError && (
                  <p style={{ margin: 0, fontSize: "14px", color: "red" }}>
                    {nameError}
                  </p>
                )}
              </div>
            </div>
            <div className="content">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your Phone"
                value={formValues.phone}
                onChange={handleChange}
              />
              <div
                style={{
                  minHeight: "20px",
                  marginTop: "5px",
                }}
              >
                {phoneError && (
                  <p style={{ margin: 0, fontSize: "14px", color: "red" }}>
                    {phoneError}
                  </p>
                )}
              </div>
            </div>
            <div className="content">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your Email"
                value={formValues.email}
                onChange={handleChange}
              />
              <div
                style={{
                  minHeight: "20px",
                  marginTop: "5px",
                }}
              >
                {emailError && (
                  <p style={{ margin: 0, fontSize: "14px", color: "red" }}>
                    {emailError}
                  </p>
                )}
              </div>
            </div>
            <div className="content">
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your Message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <button
              className="contact-submit"
              type="submit"
              id="button1"
              onClick={Submit}>
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
