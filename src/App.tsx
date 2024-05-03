import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Story from "./story/Story";
import "./styles/global.scss";
function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Story />
      </div>
      <Footer />
    </div>
  );
}

export default App;
