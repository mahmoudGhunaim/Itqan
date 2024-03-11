import React from 'react'
import { Link } from "gatsby";
import "./style/InfoPanel.css"
const InfoPanel = ({title, image, paragraph,button,point1,point2,point3,point4,links,none,revers}) => {
  return (
    <section className='infopanel-sec'>
        <div className='infopanel-container' style={{flexDirection: revers}}>
            <div className='infopanel-content'>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <ul style={{display: none}}>
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                    <li>{point4}</li>
                </ul>
                <Link to={links}><button>{button}</button></Link>
            </div>
            <div className='infopanel-image'>
                <img src={image}/>
            </div>
        </div>
    </section>
  )
}

export default InfoPanel