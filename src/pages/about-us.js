import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import ItqanC from '../components/ItqanC';
import Distinction from '../components/distinction';
import SecFooter from '../components/SecFooter';
import '../components/style/AboutUs.css';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import Seo from '../components/seo';

const AboutUS = () => {
  return (
    <Layout>
      <Seo
         title="إتقان كابيتال: الريادة في الاستثمار الإسلامي والخدمات المالية بالمملكة      "
        description="اكتشف إتقان كابيتال، الشركة السعودية الرائدة في تقديم منتجات وخدمات استثمارية متوافقة مع الشريعة الإسلامية. مع تركيز على الدقة، الشغف، والكمال، نحن ملتزمون بتحقيق أعلى معايير الاستثمار لعملائنا في السوق المالية السعودية وأسواق دول مجلس التعاون الخليجي.      "
      />
      <ScrollToTopButton />
      <Hero
        title={<FormattedMessage id="hero_title_about" />}
        subTitle={<FormattedMessage id="hero_subtitle" />}
      />
      <section className="who-are-we-sec">
        <div className="who-are-we-container">
          <div className="who-are-we-title">
            <h3><FormattedMessage id="who_we_are" /></h3>
            <p>
              <FormattedMessage id="about_us_paragraph_1" />
            </p>
            <p>
              <FormattedMessage id="about_us_paragraph_2" />
            </p>
            <p>
              <FormattedMessage id="about_us_paragraph_3" />
            </p>
          </div>
          <ItqanC />
        </div>
      </section>
      <Distinction />
      <SecFooter />
      <div className="sec-footer-background"></div>
    </Layout>
  );
};

export default AboutUS;
