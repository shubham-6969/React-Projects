import Styles from './Navigation.module.css'
import contactLogo from '../Images/vecteezy_logo-e-sport-variation-character-and-creatures-transparent_44778417.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navigation = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={Styles.nav_container}>
            <div className={Styles.logo}>
                <img src={contactLogo} alt="Logo Image" />
            </div>
            <div className={Styles.menuIcon} onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} />

            </div>
            <ul className={`${Styles.navLinks} ${isMenuOpen ? Styles.active : ""}`}
            >
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </nav>
    );

}


export default Navigation