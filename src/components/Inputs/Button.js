import './Button.css'
import { useContext } from 'react'
import { OrdersContext } from '../../context/OrdersContext'

const Button = ({localOrders, text}) => {
  const {orders, setOrders} = useContext(OrdersContext);

  
  
  const handleCart = () =>{
    if(localOrders > 0 ){
      if(parseInt(localStorage.getItem('orders')) > 0){
        localStorage.setItem('orders', parseInt(localStorage.getItem('orders')) + localOrders);
        setOrders(localStorage.getItem('orders'))
      }else{
        let aux = parseInt(localStorage.getItem('orders')) + localOrders;
        setOrders(aux);
        localStorage.setItem('orders', aux);

      }
     
    }
  }
  return (
    <div className='btn-container'>
        <button className='btn' onClick={handleCart}>{text}</button>
    </div>
  )
}

export default Button