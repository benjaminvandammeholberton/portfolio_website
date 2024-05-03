import Button from "../components/button/Button";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="text-content">
        <div className="subtitle">Bonjour, je suis Benjamin Vandamme</div>
        <h1 className="title">
          Développeur <span>Web</span>
        </h1>
        <div className="description">
          Passioné par tout ce qui touche au web et à la programmation, je suis
          prêt à collaborer avec vous.
        </div>
        <div className="buttons-container">
          <a href="./assets/cv/BenjaminVandamme-DéveloppeurWeb2024.pdf">
            <Button variant="light">CV</Button>
          </a>
        </div>
      </div>
      <div className="photo-container">
        <img src="/assets/photo.jpg" alt="photo de Benjamin Vandamme" />
      </div>
    </div>
  );
};

export default Hero;
