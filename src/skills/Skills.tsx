import SectionTitle from "../components/section-title/SectionTitle";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <SectionTitle title="Skills" />
      <div className="container">
        <div className="sub-container">
          <h3>Backend</h3>
          <ul>
            <li>Python (Flask + FastApi)</li>
            <li>NodeJs (Express JS)</li>
            <li>MySql</li>
            <li>MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className="sub-container">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS (Bootstrap, Tailwind), SCSS</li>
            <li>JavaScript (React, jQuery)</li>
            <li>i18n</li>
          </ul>
        </div>
        <div className="sub-container">
          <h3>Tools</h3>
          <ul>
            <li>Git + GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Webpack</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="sub-container">
          <h3>Soft Skills</h3>
          <ul>
            <li>Collaboration</li>
            <li>Curiosité</li>
            <li>Enthousiasme</li>
            <li>Persévérence</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
