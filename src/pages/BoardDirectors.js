import React from 'react'
import Layout from "../components/layout";
import Hero from '../components/Hero';
import "../components/style/index.css";

import ScrollToTopButton from '../components/ScrollToTopButton';
const BoardDirectors = () => {
  return (
   <Layout>
    <ScrollToTopButton/>
    <Hero
    title="الهيكل التنظيمي"/>
    <section className='BoardDirectors-sec'>
        <img  src='/org-chart-3 1.png'/>
    </section>
   </Layout>
  )
}

export default BoardDirectors