import React from 'react'

// Components
import ProjectCard from '../../components/ProjectCard'

const ProjectsSection = ({ projectsList }) => {


    return (

        <div id="projects" className="dark-bg core-section">

            <div className="projects-grid">
                
                { projectsList.map((project, idx) => <ProjectCard project={ project } key={ idx } />) }

            </div>

        </div>

    );

}

export default ProjectsSection;