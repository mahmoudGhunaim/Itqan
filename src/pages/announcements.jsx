import React, { useState, useEffect, useRef } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import AnnouncementsBox from '../components/AnnouncementsBox';
import AnnouncementsData from "../Json/AnnouncementsData.json";
import "../components/style/Announcements.css";
import Seo from '../components/seo';
import { Player } from '@lottiefiles/react-lottie-player';
import loaderl from "../Json/loaderl.json";

const Announcements = () => {
  // const [itemsToShow, setItemsToShow] = useState(8); // Start with 8 items
  // const [loading, setLoading] = useState(false);
  // const loaderRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (itemsToShow < AnnouncementsData.length && !loading) {
  //       setLoading(true);
  //       setTimeout(() => {
  //         setItemsToShow(itemsToShow + 4);
  //         setLoading(false);
  //       }, 2000); // Delay the display of next 4 items by 2 seconds
  //     }
  //   }, 10000); // Check every 2 seconds if more items should be displayed

  //   return () => clearInterval(interval); // Clean up the interval on component unmount
  // }, [itemsToShow, loading]);

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
            {AnnouncementsData.slice(0, AnnouncementsData.length + 1).map((announcement, index) => (
              <AnnouncementsBox
                key={index}
                p1={announcement.p1}
                p2={announcement.p2}
                p3={announcement.p3}
                span={announcement.span}
                link={announcement.link}
              />
            ))}

            {/* {loading && (
              <div ref={loaderRef} style={{ height: '100px', margin: '30px 0', display: 'flex', justifyContent: 'center' }}>
                <Player autoplay loop src={loaderl} style={{ height: '100px', width: '100px' }} />
              </div>
            )} */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Announcements;
