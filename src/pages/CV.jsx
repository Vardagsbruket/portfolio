import { Link } from "react-router-dom";
import "./CV.css";
export const CV = () => {
  return (
    <div>
      <h4>
        For full CV, skills, recommendations and endorsements, please visit my{" "}
        <Link to="https://www.linkedin.com/in/dianaunden/" className="link">
          LinkedIn
        </Link>
        .
      </h4>
      <h3 className="cv-headline">Education</h3>
      <div className="education-container">
        <h4 className="cv-subheadline">JavaScript & React, Technigo </h4>
        <h5 className="duration">
          11 weeks fulltime, sep - dec 2023 | Grade: VG
        </h5>
        <h4>Learnings</h4>
        <ul>
          <li>
            Frontend development using JavaScript, React Hooks, Redux and more.
          </li>
          <li>
            JavaScript; for example DOM-manipulation, datatypes, functions,
            methods, scope, code structure and more.
          </li>
          <li>
            React; JSX, props, state, hooks, components, component lifecycle,
            React Router and more.
          </li>
          <li>
            Redux; Global state, Redux actions, Redux toolkit, slices &
            reducers, immutability m.m.
          </li>
          <li>What APIs are and how to use them for interactive websites.</li>
          <li>
            Industry-standard collaboration tools and ways-of-working such as
            GitHub, Agile, Notion, Slack, FigJam, mob programming and more.
          </li>
          <li>
            How technology can be used to make a positive impact on society.
          </li>
          <li>
            How to work better together with developers at your workplace.
          </li>
        </ul>
        <h4 className="cv-subheadline">Front end Developer, Sundsgården </h4>
        <h5 className="duration">5 months fulltime, aug 2023 - jan 2024</h5>
        <h4>Learnings</h4>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Figma</li>
          <li>Modern design libraries</li>
          <li>Modern frameworks</li>
          <li>Git/Github</li>
          <li>Visual Studio Code</li>
          <li>Programming techniques</li>
          <li>Agile work</li>
        </ul>
        <h4 className="cv-subheadline">
          MSc Globalization, environment and social change, Stockholm University{" "}
        </h4>
        <h5 className="duration">2015-2017</h5>

        <p>
          Focusing on analysing and understanding global structures and drivers
          behind environmental and social change. The program also included
          understanding large environmental systems and how the affect our
          climate and way of life. I did my MSc Thesis on the conditions for
          sustainability transitions in the building industry.{" "}
        </p>

        <h4 className="cv-subheadline">
          Ba Business and Combined Studies, Oxford Brookes University
        </h4>
        <h5 className="duration">2007 - 2010 | Award: First Class Honours</h5>
        <h4>Learnings</h4>
        <p>
          My Ba in Business and Combined Studies (International Relations and
          Spanish) contained business- and market strategy, communication and
          management. I took a special interest in business actors
          responsibility for the environment, sustainable development, poverty
          and safety.
        </p>
      </div>

      <h3 className="cv-headline">Work Experience</h3>
      <div className="work-container">
        <h4 className="cv-subheadline">
          Quality developer/Project manager, Upplands Väsby kommun{" "}
        </h4>
        <h5 className="duration">2016 - ongoing | Waste cycle department</h5>
        <h4>Responsibilities</h4>
        <ul>
          <li>
            Project manager within quality development, statistics and
            communication.
          </li>
          <li>
            Member of regional statistics- and quality development group within
            waste management.
          </li>
          <li>Responsible for contracts with procured entrepreneurs.</li>
        </ul>
      </div>
    </div>
  );
};
