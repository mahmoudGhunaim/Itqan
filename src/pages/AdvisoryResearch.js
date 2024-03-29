import React from 'react'
import Layout from "../components/layout";
import AdvisoryResearchData from "../Json/AdvisoryResearch.json"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/ConservationServices.css"

import InfoPanel from '../components/InfoPanel';
const AdvisoryResearch = () => {
  return (
    <Layout>
        <ScrollToTopButton/>
        <Hero
        title="البحوث والمشورة"
        subTitle="“الخدمات”"
        />
        <section className='AdvisoryResearch-sec'>
         <div className='AdvisoryResearch-card-title'>
                    <h1>خدمات البحوث والمشورة</h1>
                    <p>تساعد القدرات الاستشارية والبحثية المركزية التي تتمتع بها “إتقان كابيتال” على تعزيز ودعم أنشطتنا الأربعة الرئيسية (إدارة الأصول والاستثمار المباشر والخدمات المصرفية الاستثمارية وخدمات الحفظ). ويعمل فريقنا عن كثب مع عملائنا لتحديد أفضل الاستراتيجيات التي تلبي احتياجات كل منهم وتحقق أهدافه الاستثمارية. ويأتي دور وحدة بحوث “إتقان كابيتال” لتقدم لهم باقتدار جميع أشكال الدعم، مدعومة في ذلك بأنظمة قوية لجمع البيانات وإجراء التحليلات.</p>
                 </div>
      </section>
      {AdvisoryResearchData.map((item, index) => (
            <InfoPanel
              key={index}
              title={item.title}
              paragraph={item.paragraph} // Adjusted from description to paragraph
              button={item.Button}
              image={item.imgSrc}
              revers={item.revers}
              // Since "none" prop doesn't seem to be directly used in rendering (based on your provided props),
              // I'm assuming it's some kind of flag or style modifier. Ensure to handle it accordingly in your InfoPanel component.
              none={item.none}
            />
        ))}
    </Layout>
  )
}

export default AdvisoryResearch