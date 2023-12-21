import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <h3>Contact me</h3>
      <p>Email: diana.unden@gmail.com</p>
      <p>
        Github:{" "}
        <Link to="https://github.com/Vardagsbruket" className="links">
          github.com/Vardagsbruket
        </Link>
      </p>
      <p>
        LinkedIn:{" "}
        <Link to="https://www.linkedin.com/in/dianaunden/" className="links">
          linkedin.com/in/dianaunden/
        </Link>
      </p>
    </div>
  );
};
