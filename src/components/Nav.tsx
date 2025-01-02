import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Nav() {
  return (
    <div className="nav">
      <FaLinkedin />
      <FaGithub />
      {/* <button>PROJECTS</button>
      <button>ABOUT</button> */}
      <FaEnvelope />
    </div>
  );
}

export default Nav;
