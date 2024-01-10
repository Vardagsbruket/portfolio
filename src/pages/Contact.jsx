import { Link } from "react-router-dom";
import { ContactForm } from "../components/ContactForm";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2>Let´s talk!</h2>
        <p>
          I would really like to hear from you. Send me a message using the form
          on the side or got to my LinkedIn or Github to know more about me and
          the projects I´m currently working on. I'm open to opportunities and
          happy to talk!{" "}
        </p>
        <h3>I´m looking forward to hear from you!</h3>
        <h3>//Diana</h3>
        <div className="contact-social-media">
          <Link to="https://github.com/Vardagsbruket" className="links">
            <i className="fa-brands fa-github"></i>
          </Link>
          {""}
          <Link to="https://www.linkedin.com/in/dianaunden/" className="links">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
