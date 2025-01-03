import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav">
      <Link to="https://www.linkedin.com/in/katie-nink-smith-560805325/">
        <FaLinkedin />
      </Link>
      <br />
      <FaGithub />
      <br />
      {/* <button>PROJECTS</button>
      <button>ABOUT</button> */}
      <FaEnvelope />
    </div>
  );
}

export default Nav;
