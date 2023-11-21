import { github } from "../assets";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="card"
      >
        <div className="cardinfo">
          <img src={image} alt={name} />

          <div className="content">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="giticon"
            >
              <img
                src={github}
                alt={github}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="info">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="projects">
      <motion.div variants={textVariant()}>
        <p className="subTitle">My Work</p>
        <h2 className="title">Projects</h2>
      </motion.div>

      <div className="subtext">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="project">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories.It Reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="projectcards">
        {projects.map((projects, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...projects} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
