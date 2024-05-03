import SectionTitle from "../components/section-title/SectionTitle";
import "./education.scss";

const Education = () => {
  return (
    <div className="education">
      <SectionTitle title="Dîplomes" />
      <div className="container">
        <div className="item">
          <div className="dot"></div>
          <p>
            Titre RNCP Niveau 6 -{" "}
            <span>Concepteur développeur d'applications</span>
          </p>
          <a href="https://www.holbertonschool.fr">Holberton School Laval</a>
          <p>En cours de préparation (Octobre 2024)</p>
        </div>
        <div className="item">
          <div className="dot"></div>
          <p>
            DEUG <span>Économie et gestion</span>
          </p>
          <a href="https://www.univ-lille.fr/">Université Lille 1</a>
          <p>2011</p>
        </div>
        <div className="item">
          <div className="dot"></div>
          <p>
            Baccalauréat <span>Série scientifique</span>
          </p>
          <a href="https://lgt-auguste-angellier-dunkerque.59.ac-lille.fr/">
            Lyée Auguste Angellier Dunkerque
          </a>
          <p>2009</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
