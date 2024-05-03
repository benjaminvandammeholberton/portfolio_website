import Contact from "../components/contact/Contact";
import Nav from "../components/nav/Nav";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        Benjamin Vandamme<span className="dot">.</span>
      </div>
      <Nav />
      <Contact />
    </div>
  );
};

export default Header;
