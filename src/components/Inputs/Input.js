import React from 'react'
import PlusIcon from '../../assets/images/icon-plus.svg'
import MinusIcon from '../../assets/images/icon-minus.svg'
import './Input.css'
import Button from './Button'
const Input = () => {
  return (
     <div className='input-container'>
      <div className='input-c'>
        <img className='plus-icon' src={PlusIcon} alt="plus-icon" />
        <input className='input' type="text" value={0} />
        <img className='minus-icon' src={MinusIcon} alt="minus icon" />
      </div>
      <Button/>
      </div>
  )
}

export default Input