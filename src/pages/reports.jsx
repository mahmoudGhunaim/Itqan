import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layout';
import Accordion from '../components/Accordion';
import accordionData from '../Json/reports.json'; // Ensure your data structure matches this file
import Seo from '../components/seo';
import { useLocalization } from '../context/LocalizationContext';

const Reports = () => {
  const { locale } = useLocalization();

  return (
    <Layout>
      <Seo
        title={locale === 'en' ? 'Reports - Useful Resources from Itqan Capital' : 'التقارير - موارد وتحليلات مفيدة من إتقان كابيتال'}
        description={locale === 'en' ? 'Browse important reports and analyses provided by Itqan Capital, the investment company specializing in Saudi Arabia, to benefit from knowledge and analysis in investment and financial markets.' : 'تصفح التقارير والتحليلات الهامة التي تقدمها شركة إتقان كابيتال، الشركة الاستثمارية المتخصصة في المملكة العربية السعودية، لاستفادة من مصادر المعرفة والتحليلات في مجال الاستثمار والأسواق المالية.'}
      />
      <h1><FormattedMessage id="reports_page_title" /></h1>
      <h2><FormattedMessage id="reports_page_subtitle" /></h2>
      <section className='assetManagement-accordion Reports-sec'>
        <h3><FormattedMessage id="reports_section_title" /></h3>
        <div className='assetManagement-accordion-container'>
        {accordionData.map((item, index) => (
            <Accordion 
              key={index}
              title={locale === 'en' ? item.title : (item.titleAr || item.title)} // Adjust as per your actual data structure
              Details={item.Details}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Reports;
