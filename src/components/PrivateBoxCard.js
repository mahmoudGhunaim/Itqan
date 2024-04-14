import React from 'react'
import "./style/PrivateBoxCard.css"
import { Link } from "gatsby"
const PrivateBoxCard = ({title,imgSrc,subtitle,Button,size,backgroundColor,spaceP,link}) => {
  return (
    <div className='PrivateBoxCard-sec'>
    <div className={`PrivateBoxCard-container ${backgroundColor}`}>
          <div className='PrivateBoxCard-image'>
            <img src={imgSrc}/>
          </div>
          <div className='PrivateBoxCard-title'>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p style={{paddingTop:spaceP}}>{size}</p>
            <Link to={link}><button>{Button}</button></Link>
          </div>
        </div>
    </div>
  )
}

export default PrivateBoxCard
