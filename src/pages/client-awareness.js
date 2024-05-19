import React, { useState } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/ClientAwareness.css"
import { Link } from "gatsby";
import Seo from '../components/seo';
import InvestorProtectionGuide from "../../static/1681029922_دليل-حماية-المستثمر (4).pdf"
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
      <Seo
      title="خدمة العملاء في إتقان كابيتال - التقارير والبيانات وإجراءات التقديم على الشكاوى      "
      description="اكتشف خدمة العملاء في إتقان كابيتال، بما في ذلك التقارير والبيانات الأخيرة للأسواق المالية، وإجراءات تقديم الشكاوى، ودليل حماية المستثمر لضمان تجربة استثمارية آمنة وشفافة."/>
        <ScrollToTopButton/>
        <Hero title="توعية العملاء" subTitle="“خدمة العملاء”"/>
        <section className='Reports-data-sec'>
            <div className='Reports-data-container'>
                <div className='Reports-data-title'>
                   
                </div>
                <div className='Reports-data-cards security-cards'>
                  <Link to='https://itqancapital.com/wp-content/themes/etq/co/CustomerComplaint.pdf'>
                    <SecurityCard
                        defaultImgSrc='/Complaint.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='اجراءات تقديم شكوى'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                    </Link>
                    <Link to={InvestorProtectionGuide}>
                    <SecurityCard
                        defaultImgSrc='/Investor.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='دليل حماية المستثمر'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                    </Link>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default ClientAwareness;
