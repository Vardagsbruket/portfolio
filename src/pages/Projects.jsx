import { Link } from "react-router-dom";
import "./Projects.css";
import Movies from "../assets/Movies.png";
import ReShare from "../assets/ReShare.png";
import Todo from "../assets/Todo.png";
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
          <p>Built with:</p>
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
        <Link
          to="https://stirring-florentine-c4bb3f.netlify.app/"
          className="link-image"
        >
          <img src={ReShare} alt="" className="project-image" />
        </Link>
      </div>
      <div className="project-card">
        <div className="project-text">
          <h3>Todo Web App</h3>
          <p>
            A todo app where you can add tasks, create projects with project
            tasks.
          </p>
          <p>Built with:</p>
          <ul>
            <li>React vite</li>
            <li>Redux</li>
            <li>Routes</li>
          </ul>
          <p>
            Built in collaboration with Filza Saleem and Sebastian Tigerschiöld.
          </p>
          <p>
            View it on:{" "}
            <Link
              to="https://github.com/Vardagsbruket/Technigo_project-todos-redux"
              className="link"
            >
              Github
            </Link>{" "}
            or{" "}
            <Link to="https://gilded-swan-627c20.netlify.app/" className="link">
              live
            </Link>
          </p>
        </div>
        <Link
          to="https://gilded-swan-627c20.netlify.app/"
          className="link-image"
        >
          <img src={Todo} alt="" className="project-image" />
        </Link>
      </div>

      <div className="project-card">
        <div className="project-text">
          <h3>Swedish quiz</h3>
          <p>
            A quiz about Sweden with timed questions, points and feedback on
            result.
          </p>
          <p>Built with:</p>
          <ul>
            <li>React Vite</li>
            <li>React Redux</li>
            <li>React Hooks</li>
            <li>CSS</li>
            <li>Responsive design</li>
          </ul>
          <p>Built in collaboration with Filza Saleem and Kai Lee Hernandez.</p>
          <p>
            View it on:{" "}
            <Link
              to="https://github.com/Vardagsbruket/technigo_project-redux-quiz"
              className="link"
            >
              Github
            </Link>{" "}
            or{" "}
            <Link to="https://funn-quizz.netlify.app/" className="link">
              live
            </Link>
          </p>
        </div>
        <div className="project-image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="project-card">
        <div className="project-text">
          <h3>Happy thoughts</h3>
          <p>A Twitter-like app where you can share and like happy thoughts,</p>
          <p>Built with:</p>
          <ul>
            <li>React Vite</li>
            <li>React Hooks</li>
            <li>React State</li>
            <li>Fetching and posting data to an API</li>
            <li>CSS</li>
            <li>Responsive design</li>
          </ul>
          <p>
            Built in collaboration with Pernilla Sterner and Sebastian
            Tigerschiöld.
          </p>
          <p>
            View it on:{" "}
            <Link
              to="https://github.com/Vardagsbruket/technigo_project-happy-thoughts-vite"
              className="link"
            >
              Github
            </Link>{" "}
            or{" "}
            <Link
              to="https://technigo-project-happy-thoughts-app.netlify.app/"
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
      <div className="project-card">
        <div className="project-text">
          <h3>Movies</h3>
          <p>
            A site where you can see popular, upcoming and top-rated movies, as
            well as rating and information about the movies.{" "}
          </p>
          <p>Built with:</p>
          <ul>
            <li>React Vite</li>
            <li>React Hooks</li>
            <li>React Routes</li>
            <li>Fetching data from themoviedb.org API</li>
            <li>CSS</li>
            <li>Responsive design</li>
          </ul>

          <p>
            View it on:{" "}
            <Link
              to="https://github.com/Vardagsbruket/technigo_project-movies-vite"
              className="link"
            >
              Github
            </Link>{" "}
            or{" "}
            <Link
              to="https://genuine-pasca-c3840a.netlify.app/"
              className="link"
            >
              live
            </Link>
          </p>
        </div>
        <Link
          to="https://genuine-pasca-c3840a.netlify.app/"
          className="link-image"
        >
          <img src={Movies} alt="" className="project-image" />
        </Link>
      </div>
    </div>
  );
};
