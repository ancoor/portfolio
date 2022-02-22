import React,{useEffect, useState} from 'react';
import Bar from './Bar';
import { languagesStatic, experiences, tools } from '../data/resume_data';
import {motion} from 'framer-motion'
import './resume.css'

const resume_variant = {
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
const Resume = () => {
    const [languages,setLanguages] = useState(languagesStatic);
    const apiLanguage = async() => {
         await fetch('https://aiinnovationworld.com/backend/api/getLanguages')
        .then(response => response.json())
        .then(data => {
            setLanguages(data.result)
            // console.log('api',data.result[0])
            });
    }
    useEffect(() => {
        if(languages === "")
        {
            apiLanguage();
        }
        console.log('languages',languages)
        }, [languages]);
    return (
        <motion.div className="container resume"
            variants={resume_variant}
            initial='hidden'
            animate='visible'
            exit="exit"
        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Education
                    </h4>
                    <div>
                        <div className="resume-card__body">
                            <h5 className="resume-card__title">
                                Computer Science Engineering
                            </h5>
                            <p className="resume-card__name">
                                CSVTU(2014-2018)
                            </p>
                            <p className="resume-card__details">B.E in Computer Science Engineering from CSVTU <br/> ( 7.60 CPI )</p>
                        </div>
                    </div>
                    <div className="resume-languages">
                    <h5 className="resume-language__heading">
                        Language and Framework
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages ?
                            Object.entries(languages).map(row =>
                                {
                                    console.log('row',row)
                                    return <Bar key={row[0]} value={row[1]} />
                                }
                            ):''
                        }
                    </div>
                    <div className="resume-languages">
                        <h5 className="resume-language__heading">
                            Tools and Softwares
                        </h5>
                        <div className="resume-language__body mt-3">
                            {
                                tools.map(tool => <Bar key={tool.name} value={tool} />)
                            }
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div>
                        {
                            experiences.map(experience => (
                                <div className="resume-card__body" key={experience.company}>
                                    <h5 className="resume-card__title">
                                        {experience.designation}
                                    </h5>
                                    <h6 className="resume-card__name">
                                        {experience.company}
                                    </h6>
                                    <p className="small" style={{color:'#00f260'}}><i>({experience.start} - {experience.end})</i></p>
                                    <ul className="resume-card__tasks pl-3">
                                        {experience.tasks.map(task => (
                                        <li key={task.id}>
                                            <p className="resume-card__details">{task.role}</p>
                                        </li>

                                        ))}
                                    </ul>
                                </div>

                            ))
                        }

                    </div>
                    
                </div>
            </div>

            
        </motion.div>
    );
};

export default Resume;