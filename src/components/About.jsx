import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc/index.js";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="cards">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="content"
        >
          <img src={icon} alt="" />
          <h3>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="overview">
      <motion.div variants={textVariant()}>
        <p className="subTitle">Introduction</p>
        <h2 className="title">Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}>
        As a proficient frontend web developer, I bring expertise in multiple
        languages, and a strong command of popular frameworks such as React. My
        experience extends to crafting dynamic and responsive user interfaces,
        leveraging the latest technologies to build interactive and visually
        compelling websites. I excel in collaborating closely with clients to
        understand their needs, translating requirements into efficient and
        scalable frontend solutions. With a keen eye for user experience, I aim
        to create intuitive, user-friendly designs that address real-world
        challenges."
      </motion.p>

      <div className="cards-container">
        {/* {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))} */}

        {services.map((service, index) => (
          <ServiceCard
            key={`${service.title}-${index}`}
            index={index}
            {...service}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
