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
            <NavLink to="/cv" className="button-header">
              <li className="nav-li">CV </li>
            </NavLink>

            <NavLink to="/contact" className="button-header">
              <li className="nav-li">Contact</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
