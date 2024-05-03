import SectionTitle from "../components/section-title/SectionTitle";
import "./story.scss";

const Story = () => {
  return (
    <div className="story" id="story">
      <SectionTitle title="Story" />
      <p>
        Après une décennie à parcourir le globe en tant que manager dans
        l'hôtellerie et la restauration haut de gamme, j'ai décidé de faire un
        virage professionnel vers mes premières passions : les nouvelles
        technologies et l'informatique.
      </p>
      <p>
        Après avoir commencer l'apprentissage de la programmation en
        autodidacte, j'ai rejoint, en janvier 2023, l'école{" "}
        <a href="https://www.holbertonschool.fr">Holberton School</a>, connue
        pour son système d'apprentissage basé sur la réalisation de projets et
        la collaboration entre pairs. Depuis lors, chaque jour est une nouvelle
        occasion d'écrire du code.
      </p>
      <p>
        Mon projet personnel phare,{" "}
        <a href="https://gardencompanion.io">Garden Companion</a>, combine ma
        passion pour le jardinage avec mes compétences en développement. Cette
        application web, actuellement en version bêta, vise à aider les
        jardiniers débutants et confirmés dans l'organisation de leur potager,
        tout en favorisant le partage de connaissances et de conseils entre
        utilisateurs.
      </p>
      <p>
        Parallèlement, j'ai eu l'opportunité de réaliser des sites web pour des
        professionnels, dont deux restaurants à Laval.
      </p>
      <p>
        À présent, je suis à la recherche d'une entreprise où je pourrais
        continuer à développer mes compétences et m'investir pleinement.
      </p>
      <p>
        Pour l'avenir, l'architecture logicielle et l'intelligence artificielle
        demeurent mes domaines de prédilection dans le vaste monde du
        développement.
      </p>
    </div>
  );
};

export default Story;
