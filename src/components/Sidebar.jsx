import React from 'react'
import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import profile from '../assets/profile.jpg'
import resume from '../assets/resume.pdf'
import {motion} from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:ancoorbanerjee7@gmail.com")
    }

    const sidebar_variant = {
        hidden: {
            x:'-20vw',
        },
        visible: {
            x: 0,
            transition: {
                delay: 0.2,
                duration: 0.5,
                type: 'spring',
            }
        }
    }

    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate='visible'
        >
            <img src={profile} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Ancoor <span>Banerjee</span> </div>
            <div className="sidebar__item sidebar__title">Web Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/ancoor/"><img src={facebook} alt="facebook" className="sidebar__icon mr-3" /></a>
                <a href="https://www.instagram.com/ancoor_banerjee/"><img src={instagram} alt="instagram" className="sidebar__icon mr-3" /></a>
                <a href="https://www.linkedin.com/in/ancoor-banerjee-140b14134/"><img src={linkedin} alt="linkdin" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/ancoor"><img src={github} alt="github" className="sidebar__icon mr-1" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-1" />
                    Raipur, Chhattisgarh, India</div>
                <div className="sidebar__item">ancoorbanerjee7@gmail.com</div>
                <div className="sidebar__item">7773845893 / 9399945518</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;