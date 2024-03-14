import React from 'react'
import "./style/PrivateBoxCard.css"
const PrivateBoxCard = ({title,imgSrc,subtitle,Button,size,backgroundColor}) => {
  return (
    <div className='PrivateBoxCard-sec'>
    <div className={`PrivateBoxCard-container ${backgroundColor}`}>
          <div className='PrivateBoxCard-image'>
            <img src={imgSrc}/>
          </div>
          <div className='PrivateBoxCard-title'>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{size}</p>
            <button>{Button}</button>
          </div>
        </div>
    </div>
  )
}

export default PrivateBoxCard
