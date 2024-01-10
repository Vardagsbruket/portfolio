import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <h3>Contact me on:</h3>
        <Link to="https://github.com/Vardagsbruket" className="links">
          <i className="fa-brands fa-github"></i>
        </Link>
        {""}
        <Link to="https://www.linkedin.com/in/dianaunden/" className="links">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>
      <div>
        <p>Created by Diana Undén in Vite, 2024</p>
      </div>
    </div>
  );
};
