import { useState } from 'react'
import Logo from '../assets/Logo.svg'
import LogoMobile from '../assets/logo-mobile.svg'
import MenuIcon from '../assets/menu.svg'
import CloseIcon from '../assets/cross.svg'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <nav>
            <a href="/" id="logo">
                <img className="desktop" src={Logo} alt="" />
                <img className="mobile" src={LogoMobile} alt="" />
            </a>

            <div className="menu-list" style={{ top: menuOpen ? '50px' : '-100%' }}>
                <ul>
                    <li><a href="#fe">Features</a></li>
                    <li><a href="#ab">About</a></li>
                </ul>
                <div className="cta">
                    <button id="login" onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        {isLoggedIn ? 'Log Out' : 'Log In'}
                    </button>
                    <button id="sign-up">Sign Up</button>
                </div>
            </div>
            <button id="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                {!menuOpen && <img src={MenuIcon} alt=""  />}
                {menuOpen && <img src={CloseIcon} alt="" />}
            </button>
        </nav>
    )
}

export default NavBar
