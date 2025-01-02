import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaSlack,
  FaReact,
  FaNode,
  FaUnsplash,
  FaNpm,
  FaGit,
  FaBug,
  FaTerminal,
  FaCodeBranch,
} from "react-icons/fa";
import { IconBrandMongodb } from "@tabler/icons-react";
function AboutSkills() {
  return (
    <div className="divAboutSkills">
      <div className="aboutSkills">
        <h2>About Me!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta
          debitis, repudiandae illo aliquam quidem culpa recusandae earum
          assumenda adipisci eius dolore aut ratione voluptatum laboriosam velit
          consequuntur perspiciatis tempore.
        </p>
      </div>
      <div className="aboutSkills">
        <h3>Technical Skills</h3>
        <ul className="list">
          <li>
            <FaJs />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaGit />
          </li>
          <li>
            <FaSlack />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaNode />
          </li>
          <li>
            <FaNpm />
          </li>
          <li>
            <FaBug />
          </li>
          <li>
            <FaTerminal />
          </li>
          <li>
            <FaCodeBranch />
          </li>
          <li>
            <IconBrandMongodb stroke={2} />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <FaUnsplash />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutSkills;
