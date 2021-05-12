// Components
import ProjectCard from '../../components/ProjectCard'

const ProjectsSection = ({ projectsList }) => {


    return (

        <div id="projects" className="dark-bg core-section">

            <h1>Projects</h1>

            <div className="projects-grid">
                
                { projectsList.map((project, idx) => <ProjectCard project={ project } key={ idx } />) }

            </div>

        </div>

    );

}

export default ProjectsSection;