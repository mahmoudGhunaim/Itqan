import React from 'react'
import Hero from '../components/Hero';
import Layout from "../components/layout";
import Accordion from '../components/Accordion';
import ScrollToTopButton from '../components/ScrollToTopButton';
import accordionData from '../Json/reports.json';
import { FormattedMessage } from 'react-intl';
import accordionDataen from '../Json/reportsen.json';
import { useLocalization } from '../context/LocalizationContext';

import "../components/style/index.css";
import Seo from '../components/seo';
const Reports = () => {
  const { locale } = useLocalization();

  return (
    <Layout>
      <ScrollToTopButton />
      <Seo
      title="التقارير - موارد وتحليلات مفيدة من إتقان كابيتال      "
      description="تصفح التقارير والتحليلات الهامة التي تقدمها شركة إتقان كابيتال، الشركة الاستثمارية المتخصصة في المملكة العربية السعودية، لاستفادة من مصادر المعرفة والتحليلات في مجال الاستثمار والأسواق المالية.      "/>
      <Hero
        title={<FormattedMessage id="reports.heroTitle" />}
        subTitle={<FormattedMessage id="reports.heroSubTitle" />}
      />
      <ScrollToTopButton />
      <section className='assetManagement-accordion Reports-sec'>
        <h3><FormattedMessage id="reports.sectionTitle" /></h3>
        <div className='assetManagement-accordion-container'>
          {locale === "ar" ? (
            accordionData.map((item, index) => (
              <Accordion 
                key={index}
                title={item.title}
                Details={item.Details}
              />
            ))
          ) : locale === "en" ? (
            accordionDataen.map((item, index) => (
              <Accordion 
                key={index}
                title={item.title}
                Details={item.Details}
              />
            ))
          ) : (
            <p>Unsupported locale</p>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Reports;

