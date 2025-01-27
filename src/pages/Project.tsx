import Header from "../components/Header";
import ProjectList from "../components/Projects";
import AboutSkills from "../components/AboutSkills";
import Contact from "../components/Contact";

function Project() {
  return (
    <div className="container">
      <Header />
      <ProjectList />
      <AboutSkills />
      <Contact />
    </div>
  );
}

export default Project;
