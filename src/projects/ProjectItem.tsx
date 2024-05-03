import { useEffect, useState } from "react";
import "./projectItem.scss";

type Props = {
  id: number;
  title: string;
  subtitle: string;
  gridColumn: string;
  background: string;
  image: string;
  link: string[];
  gitHub: string;
  technologies: string[];
};
const ProjectItem = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="project"
      style={{
        gridColumn: props.gridColumn,
      }}
    >
      <div className="container" style={{ background: props.background }}>
        <div className={`card-container ${isActive && "active"}`}>
          <div className="card" onClick={() => setIsActive(!isActive)}>
            <div className="front">
              <img src={props.image} alt={props.title} />
            </div>
            <div className="back">
              <h3>Technologies :</h3>
              <ul>
                {props.technologies.map((technologie, index) => {
                  return <li key={index}>{technologie}</li>;
                })}
              </ul>
              <a href={props.gitHub} className="github-link">
                <img
                  style={{ width: "20px" }}
                  src="/assets/icons/github.png"
                  alt="GitHub link"
                />
                Lien GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-content">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        {props.link.map((link, index) => {
          return link ? (
            <div key={index}>
              <a href={link}>{link}</a>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
