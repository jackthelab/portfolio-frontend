// components
import DevelopmentTag from './DevelopmentTag'
import LiveTag from './LiveTag'

const ProjectTags = ({ tags }) => {  

    return (
        <div>
            { tags.includes('development') ? <DevelopmentTag /> : null }
            { tags.includes('live') ? <LiveTag /> :null }
        </div>
    );

}

export default ProjectTags