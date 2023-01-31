import Cart from '../../assets/images/icon-cart.svg'
import Avatar from '../../assets/images/image-avatar.png'
import Logo from '../../assets/images/logo.svg'
import { useState, useContext, useEffect } from 'react'
import './Header.css'
import Modal from '../Modal/Modal'
import { OrdersContext } from '../../context/OrdersContext'


const Header = () => {
  const [isMobile, SetIsMobile] = useState(false);
  const {orders, setOrders} = useContext(OrdersContext);

  
  useEffect(() =>{
    
  }, [orders])
  const showModal = (e) =>{
    const modal = document.querySelector("#modal");
    modal.classList.remove("hide");
    <Modal/>;
  }

 
  return (
    <header className='header-container'>
            <div className='container-test'>
                <button className='mobile-menu-icon' onClick={() => SetIsMobile(!isMobile)}>
                    {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
                  </button>
                <img className='logo-icon' src={Logo} alt="logo" />
                
                  <ul className={isMobile ? 'nav-links-mobile': 'nav-links'}
                  onClick={() => SetIsMobile(false)}>
                    <li><a href='#'>Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href='#'>Woman</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
            </div>
            <div className='container-test'>
                <button className='cart' onClick={showModal}>
                <img className='icon-default' src={Cart} alt='cart icon'/>
                {localStorage.getItem('orders') > 0  ? <span className='orders-icon'>{localStorage.getItem('orders')}</span> : ''}
                </button>
                
                <img className='icon-default' src={Avatar} alt='avatar icon'/>
            </div>
    </header>
  )
}

export default Header