import React from 'react'
import './Modal.css'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'
import sneakerThumb from '../../assets/images/image-product-1-thumbnail.jpg';
import Button from '../Inputs/Button';
const Modal = () => {

    const {orders} = useContext(OrdersContext);
    const sneaker = {
        name: "Fall Limited Edition Sneakers",
        price: 125.00,
        count: localStorage.getItem("orders"),
    }
    const closeModal = (e) =>{
        const modal = document.querySelector("#modal");
        modal.classList.add("hide");
    }
  return (
    <div id='modal' className='hide'>
        <div className='fade' onClick={closeModal}></div>
        <div className='modal'>
            <h2>Cart</h2>
            <hr />
            <div className='cart-content'>
                {localStorage.getItem('orders') == 0 ? <p>Your cart is empty</p> : 
                <div>
                <div className='sneaker-cart-info'>
                    <img src={sneakerThumb} alt="sneaker" />
                    <p className='info-price'>{sneaker.name} <span >${sneaker.price} x {sneaker.count}</span> <span className='total-price'>${sneaker.price * sneaker.count}</span></p>
                    
                </div>
                <Button text={"CheckOut"} />
                </div>
                
                }
            </div>
        </div>
    </div>
  )
}

export default Modal