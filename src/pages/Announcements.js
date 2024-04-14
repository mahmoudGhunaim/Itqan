import React, { useState, useEffect, useRef } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import AnnouncementsBox from '../components/AnnouncementsBox';
import AnnouncementsData from "../Json/AnnouncementsData.json";
import "../components/style/Announcements.css";
import Seo from '../components/seo';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderl from "../Json/loaderl.json"; // Ensure this is the correct path to your Lottie animation
const Announcements = () => {
  const [itemsToShow, setItemsToShow] = useState(4); // Initially show 4 items
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setItemsToShow((prevItems) => prevItems + 4); // Load 4 more items
      }
    }, {
      threshold: 1 
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Seo
        title="إعلانات صندوق اتقان للمرابحات والصكوك - إتاحة البيان ربع سنوي للفترة المنتهية في 31/12/2023م"
        description="اطّلع على إعلانات شركة إتقان كابيتال بشأن صندوق اتقان للمرابحات والصكوك، بما في ذلك إتاحة البيان الربع سنوي للفترة المنتهية في 31 ديسمبر 2023م، واحصل على نسخة من البيان من خلال الضغط هنا."
      />
      <ScrollToTopButton />
      <Hero title="التصريحات" />
      <section className='Announcements-sec'>
        <div className='Announcements-container'>
          <div className='Announcements-content'>
            <h3>التصريحات</h3>
            {AnnouncementsData.slice(0, itemsToShow).map((announcement, index) => (
              <AnnouncementsBox
                key={index}
                p1={announcement.p1}
                p2={announcement.p2}
                p3={announcement.p3}
                span={announcement.span}
              />
            ))}
            <div ref={loaderRef} style={{ height: '100px', textAlign: 'center', margin: '20px 0' }}>

              {itemsToShow < AnnouncementsData.length && <div ref={loaderRef} style={{ height: '100px', margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
              <Player autoplay loop src={loaderl} style={{ height: '100px', width: '100px' }} />
            </div>}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Announcements;
