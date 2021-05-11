import './main.css';

// containers
import AboutSection from './about';
import ProjectsSection from './projects';
import CollaborationsSection from './collaborations'
import ConnectSection from './connect';

const Main = () => {

    return (
        <section id="main">
            
            <AboutSection />
            
            <ProjectsSection />
            
            <CollaborationsSection />

            <ConnectSection />
            
        </section>
    );

}

export default Main;