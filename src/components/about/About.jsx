import React,{useEffect, useState} from 'react';
import SkillCard from './SkillCard';
// import {skills} from '../data/about_data'
import {motion} from 'framer-motion'
import './about.css'
const about_variant = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeInOut'
        }
    }
}

const About = () => {
    const [skillData,setSkillData] = useState([]);
    const apiSkills = async() => {
         await fetch('https://portfolio-user-service.herokuapp.com/api/portfolio/about?user=1')
        .then(response => response.json())
        .then(({data}) => {
            setSkillData(data)
            // console.log('api',data.result[0])
            });
    }
    useEffect(() => {
        if(skillData.length === 0)
        {
            apiSkills();
        }
        console.log('languages',skillData)
        }, [skillData]);
    return (
        <motion.div className="about"
            variants={about_variant}
            initial='hidden'
            animate='visible'
            exit="exit"
        >
            <h6 className="about__intro">
                I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions.
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    {
                        skillData.map(skill =>
                            <SkillCard key={skill.title} skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;