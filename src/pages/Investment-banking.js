import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Hero from '../components/Hero';
import Layout from "../components/layout";
import PrivateBox from '../components/Card';
import InfoPanel from '../components/InfoPanel';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/style/InvestmentBanking.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Seo from '../components/seo';
import { FormattedMessage } from 'react-intl';
import { useLocalization } from '../context/LocalizationContext';

const InvestmentBanking = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { locale } = useLocalization();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://itqan-strapi.softylus.com/api/pages/?filters[custom_slug][$eq]=Investment-banking&locale=${locale}&populate[sections][populate][section_content][populate]=*&populate=image`, {
          headers: {
            Authorization: 'Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c'
          }
        });
        setPageData(response.data.data[0].attributes);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pageData) return null;
  const { meta_title, meta_description, sections } = pageData;
  console.log("aaff",sections.data[0].attributes.section_title)
  const contentCards = sections.data[0].attributes.section_content.filter(item => item.__component === "blocks.content-card");
  const contentTabs = sections.data[0].attributes.section_content.find(item => item.__component === "blocks.content-tabs");
  console.log("tapss",contentTabs)
  return (
   <Layout>
    <Seo
     title={meta_title}
     description={meta_description}
    />
    <ScrollToTopButton/>
    <Hero 
      title={sections.data[0].attributes.section_title}
    />
    <section className='investment-banking-sec'>
        <div className='investment-banking-title'>
        </div>
        <div className='investment-banking-container-card'>
          {contentCards.slice(0, 2).map((card, index) => (
            <PrivateBox
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              hidebutton="none"
              imgSrc={`https://itqan-strapi.softylus.com/${card.image.data.attributes.url}`}
              spaceP={index === 1 ? "25px" : undefined}
            />
          ))}
        </div>
        <div className='investment-banking-info-card'>
          <section className='infopanel-sec bg-infopanel-sec'>
            <div className='infopanel-container'>
              <div className='infopanel-content'>
                <h2>{contentTabs.content[0].title}</h2>
                <p>{contentTabs.content[0].subtitle}</p>
                <Tabs>
                  <TabList>
                    {contentTabs.tabs.map((tab, index) => (
                      <Tab key={index}>{tab.title}</Tab>
                    ))}
                  </TabList>
                  {contentTabs.tabs.map((tab, index) => (
                    <TabPanel key={index}>
                      <h2>{tab.subtitle}</h2>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
              
              <div className='infopanel-image'>
                <h2>{contentTabs.content[0].title}</h2>
              </div>
            </div>
          </section>
        </div>
        <div className='investment-banking-container-card'>
          {contentCards.slice(2).map((card, index) => (
            <PrivateBox
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              hidebutton="none"
              imgSrc={`https://itqan-strapi.softylus.com/${card.image.data.attributes.url}`}
              />
          ))}
        </div>
    </section>
   </Layout>
  )
}
export default InvestmentBanking