import './navbar.css';
import logo from './resources/logo.png'

const NavBar = () => {

    return (
        <section id="nav-bar">
            <div className="nav">
                <img className="logo" src={ logo } alt="Jacob H. Development Logo" />
                <div className="nav-options-list">
                    <h2 className="nav-option"><a href="">About</a></h2>
                    <h2 className="nav-option"><a href="">Projects</a></h2>
                    <h2 className="nav-option"><a href="">Collaborate</a></h2>
                </div>
            </div>
        </section>
    );

}

export default NavBar;