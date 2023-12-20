import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <NavLink to="/" className="logo-header">
          <h1>Diana Undén</h1>
          <h3>Portfolio</h3>
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
              <NavLink to="/projects" className="button-header">
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
