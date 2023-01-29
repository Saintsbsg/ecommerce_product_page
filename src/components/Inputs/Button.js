import React, { useEffect } from 'react'
import './Button.css'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'
import { CartContext } from '../../context/CartContext'
const Button = ({localOrders, text}) => {
  const {orders, setOrders} = useContext(OrdersContext);
  const {cart,  setCart} = useContext(CartContext)
  
  useEffect(() =>{

  }, [orders])
  
  const handleCart = () =>{
    if(localOrders > 0 ){
      console.log(localStorage.getItem('orders'))
      if(parseInt(localStorage.getItem('orders')) > 0){
        localStorage.setItem('orders', parseInt(localStorage.getItem('orders')) + localOrders);
        console.log('to aqui')
        console.log(parseInt(localStorage.getItem('orders')) )
        setOrders(localStorage.getItem('orders'))
      }else{
        let aux = parseInt(localStorage.getItem('orders')) + localOrders;
        setOrders(aux)
      
        console.log(aux)
        console.log(orders)
        console.log(localOrders)
        localStorage.setItem('orders', aux)
        console.log(localStorage)
        setCart(true)
      }
     
    }
  }
  return (
    <div className='btn-container'>
      {console.log(localStorage.getItem('orders'))}
        <button className='btn' onClick={handleCart}>{text}</button>
    </div>
  )
}

export default Button