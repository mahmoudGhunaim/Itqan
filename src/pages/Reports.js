import React from 'react'
import Hero from '../components/Hero';
import Layout from "../components/layout";
import Accordion from '../components/Accordion';
import ScrollToTopButton from '../components/ScrollToTopButton';
import accordionData from '../Json/Accordion.json';
import "../components/style/index.css";
const Reports = () => {
  return (
    <Layout>
        <Hero
        title="التقارير"
        subTitle="“المصادر”"
        />
        <ScrollToTopButton/>
        <section className='assetManagement-accordion Reports-sec'>
            <h3>التقارير</h3>
            <div className='assetManagement-accordion-container'>
            {accordionData.map((item, index) => (
            <Accordion 
            key={index}
            title={item.title}
            Details={item.Details}
            />
        ))}
        </div>

        </section>
    </Layout>
  )
}

export default Reports