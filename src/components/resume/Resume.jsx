import React, { useEffect, useState } from "react";
import Bar from "./Bar";
import { motion } from "framer-motion";
import "./resume.css";
import { useStateContext } from "../../contexts/ContextProvider";
import moment from "moment/moment";

const resume_variant = {
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
const Resume = () => {
  const [resume, setResume] = useState({ experiences: [], skills: [] });
  const { showLoader, hideLoader } = useStateContext();
  const apiLanguage = async () => {
    showLoader();
    await fetch(
      "https://portfolio-user-service.herokuapp.com/api/portfolio/resume?user=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setResume({
          experiences: data.resume.experiences ?? [],
          skills: data.resume.skillSet ?? [],
        });
        hideLoader();
      });
  };
  useEffect(() => {
    if (resume.experiences.length === 0) {
      apiLanguage();
    }
    console.log("Resume", resume);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resume]);
  console.log("api", Object.entries(resume.skills));
  console.log("api2", resume.skills);
  return (
    <motion.div
      className="container resume"
      variants={resume_variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div>
            <div className="resume-card__body">
              <h5 className="resume-card__title">
                Computer Science Engineering
              </h5>
              <p className="resume-card__name">CSVTU(2014-2018)</p>
              <p className="resume-card__details">
                B.E in Computer Science Engineering from CSVTU <br /> ( 7.60 CPI
                )
              </p>
            </div>
          </div>
          <div className="resume-languages">
            <h5 className="resume-language__heading">Language and Framework</h5>
            <div className="resume-language__body mt-3">
              {resume.skills
                .filter((skill) => skill.type === "language and frameworks")
                .map((tool) => (
                  <Bar key={tool.name} value={tool} />
                ))}
            </div>
            <div className="resume-languages">
              <h5 className="resume-language__heading">Tools and Softwares</h5>
              <div className="resume-language__body mt-3">
                {resume.skills
                  .filter((skill) => skill.type === "tools and softwares")
                  .map((tool) => (
                    <Bar key={tool.name} value={tool} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div>
            {resume.experiences.map((experience) => (
              <div className="resume-card__body" key={experience.company}>
                <h5 className="resume-card__title">{experience.designation}</h5>
                <h6 className="resume-card__name">{experience.company}</h6>
                <p className="small" style={{ color: "#00f260" }}>
                  <i>
                    ({moment.utc(experience.start_date).format("MM/YYYY")} - {experience.end_date !== "Present" ? moment.utc(experience.end_date).format("MM/YYYY") : experience.end_date })
                  </i>
                </p>
                <ul className="resume-card__tasks pl-3">
                  {experience.tasks.map((task, id) => (
                    <li key={id}>
                      <p className="resume-card__details">{task}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
