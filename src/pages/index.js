import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/style/index.module.css";
import "../components/style/index.css";
import ItqanC from '../components/ItqanC';
import Distinction from '../components/distinction';
import SecFooter from '../components/SecFooter';
import ScrollToTopButton from '../components/ScrollToTopButton';
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
      className='Reports-data-single-card security-single-card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <img src={imgSrc} alt="" />
        <p>{content}</p>
    </div>
  );
};
const Index  = () => {   
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.products-single').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect(); 
  }, []);

  const backgrounds = [
    "Property1Default.jpg",
    "Rectangle%203-minn.png", 
    "Rectangle%201-min.png",
  ];

  
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);

  useEffect(() => {
    
    const changeBackground = () => {
      setCurrentBackground((prev) => {
        
        const index = backgrounds.indexOf(prev);
        
        return backgrounds[(index + 1) % backgrounds.length];
      });
    };


    const intervalId = setInterval(changeBackground, 5000);


    return () => clearInterval(intervalId);
  }, []); 

  return (
    <Layout>
      <ScrollToTopButton/>
    <section className="hero-homepage-sec"  style={{ backgroundImage: `url( ${currentBackground} ) ` }}>
      
      <div className="hero-homepage-container">
        <div className="hero-homepage-content">
          <span><img src="/Isolation_Mode.svg"/>إتقان كابيتال<img src="/Isolation_Mode.svg"/></span>
          <h1><img src="/Vector.svg"/>رواد الاستثمار الأكثر ثقة</h1>
          <p>“إتقان كابيتال” هي شركة استثمارية تقدم منتجات وخدمات استثمارية متوافقة مع الشريعة الإسلامية وتتعامل في السوق المالي السعودي وأسواق دول مجلس التعاون الخليج العربي.</p>
          <Link to='/IndividualsLogin'>    <div class="button-wrapper"><button> <img src="/Vector1.svg"/>أنشئ حساب جديد</button> </div></Link>
         
        </div>
      </div>
    </section>
    <section className="products-sec">
      <div className="products-container">
      <h1>منتجات إتقان كابيتال</h1>
          <p>نقدم لك مجموعة من الخدمات المالية والبحوث وإدارة الأصول وغيرها من الخدمات الخاصة</p>
          <div className="products-content">
            <div className="products-single">
              <Link to="/AssetManagement"><button><img src="/Control Panel Icon.png"/>إدارة الأصول</button></Link>
            </div>
            <div className="products-single">
            <Link to="/InvestmentBanking"><button><img src="/Consultation.png"/>الخدمات المصرفية الاستثمارية</button></Link>
            </div>
            <div className="products-single">
            <Link to="/ConservationServices"><button><img src="/Examination.png"/>خدمات الحفظ</button></Link>
            </div>
            <div className="products-single">
            <Link to="/AdvisoryResearch"> <button><img src="/Reporting.png"/>الأبحاث المنشورة</button></Link>
            </div>
            <div className="products-single">
            <Link to='/IndividualsLogin'> <button><img src="/New Account.png"/>فتح حساب جديد</button></Link>
            </div>
          </div>
        <ItqanC/>
      </div>

    </section>
    <Distinction/>
    <section class="exchange-rates-section">
      <div class="exchange-rates-container">
        <h2>إحصائيات الصرافة</h2>
        <table>
        
          <tr>  
            <th>متوسط الذكاء السنوي</th>
            <th>أيام التقييم</th>
            <th>تاريخ التقييم</th>
            <th>سعر الوحدة الحالي</th>
            <th>اسم الصندوق</th>
          </tr>
          <tr >
            <td>3.81</td> 
            <td>يومي</td>
            <td>10/01/2024</td>
            <td>SAR 13.9661</td>
            <td className='box-name'>صندوق المرابحات والصكوك<img src='/Frame 1.png'/></td>    
          </tr>
          <tr>
            <td>1.93</td>
            
            <td>الإثنين , الأربعاء</td>
          
            <td>10/01/2024</td>
            <td>SAR 16.7911</td>
            <td className='box-name'>صندوق إتقان للأسهم السعودية<img src='/Frame 1.png'/></td>      
          </tr>
        </table>
      </div>
    </section>
    <section className='Reports-data-sec'>
      <div className='Reports-data-container'>
        <div className='Reports-data-title'>
          <h1>التقارير والبيانات</h1>
          <p>اطّلع على آخر التحليلات والرؤى للأسواق المالية</p>
        </div>
        <div className='Reports-data-cards'>
        <SecurityCard
                        defaultImgSrc='/Breaking.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='البيانات المالية'
                        hoverContent='الإطلاع على ملف PDF'
                    />
                    <SecurityCard
                        defaultImgSrc='/Documents.png'
                        hoverImgSrc='/PDF.png' 
                        defaultContent='التقارير السنوية'
                        hoverContent='الإطلاع على ملف PDF'
                    />
        </div>
       
      </div>
    </section>
    <SecFooter/>
    <div className='sec-footer-background'></div>
  </Layout>
  )
}
export const Head = () => <Seo title="Home" />
export default Index 