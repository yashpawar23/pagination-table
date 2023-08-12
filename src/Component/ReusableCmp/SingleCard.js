import React from 'react'
import { useLocation } from 'react-router-dom'
import './SingleCard.css'


const SingleCard = () => {
    const location = useLocation();
   const {title, description, price, rating, thumbnail } = location.state;
  return (
    <div className='singleCard-wrapper'>
        <img src={thumbnail} alt='error'/>
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{rating}</p>
    </div>
  )
}

export default SingleCard