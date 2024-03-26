import React, { useState } from 'react';
import Layout from "../components/layout";
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import ResearchLibraryBox from '../components/ResearchLibraryBox';
import ResearchLibraryData from "../Json/ResearchLibraryData.json"
import "../components/style/ResearchLibrary.css"
const ResearchLibrary = () => {
      // Calculate the number of items to show per "page"
  const itemsPerRow = 4; // Assuming each row has 4 items
  const initialRows = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerRow * initialRows);

  const handleReadMore = () => {
    setVisibleItems(ResearchLibraryData.length); // Show all items
  };
  return (
    <Layout>
        <ScrollToTopButton/>
        <Hero title="مكتبة البحوث"
        subTitle="“المصادر”"/>
        <section className='ResearchLibrary-sec'>
            <div className='ResearchLibrary-container'>
                <div className='ResearchLibrary-title'>
                    <h3>مكتبة البحوث</h3>
                </div>
                <div className='ResearchLibrary-boxes'>
                {ResearchLibraryData.slice(0, visibleItems).map((item, index) => (
                    <ResearchLibraryBox
                      key={index}
                      title={item.title}
                      description={item.description}
                      imgSrc={item.imgSrc}
                    />
                ))}
                </div>
                {visibleItems < ResearchLibraryData.length && (
                  <button onClick={handleReadMore} className="read-more-btn">اقرأ المزيد</button>
                )}
            </div>
        </section>
    </Layout>
  )
}

export default ResearchLibrary