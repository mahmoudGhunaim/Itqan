import React from 'react'
import Layout from "../components/layout";
import AdvisoryResearchData from "../Json/AdvisoryResearch.json"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/ConservationServices.css"

import InfoPanel from '../components/InfoPanel';
import Seo from '../components/seo';
const AdvisoryResearch = () => {
  return (
    <Layout>
      <Seo
      title="خدمات البحوث والمشورة في إتقان كابيتال - المشورة الاستثمارية والقدرات البحثية      "
      description="تعرّف على خدمات البحوث والمشورة التي تقدمها إتقان كابيتال، بما في ذلك المشورة الاستثمارية والقدرات البحثية التي تدعم أنشطتها الرئيسية في مجالات الاستثمار المباشر والخدمات المصرفية الاستثمارية وخدمات الحفظ.      "/>
        <ScrollToTopButton/>
        <Hero
        title="إدارة الثروات"
        />
            <div className='Contact-footer-section-wallpaper'>
        <section className='AdvisoryResearch-sec'>
        
         <div className='AdvisoryResearch-card-title'>
               
                  
                 </div>
                 <div className='AdvisoryResearch-container'>
                    <div className='AdvisoryResarch-img'>
                      <img src='/teamwork.jpg'/>
                    </div>
                    <div className='AdvisoryResarch-info'>
                        <h1>خدمات إدارة الثروات</h1>
                        <p>يعمل فريق عمل إدارة الثروات على تلبية الاحتياجات الاستثمارية للعملاء الأفراد والشركات بعرض باقة متنوعة من المنتجات والخدمات المبتكرة والمميزة تلائم احتياجات عملائنا وتحقق بإذن الله طموحاتهم الاستثمارية. </p>
                        <p>يمتلك فريق إدارة الثروات المؤهلات العلمية والخبرات الطويلة في خدمة مصالح عملائنا والمستثمرين والمجتمع بشكل أكبر من خلال عرض أفضل المنتجات والخدمات الاستثمارية التي تحقق عائدات مجزية للعملاء مع مراعاة المخاطر المحتملة وبالتالي بناء علاقات متينة وطويلة المدى مع عملائنا.</p>
                    </div>
                 </div>
      </section>
      
        </div>
    </Layout>
  )
}

export default AdvisoryResearch