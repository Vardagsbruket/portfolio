import "./ContactForm.css";
export const ContactForm = () => {
  return (
    <div className="form-container">
      <h2>Send me a message</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="form"
      >
        <input type="hidden" name="form-name" value="contact" />

        <label>
          Your name:
          <input
            type="text"
            name="name"
            placeholder="Whats your name?"
            required
          />
        </label>
        <label>
          Your email:
          <input
            type="email"
            name="email"
            placeholder="Whats your email?"
            required
          />
        </label>
        <label>
          Your message:
          <textarea
            name="message"
            placeholder="Write your message here."
            required
          ></textarea>
        </label>
        <div data-netlify-recaptcha="true"></div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
