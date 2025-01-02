import Nav from "./components/Nav";
import Header from "./components/Header";
import ProjectList from "./components/Projects";
import AboutSkills from "./components/AboutSkills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Nav />
      <Header />
      <ProjectList />
      <AboutSkills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
