import("./nav.scss");

const Nav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    let offset;
    if (element) {
      if (id !== "home") {
        offset = 0;
      }
      offset = -100;
      window.scrollTo({
        top: element.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="nav">
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("project")}>Projets</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("story")}>Story</li>
      </ul>
    </div>
  );
};

export default Nav;
