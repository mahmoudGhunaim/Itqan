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
  // const [itemsToShow, setItemsToShow] = useState(4);
  // const [showLoader, setShowLoader] = useState(false);
  // const loaderRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       setShowLoader(true);
  //       setTimeout(() => {
  //         if (itemsToShow < ResearchLibraryData.length) {
  //           setItemsToShow(itemsToShow + 4);
  //         }
  //         setShowLoader(false);
  //       }, 2000);
  //     }
  //   }, {
  //     rootMargin: '0px', // Adjust this margin
  //     threshold: 0.1 // Change threshold to ensure loader visibility even when slightly in view
  //   });

  //   if (loaderRef.current) {
  //     observer.observe(loaderRef.current);
  //   }

  //   return () => {
  //     if (loaderRef.current) {
  //       observer.disconnect();
  //     }
  //   };
  // }, [itemsToShow]);

  return (
    <Layout>
      <Seo
        title="مكتبة البحوث - استكشاف تقارير شركة الخطوط السعودية للتموين والمزيد | إتقان كابيتال"
        description="تستكشف مكتبة البحوث لشركة إتقان كابيتال التقارير والنظرات الفريدة حول أداء الشركات، بما في ذلك نظرة على نتائج الأعمال لشركة الخطوط السعودية للتموين في الربع الثاني لعام 2020 وغيرها من التقارير الهامة."
      />
      <ScrollToTopButton />
      <Hero title="مكتبة البحوث" subTitle="“المصادر”" />
      <section className='ResearchLibrary-sec'>
        <div className='ResearchLibrary-container'>
          <div className='ResearchLibrary-title'>
            <h3>مكتبة البحوث</h3>
          </div>
          <div className='ResearchLibrary-boxes'>
            {ResearchLibraryData.slice(0, ResearchLibraryData.length + 1).map((item, index) => (
              <ResearchLibraryBox
                key={index}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
         
        </div>
      </section>
    </Layout>
  );
};

export default ResearchLibrary;
