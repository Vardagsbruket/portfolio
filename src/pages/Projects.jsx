import { Link } from "react-router-dom";
import "./Projects.css";
export const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <div className="project-text">
          <h3>ReShare</h3>
          <p>
            A resource sharing app made where you can lend, give away or borrow
            things from your neighbours.
          </p>
          <h5>Built with:</h5>
          <ul>
            <li>React vite</li>
            <li>Redux</li>
            <li>Routes</li>
            <li>Mongo DB</li>
          </ul>
          <p>Built in collaboration with Filza Saleem and Joona Miettinen</p>
          <p>
            View it on:{" "}
            <Link
              to="https://github.com/Vardagsbruket/ReShare"
              className="link"
            >
              Github
            </Link>{" "}
            or{" "}
            <Link
              to="https://stirring-florentine-c4bb3f.netlify.app/"
              className="link"
            >
              live
            </Link>
          </p>
        </div>
        <div className="project-image">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};
