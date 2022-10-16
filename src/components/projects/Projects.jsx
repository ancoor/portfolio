import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import {motion} from 'framer-motion'
import { useEffect } from 'react';
import './projects.css'
import { useStateContext } from '../../contexts/ContextProvider';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [filteredProjects, setFilteredProjects] = useState([])
    const [animation, setAnimation] = useState('visible')
    const [tab, setTab] = useState('all')
    const { showLoader, hideLoader } = useStateContext();
    // const activeTab = {
    //     borderBottom: '3px solid #00F260',
    //     fontSize: '1rem',
    //     fontWeight: 700,
    // }
    const getProjects = async () => {
        showLoader();
        await fetch(
          "https://portfolio-user-service.herokuapp.com/api/portfolio/projects?user=1"
        )
          .then((response) => response.json())
          .then(({ data }) => {
            setProjects(data);
            setFilteredProjects(data);
            hideLoader();
          });
        
      };
      useEffect(() => {
        if (projects.length === 0) {
            getProjects();
        }
        // eslint-disable-next-line
      }, [filteredProjects]);
    const handleFilterCategory = (name) => {
        // const new_array = data_projects.filter(project => project.category.includes(name))
        setTab((prevTab) => {
            if(prevTab !== name)
            {
                setAnimation('hidden')
                
            }
            return name 
        })
        // setProjects(new_array)
    }

    useEffect(() => {
        console.log(animation)
        if(animation === 'hidden') {
            setTimeout(() => {
 
                const new_array = (tab !== 'all') ? projects.filter(project => project.category.includes(tab)) : projects
                setFilteredProjects(new_array)
                setAnimation('visible')
                hideLoader();
            },300)
        }
        // setAnimation('visible')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animation,tab])

    const projects_variant = {
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

    return (
        <div className="container projects">
            <div className="row projects__navbar">
                <div className={(tab === 'all') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('all')}>All</div>
                <div className={(tab === 'codeigniter') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('codeigniter')}>CodeIgniter</div>
                <div className={(tab === 'wordpress') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('wordpress')}>Wordpress</div>
                <div className={(tab === 'php') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('php')}>PHP</div>
                <div className={(tab === 'javascript') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('javascript')}>JavaScript</div>
                <div className={(tab === 'react') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('react')}>React</div>
                <div className={(tab === 'node') ? "project__navbar-active" : null} onClick={() => handleFilterCategory('node')}>Node</div>
            </div>
            <motion.div className="row"
                 variants={projects_variant}
                 initial='hidden'
                 animate={animation}
                 exit="exit"
            >

                {
                    filteredProjects.map(project =>
                        <ProjectCard key={project.name} project={project} />)
                }
            </motion.div>
        </div>
    );
};

export default Projects;