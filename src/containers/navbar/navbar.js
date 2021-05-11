import './navbar.css';
import logo from './resources/logo.png';
import logoTwo from './resources/logo-2.png';

const NavBar = () => {

    return (
        <section id="nav-bar">
            <div className="nav">
                <img className="logo" src={ logoTwo } alt="Jacob H. Development Logo" />
                <div className="nav-options-list">
                    <h2 className="nav-option"><a href="#about">About</a></h2>
                    <h2 className="nav-option"><a href="#projects">Projects</a></h2>
                    <h2 className="nav-option"><a href="#collaborate">Collaborate</a></h2>
                </div>
            </div>
        </section>
    );

}

export default NavBar;