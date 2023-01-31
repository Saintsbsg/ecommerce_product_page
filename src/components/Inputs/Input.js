import React, { useState } from 'react'
import PlusIcon from '../../assets/images/icon-plus.svg'
import MinusIcon from '../../assets/images/icon-minus.svg'
import './Input.css'
import Button from './Button'
const Input = () => {
 

    const [localOrders, setLocalOrders] = useState(0)
  return (
     <div className='input-container'>
      <div className='input-c'>
        <img className='plus-icon' src={PlusIcon} alt="plus-icon" onClick={(e) => setLocalOrders(localOrders + 1)} />
        <input className='input' type="text" value={localOrders} readOnly />
        <img className='minus-icon' src={MinusIcon} alt="minus icon"  onClick={(e) => localOrders === 0 ? setLocalOrders(0) : setLocalOrders(localOrders - 1)} />
      </div>
      <Button localOrders={localOrders} text={"Add to Cart"}/>
      </div>
  )
}

export default Input