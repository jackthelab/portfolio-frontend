const ProjectCard = ({ project }) => {

    return (

        <div className="project-card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-details">
                <h3>{ project.name }</h3>
                <p>{ project.description ? project.description : "There is no description for this project" }</p>
                { project.hostedURL ? <button className="action-btn"><a href={ project.hostedURL } target="_blank">Visit on Web</a></button> : null }
                { project.gitHubURL ? <button className="action-btn"><a href={ project.gitHubURL } target="_blank">Visit on GitHub</a></button> :null }
            </div>
        </div>

    );

}

export default ProjectCard