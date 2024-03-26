import React from 'react'
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import AnnouncementsBox from '../components/AnnouncementsBox';
import AnnouncementsData from "../Json/AnnouncementsData.json"
import "../components/style/Announcements.css"
const Announcements = () => {
  return (
    <Layout>
        <ScrollToTopButton/>
        <Hero
        title="التصريحات"
        />
        <section className='Announcements-sec'>
            <div className='Announcements-container'>
                <div className='Announcements-content'>
                    <h3>التصريحات</h3>
                    {AnnouncementsData.map((announcement, index) => (
                        <AnnouncementsBox
                        key={index}
                        p1={announcement.p1}
                        p2={announcement.p2}
                        p3={announcement.p3}
                        span={announcement.span}
                        />
                    ))}
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Announcements