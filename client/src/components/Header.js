import logo from '../images/traventure-logo.png';
import avatar from '../images/profile-photo.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-item-container">
                    <Link to={"/"}>
                        <img className="logo" src={logo} alt="Traventure logo" />
                    </Link>
                </div>
                <div className="header-item-container">
                    <p>Log out</p>
                    <p>ⓘ Language</p>
                    <img className="avatar" src={avatar} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;