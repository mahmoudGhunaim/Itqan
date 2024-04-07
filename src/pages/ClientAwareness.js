import React, { useState } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/ClientAwareness.css"
const SecurityCard = ({ defaultContent, hoverContent, defaultImgSrc, hoverImgSrc }) => {
  const [content, setContent] = useState(defaultContent);
  const [imgSrc, setImgSrc] = useState(defaultImgSrc);

  // Update both content and image source on hover
  const handleMouseEnter = () => {
    setContent(hoverContent);
    setImgSrc(hoverImgSrc);
  };

  // Revert to default content and image source when not hovered
  const handleMouseLeave = () => {
    setContent(defaultContent);
    setImgSrc(defaultImgSrc);
  };

  return (
    <div 
      className='Reports-data-single-card security-single-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <img src={imgSrc} alt="" />
        <p>{content}</p>
    </div>
  );
};

// Example usage of SecurityCard within your component
const ClientAwareness = () => {
  return (
    <Layout>
        <ScrollToTopButton/>
        <Hero title="توعية العملاء" subTitle="“خدمة العملاء”"/>
        <section className='Reports-data-sec'>
            <div className='Reports-data-container'>
                <div className='Reports-data-title'>
                    <h1>التقارير والبيانات</h1>
                    <p>اطّلع على آخر التحليلات والرؤى للأسواق المالية</p>
                </div>
                <div className='Reports-data-cards security-cards'>
                    <SecurityCard
                        defaultImgSrc='/Complaint.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='اجراءات تقديم شكوى'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                    <SecurityCard
                        defaultImgSrc='/Investor.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='دليل حماية المستثمر'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default ClientAwareness;
