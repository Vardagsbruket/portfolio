import FotoDiana from "../assets/Foto-Diana.jpeg";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h4>Nice to meet you,</h4>
          <h2>I'm Diana</h2>
          <h4>a junior Web Developer</h4>

          <section>
            <p>
              Here you can find some more information about my experience and
              skills as a developer.
            </p>
          </section>
        </div>
        <div className="foto-container">
          <img src={FotoDiana} alt="Foto of Diana" className="foto-home" />
        </div>
      </div>
      <div className="more-info">
        <div className="card">
          <h3>Languages</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="card">
          <h3>Tools</h3>
          <ul>
            <li>React</li>
            <li>Sass</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="card">
          <h3>Learning</h3>
          <ul>
            <li>Java</li>
            <li>React Redux</li>
          </ul>
        </div>
      </div>
    </>
  );
};
