import React from 'react'
import './InfoCard.css'
const InfoCard = () => {
  return (
    <div className='info-card-container'>
        <p className='orange-paragraph'>Sneaker Company</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className='info-paragraph'> These low-profile sneakers are your perfect casual wear companion. 
         Featuring a durable rubber outer sole, they’ll withstand everything 
         the weather can offer.</p>
         <div className='price-info'>
         <h2>$125.00 <span className='discount'>50%</span>  </h2>
          <span className='previous-price'>$250.00</span>
         </div>
        
    </div>
  )
}

export default InfoCard