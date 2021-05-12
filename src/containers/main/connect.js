// components
import ConnectionButton from '../../components/buttons/ConnectionButton'

const ConnectSection = () => {

    return (

        <div id="connect" className="dark-bg core-section">

            <h2>Connect</h2>

            <ConnectionButton name={ "LinkedIn" } src={ "https://www.linkedin.com/in/jacobhampton/" } />

            <ConnectionButton name={ "Blog" } src={ "https://jacobhampton.medium.com/" } />

            <ConnectionButton name={ "GitHub" } src={ "https://github.com/jackthelab" } />

        </div>

    );

}

export default ConnectSection;