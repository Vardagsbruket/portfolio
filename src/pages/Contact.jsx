import { ContactForm } from "../components/ContactForm";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2>Let´s talk!</h2>
        <p>
          I would really like to hear from you. Send me a message using the form
          on the side or got to my LinkedIn to know more about me. I'm open to
          opportunities and happy to talk!{" "}
        </p>
        <h3>I´m looking forward to hear from you!</h3>
      </div>
      <ContactForm />
    </div>
  );
};
