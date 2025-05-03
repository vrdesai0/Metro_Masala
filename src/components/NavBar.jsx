import '../index.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function NavBar() {

    return (
        <>
            <div className='tagline'>'Spices, That adds Love to your food...'</div>

            <nav id='nav' className="nav">
                <ul className='ul1'>
                    <li><a href="#landing">Home</a></li>                  
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    
                </ul>
                <div className='logo_container'>
                    <img className='logo' src={logo} alt="logo" />
                </div>
                <ul className='ul2'>
                    <li><FontAwesomeIcon icon={faInstagram} className='icon ic1' /></li>
                    <li><FontAwesomeIcon icon={faFacebook} className='icon ic2' /></li>
                    <li><FontAwesomeIcon icon={faGoogle} className='icon ic3' /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} className='icon ic4' /></li>
                </ul>
            </nav>

        </>
    )
}

export default NavBar;