import '../../styles/navbar.css';
import logo from '../../img/logos/logo.png'
// import logoTwo from '../../img/logos/logo-2.png';

const NavBar = () => {

    return (
        <section id="nav-bar">
            <div className="nav">
                <img className="logo" src={ logo } alt="Jacob H. Development Logo" />
                <div className="nav-options-list">
                    <h2 className="nav-option"><a href="#about">About</a></h2>
                    <h2 className="nav-option"><a href="#projects">Projects</a></h2>
                    <h2 className="nav-option"><a href="#collaborate">Collaborate</a></h2>
                    <h2 className="nav-option"><a href="#connect">Connect</a></h2>
                </div>
            </div>
        </section>
    );

}

export default NavBar;