// styles
import '../../styles/main.css';

// images
import portfolioLogo from '../../img/logos/logo-2.png'
import taskTrackerLogo from '../../img/logos/TaskTrackerLogo.png'
import yourPlansLogo from '../../img/logos/your-plans-logo.png'
import intentionalNomadLogo from '../../img/logos/intentional-nomad-logo.png'
import needALatteLogo from '../../img/logos/need-a-latte-logo.png'

// containers
import AboutSection from './about';
import ProjectsSection from './projects';
import CollaborationsSection from './collaborations'
import ConnectSection from './connect';

const Main = () => {

    const projectsList = [
        {
            name: "Portfolio Site",
            gitHubURL: "https://github.com/jackthelab/portfolio-frontend/",
            hostedURL: "http://localhost:3000",
            image: portfolioLogo,
            description: "A portfolio site designed to showcase projects past, present, and current projects.",
            tags: ["live", "react"]
        },
        {
            name: "Your Plans",
            gitHubURL: "https://github.com/jackthelab/yourplans-app-client",
            hostedURL: null,
            image: yourPlansLogo,
            description: "Finding new things and making plans doesn't have to be hard.",
            tags: ["development", "react", "redux", "bootstrap", "ruby on rails"]
        },
        {
            name: "Task Tracker",
            gitHubURL: 'https://github.com/jackthelab/vue-task-tracker',
            hostedURL: null,
            image: taskTrackerLogo,
            description: "First VueJS project with simple CRUD and routing",
            tags: ["development", "vue"]
        },
        {
            name: "Intentional Nomad",
            gitHubURL: null,
            hostedURL: null,
            image: intentionalNomadLogo,
            description: "Adventure doesn't have to be around the world when we're intentional about the world aroudn us.",
            tags: ["development"]
        },
        {
            name: "Latte Mugs",
            gitHubURL: null,
            hostedURL: null,
            image: needALatteLogo,
            description: "The best place to find your mugs with a quirk!",
            tags: ["development"]
        },
    ]

    return (
        <section id="main">
            
            <AboutSection />
            
            <ProjectsSection projectsList={ projectsList } />
            
            <CollaborationsSection />

            <ConnectSection />
            
        </section>
    );

}

export default Main;