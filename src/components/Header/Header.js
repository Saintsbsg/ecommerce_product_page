import React from 'react'
import Cart from '../../assets/images/icon-cart.svg'
import Avatar from '../../assets/images/image-avatar.png'
import Logo from '../../assets/images/logo.svg'
import IconMenu from '../../assets/images/icon-menu.svg'
import './Header.css'


const Header = () => {
  return (
    <header className='header-container'>
        
            <div>
                <img className='hamburguer-icon' src={IconMenu} alt="menu icon" />
                <img className='logo-icon' src={Logo} alt="logo" />
                <nav className='menu'>
                  <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Woman</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
            </div>
            <div>
                <img className='icon-default' src={Cart} alt='cart icon'/>
                <img className='icon-default' src={Avatar} alt='avatar icon'/>
            </div>
    </header>
  )
}

export default Header