import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import Accordion from '../components/AccordionV2';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useLocalization } from '../context/LocalizationContext';
import Seo from '../components/seo';

const Reports = () => {
  const { locale } = useLocalization();
  const [pageData, setPageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchPageData = async () => {
      setIsLoading(true);
      const token = '848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c';
    
      try {
        const response = await fetch(`https://itqan-strapi.softylus.com/api/pages/?filters[custom_slug][$eq]=reports&populate[sections][populate][section_content][populate]=*&locale=${locale}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPageData(data);
      } catch (error) {
        console.error('Error fetching page data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, [locale]);

  if (isLoading) {
    return <div>Loading...</div>;
  }  if (!pageData || !pageData.data) {
    return <div>Error loading page data</div>;
  }

  console.log("aaa",pageData.data)
  const { attributes } = pageData.data[0];
  const { meta_title, meta_description, sections } = attributes;

  // Find the hero section
  const heroSection = sections.data.find(section => 
    section.attributes.section_content.some(item => item.__component === 'blocks.hero-section')
  );

  const heroContent = heroSection?.attributes.section_content.find(item => item.__component === 'blocks.hero-section');

  return (
    <Layout>
      <ScrollToTopButton />
      <Seo title={meta_title} description={meta_description} />
      
      {/* Hero section */}
      {heroContent && (
        <Hero
          title={heroContent.title}
          subTitle={heroContent.subtitle}
        />
      )}

      {/* Other sections */}
      {sections.data.map((section) => (
        <section key={section.id} className="assetManagement-accordion Reports-sec">
          <h3>{section.attributes.section_title}</h3>
          <div className="assetManagement-accordion-container">
            {section.attributes.section_content
              .filter(item => item.__component === 'test.accordion')
              .map((item, index) => {
                console.log("Accordion Item:", item);
                return (
                  <Accordion
                    key={index}
                    title={item.title}
                    links={item.accordion_link}
                  />
                );
              })}
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Reports;