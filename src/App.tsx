import { Route, Routes } from "react-router";
import Project from "./pages/Project";
import "./App.css";
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
