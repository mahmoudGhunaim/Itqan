import React,{useState} from 'react'
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import InfoPanel from '../components/InfoPanel';
import "../components/style/index.css";
import Seo from '../components/seo';
import { Link } from "gatsby";

const SecurityCard = ({ defaultContent, hoverContent, defaultImgSrc, hoverImgSrc }) => {
  const [content, setContent] = useState(defaultContent);
  const [imgSrc, setImgSrc] = useState(defaultImgSrc);

  // Update both content and image source on hover
  const handleMouseEnter = () => {
    setContent(hoverContent);
    setImgSrc(hoverImgSrc);
  };

  // Revert to default content and image source when not hovered
  const handleMouseLeave = () => {
    setContent(defaultContent);
    setImgSrc(defaultImgSrc);
  };

  return (
    <div 
      className='Reports-data-single-card security-single-card ShariyahReview-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <img src={imgSrc} alt="" />
        <p>{content}</p>
    </div>
  );
};

const ShariyahReview = () => {
  return (
    <Layout>
      <Seo 
      title="الهيئة الشرعية - شراكة “إتقان كابيتال” مع هيئة الرقابة الشرعية      "
      description="استكشف كيف تتعاون “إتقان كابيتال” مع هيئة الرقابة الشرعية في تقديم الحلول المتوافقة مع الشريعة الإسلامية لمنتجاتها الاستثمارية. تعرف على كيفية تأمين المزايا التنافسية ودعم الإطلاق السريع للمنتجات من خلال هذه الشراكة.      "/>
        <ScrollToTopButton/>
        <Hero
        title="الهيئة الشرعية"/>
        <section className='ShariyahReview-sec'>
          <div className='ShariyahReview-container'>
        <section className={`infopanel-sec`}>
        <div className='infopanel-container' style={{flexDirection: "row-reverse"}}>
            <div className='infopanel-content ShariyahReview-content'>
                <h2>الهيئة الشرعية</h2>
                <p>تتعاون “إتقان كابيتال” مع هيئة الرقابة الشرعية، الذي يلتزم فريقها بالعمل معنا وتقديم الحلول المتوافقة مع الضوابط القانونية لمنتجاتنا، ويساهم التواصل الفعال مع شبكتهم من مستشاري الشريعة بكل فعالية في دعمنا لإطلاق منتجاتنا بسرعة تمنحنا مزايا تنافسية</p>
              
                <Link to="https://shariyah.net"><button>لمزيدٍ من المعلومات عن هيئة الرقابة الشرعي</button></Link>
                <Link to="https://itqancapital.com/wp-content/uploads/2023/12/ItqanCapital%202023ShariahAuditReport.pdf">
        <SecurityCard
                        defaultImgSrc='/Investor.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent=' التقارير السنوية'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                    </Link>
            </div>
            <div className='infopanel-image'>
                <img src="/abour_01 1.png"/>
            </div>
        </div>
    </section>
        </div>
        </section>


    </Layout>
  )
}

export default ShariyahReview