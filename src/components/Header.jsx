import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/" className="logo-header">
          <h1>Portfolio</h1>
          <h4>Diana Undén</h4>
        </NavLink>
      </div>
      <div>
        <nav>
          <ul className="nav-ul">
            <li className="nav-li">
              <NavLink to="/cv" className="button-header">
                CV
              </NavLink>
            </li>
            <li className="nav-li">
              <NavLink to="/contact" className="button-header">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
