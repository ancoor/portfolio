import React, { useEffect, useState } from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import { motion } from "framer-motion";
import { useStateContext } from "../contexts/ContextProvider";
import { service } from "./data/config";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState({
    city: "",
    country: "",
    facebook: "",
    github: "",
    instagram: "",
    linkdin: "",
    primaryContact: "",
    profile: "",
    resume: "",
    secondaryContact: "",
    state: "",
    user: {firstName: "", lastName: "", email: ""}
  });
  const { showLoader, hideLoader } = useStateContext();
  const apiSidebar = async () => {
    showLoader();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user_id: 1,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    await fetch(
      service.portfolio.contact.url,
      requestOptions
    )
      .then((response) => response.json())
      .then(({ response }) => {
        setSidebar({
            city: response.city,
            country: response.country,
            facebook: response.facebook,
            github: response.github,
            instagram: response.instagram,
            linkdin: response.linkdin,
            primaryContact: response.primaryContact,
            profile: response.profile,
            resume: response.resume,
            secondaryContact: response.secondaryContact,
            state: response.state,
            user: { firstName: response.user_id.firstName, lastName: response.user_id.lastName, email: response.user_id.email }
          });
        hideLoader();
      });
  };
  useEffect(() => {
      apiSidebar();
    // eslint-disable-next-line
  }, []);
  const handleEmailMe = () => {
    window.open(`mailto:${sidebar.user.email}`);
  };

  const sidebar_variant = {
    hidden: {
      x: "-20vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={sidebar_variant}
      initial="hidden"
      animate="visible"
    >
      <img src={sidebar.profile} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">
        {sidebar.user.firstName} <span>{sidebar.user.lastName}</span>{" "}
      </div>
      <div className="sidebar__item sidebar__title">Web Developer</div>
      <a href={sidebar.resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href={sidebar.facebook}>
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href={sidebar.instagram}>
          <img src={instagram} alt="instagram" className="sidebar__icon mr-3" />
        </a>
        <a href={sidebar.linkdin}>
          <img src={linkedin} alt="linkdin" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href={sidebar.github}>
            <img src={github} alt="github" className="sidebar__icon mr-1" />
            Github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-1" />
          {sidebar.city}, {sidebar.state}, {sidebar.country}
        </div>
        <div className="sidebar__item">{sidebar.user.email}</div>
        <div className="sidebar__item">{sidebar.primaryContact} / {sidebar.secondaryContact}</div>
      </div>
      <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>
        email me
      </div>
    </motion.div>
  );
};

export default Sidebar;
