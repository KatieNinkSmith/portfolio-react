import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

function Nav() {
  return (
    <div className="nav">
      <div>
        <img
          id="logo"
          src="../public/logo.png"
          alt="Orange and purple logo with less then and greater then brackets and the letters K N S"
        />
      </div>
      <div id="navLinks">
        <Link to="https://www.linkedin.com/in/katie-nink-smith-560805325/">
          <FaLinkedin />
        </Link>
        <br />
        <Link to="https://github.com/KatieNinkSmith">
          <FaGithub />
        </Link>
        <br />
        {/* <button>PROJECTS</button>
      <button>ABOUT</button> */}
        <FaEnvelope />
      </div>
    </div>
  );
}

export default Nav;
