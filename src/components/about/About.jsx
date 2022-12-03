import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
// import {skills} from '../data/about_data'
import { motion } from "framer-motion";
import "./about.css";
import { useStateContext } from "../../contexts/ContextProvider";
import { service } from "../data/config";
const about_variant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

const About = () => {
  const [skillData, setSkillData] = useState([]);
  const [skillHeader, setSkillHeader] = useState("");
  const { showLoader, hideLoader } = useStateContext();
  const apiSkills = async () => {
    showLoader();
    await fetch(
      service.portfolio.about.url+"?user=1"
    )
      .then((response) => response.json())
      .then(({ data }) => {
        setSkillData(data);
      });
    await fetch(
      service.portfolio.about.url+"-header?user=1"
    )
      .then((response) => response.json())
      .then(({ data }) => {
        setSkillHeader(data.header);
        hideLoader();
      });
  };
  useEffect(() => {
    if (skillData.length === 0) {
      apiSkills();
    }
    // eslint-disable-next-line
  }, [skillData]);
  return (
    <motion.div
      className="about"
      variants={about_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h6 className="about__intro">{skillHeader}</h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skillData.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
