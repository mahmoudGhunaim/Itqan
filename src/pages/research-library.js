import React, { useState, useEffect, useRef } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import ResearchLibraryBox from '../components/ResearchLibraryBox';
import ResearchLibraryData from "../Json/ResearchLibraryData.json";
import "../components/style/ResearchLibrary.css";
import { Player } from '@lottiefiles/react-lottie-player';
import loaderl from "../Json/loaderl.json"; // Ensure this is the correct path to your Lottie animation
import Seo from '../components/seo';

const ResearchLibrary = () => {
  const [itemsToShow, setItemsToShow] = useState(16);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (itemsToShow < ResearchLibraryData.length) {
          setItemsToShow((prevItems) => prevItems + 16);
        }
      }
    }, {
      threshold: 0.1 
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.disconnect();
      }
    };
  }, [itemsToShow]);

  return (
    <Layout>
      <ScrollToTopButton />
      <Seo title="مكتبة البحوث - استكشاف تقارير شركة الخطوط السعودية للتموين والمزيد | إتقان كابيتال"
           description="تستكشف مكتبة البحوث لشركة إتقان كابيتال التقارير والنظرات الفريدة حول أداء الشركات، بما في ذلك نظرة على نتائج الأعمال لشركة الخطوط السعودية للتموين في الربع الثاني لعام 2020 وغيرها من التقارير الهامة. استفد من المعرفة والبيانات لاتخاذ قرارات استثمارية مدروسة." />
      <Hero title="مكتبة البحوث" subTitle="“المصادر”" />
      <section className='ResearchLibrary-sec'>
        <div className='ResearchLibrary-container'>
          <div className='ResearchLibrary-title'>
            <h3>مكتبة البحوث</h3>
          </div>
          <div className='ResearchLibrary-boxes'>
            {ResearchLibraryData.slice(0, itemsToShow).map((item, index) => (
              <ResearchLibraryBox
                key={index}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
          {itemsToShow < ResearchLibraryData.length && (
            <div ref={loaderRef} style={{ height: '100px', margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
              <Player autoplay loop src={loaderl} style={{ height: '100px', width: '100px' }} />
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ResearchLibrary;
