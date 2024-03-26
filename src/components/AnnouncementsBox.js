import React from 'react'
import "./style/Announcements.css"
import { Link } from "gatsby";

const AnnouncementsBox = ({p1,p2,p3,span,link}) => {
  return (
    <div className='AnnouncementsBox'>
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}<span><Link to={link}>{span}</Link></span></p>
    </div>
  )
}

export default AnnouncementsBox