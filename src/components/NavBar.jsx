import '../index.css'
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { ShoppingCartIcon, UserPen } from 'lucide-react';
import { Navbar, Nav } from 'react-bootstrap';
// import { useState } from 'react'

function NavBar() {


    return (
        <>
            <div className='tagline' id='tag'>'Spices, That adds Love to your food...'</div>

            {/* <nav id='nav' className="nav">
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
                    <li><FontAwesomeIcon icon={faGoogle} className='icon ic3' /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} className='icon ic4' /></li>
                    <li title='profile'> <UserPen className='icon ic3' /> </li>
                </ul>
            </nav> */}
            <Navbar sticky="top" expand="lg" style={{ backgroundColor: '#ed1c24' }}>
                <Navbar.Collapse>
                    <Nav className='nav_ul nav1'>
                        <Nav.Link href="#tag" className='me-4'>Home</Nav.Link>
                        <Nav.Link href="#about" className='me-4'>About</Nav.Link>
                        <Nav.Link href="#products " className='me-4'>Products</Nav.Link>
                        <Nav.Link href="#contact" className=''>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#" className='ms-4'><img src={logo} alt="logo" width={120} height={80} />
                </Navbar.Brand>
                
                <Navbar.Toggle>
                    <svg xmlns='http://www.w3.org/2000/svg' width="30"
                        height="30" viewBox='0 0 30 30'><path stroke='white' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='2' d='M4 7h22M4 15h22M4 23h22' /></svg>
                </Navbar.Toggle>
                <Navbar.Collapse>
                    <Nav className='nav_ul nav2'>
                        <Nav.Link href="#home" className='me-4'>Home</Nav.Link>
                        <Nav.Link href="#about" className='me-4'>About</Nav.Link>
                        <Nav.Link href="#products " className='me-4'>Products</Nav.Link>
                        <Nav.Link href="#contact" className='me-4'>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className='social'>
                    <Nav style={{ gap: '30px', marginLeft: '0', marginRight: '0'}}>
                        <Nav.Link href="#" ><FontAwesomeIcon icon={faInstagram} className='icon ic1' /></Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faGoogle} className='icon ic3' /></Nav.Link>
                        <Nav.Link href="# "><FontAwesomeIcon icon={faWhatsapp} className='icon ic4' /></Nav.Link>
                        <Nav.Link href="#"> <ShoppingCartIcon /> </Nav.Link>
                        <Nav.Link href="#"><UserPen className='icon ic3' /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}

export default NavBar;