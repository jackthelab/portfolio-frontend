// styles
import '../../styles/main.css';

// images
import portfolioLogo from '../../img/logos/logo.png'
import envelopesLogo from '../../img/logos/envelopes-logo.png'
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
            hostedURL: null,
            image: portfolioLogo,
            description: "A portfolio site designed to showcase projects past, present, and current projects.",
            tags: ["development", "live"]
        },
        {
            name: "Your Plans",
            gitHubURL: "https://github.com/jackthelab/yourplans-app-client",
            hostedURL: null,
            image: yourPlansLogo,
            description: "Finding new things and making plans doesn't have to be hard.",
            tags: ["development"]
        },
        {
            name: "Envelopes",
            gitHubURL: null,
            hostedURL: null,
            image: envelopesLogo,
            description: "Organize your budgets and your spending with envelopes!",
            tags: ["development"]
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