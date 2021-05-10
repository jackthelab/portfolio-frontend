import './main.css';

// containers
import AboutSection from './about';
import ProjectsSection from './projects';
import CollaborationsSection from './collaborations'

const Main = () => {

    return (
        <section id="main">
            
            <AboutSection />
            
            <ProjectsSection />
            
            <CollaborationsSection />
            
        </section>
    );

}

export default Main;