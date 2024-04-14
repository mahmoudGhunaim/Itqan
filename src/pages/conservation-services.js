import React from 'react'
import PrivateBox from '../components/PrivateBoxCard';
import Hero from '../components/Hero';
import Layout from "../components/layout";
import "../components/style/ConservationServices.css"
import ScrollToTopButton from '../components/ScrollToTopButton';
import ConservationServicesData from "../Json/ConservationServicesData.json"
import Seo from '../components/seo';
const ConservationServices = () => {
  return (
    <Layout>
      <Seo
      title="خدمات الحفظ في شركة إتقان كابيتال - صندوق العقارات والاستثمار المباشر      "
      description="تعرف على خدمات الحفظ التي تقدمها شركة إتقان كابيتال، بما في ذلك صندوق العقارات والاستثمار المباشر، واستفد من الخبرة في إدارة الثروات لتحقيق أهداف استثمارية مستدامة ومواتية للمستثمرين.      "/>
      <ScrollToTopButton/>
        <Hero
        title="خدمات الحفظ"
        subTitle="“الخدمات”"
        />
        <section className=' Conservation-Services-card-sec ' >

            <div className='Conservation-Services-card-container'>
                 <div className='Conservation-Services-card-title'>
                    <h1>خدمات الاستثمار</h1>
                    <p>نحن ملتزمون للغاية بالحفاظ على ريادتنا من خلال تقديم خدمات استثنائية ومخصصة في مجالات العقارات والاستثمار المباشر الخاص وصناديق الاستثمار. نتشاور مع كل عميل لتحديد الخدمات المطلوبة، ومن خلال العمل معاً، نصمم الحلول اللازمة لتلبية أهداف شركاتهم. وبفضل القدرات التجارية والتشغيلية المبسطة التي تتمتع بها “إتقان كابيتال”، سنقدم خدمات سلسة لعملائنا وهيكل رسوم تنافسي.</p>
                 </div>
                 <div className='Conservation-Services-cards'>
                 {ConservationServicesData.map((item, index) => (
                    <PrivateBox
                        key={index}
                        title={item.title}
                        subtitle={item.subtitle}
                        size={item.size}
                        Button={item.Button}
                        imgSrc={item.imgSrc}
                        backgroundColor={item.backgroundColor}
                    />
                    ))}
                 </div>
            </div>
        </section>
    </Layout>
  )
}

export default ConservationServices
