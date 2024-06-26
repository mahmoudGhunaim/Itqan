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
    "JeddahCORNICHE.jpg",
    "Rectangle%201-min.png",
    "Rectangle%203-minn.png", 
  ];

  
  const [currentBackground, setCurrentBackground] = useState(backgrounds[0]);
  const [opacity, setOpacity] = useState(1); // Start with full opacity

  useEffect(() => {
    const changeBackground = () => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentBackground(prev => {
          const index = backgrounds.indexOf(prev);
          return backgrounds[(index + 1) % backgrounds.length];
        });

        setOpacity(1);
      }, 500); // Adjust timing to match CSS transition time
    };

    const intervalId = setInterval(changeBackground, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <ScrollToTopButton/>
      <section className="hero-homepage-sec" style={{ backgroundImage: `url(${currentBackground})` }}>
      
      <div className="hero-homepage-container">
        <div className="hero-homepage-content">
          <span><img src="/Isolation_Mode.svg"/>إتقان كابيتال<img src="/Isolation_Mode.svg"/></span>
          <h1><img src="/Vector.svg"/>رواد الاستثمار الأكثر ثقة</h1>
          <p>“إتقان كابيتال” هي شركة استثمارية تقدم منتجات وخدمات استثمارية متوافقة مع الشريعة الإسلامية وتتعامل في السوق المالي السعودي وأسواق دول مجلس التعاون الخليج العربي.</p>
          <Link to='/Individuals-login'>    <div class="button-wrapper"><button> <img src="/Vector1.svg"/><div className='z-index'>أنشئ حساب جديد</div></button> </div></Link>
         
        </div>
      </div>
    </section>
    <section className="products-sec">
      <div className="products-container">
      <h1>منتجات إتقان كابيتال</h1>
          <p>نقدم لك مجموعة من الخدمات المالية والبحوث وإدارة الأصول وغيرها من الخدمات الخاصة</p>
          <div className="products-content">
            <div className="products-single">
              <Link to="/asset-management"><button><img src="/Control Panel Icon.png"/>إدارة الأصول</button></Link>
            </div>
            <div className="products-single">
            <Link to="/Investment-banking"><button><img src="/Consultation.png"/>الخدمات المصرفية الاستثمارية</button></Link>
            </div>
            <div className="products-single">
            <Link to="/conservation-services"><button><img src="/Examination.png"/>خدمات الحفظ</button></Link>
            </div>
            <div className="products-single">
            <Link to="/advisory-research"> <button><img src="/Reporting.png"/>إدارة الثروات</button></Link>
            </div>
            <div className="products-single">
            <Link to='/Individuals-login'> <button><img src="/New Account.png"/>فتح حساب جديد</button></Link>
            </div>
          </div>
        <ItqanC/>
      </div>

    </section>
    <Distinction/>
    <section class="exchange-rates-section">
      <div class="exchange-rates-container">
        <h2>أداء الصناديق</h2>
        <div className='exchange-rate-card' >
                  <table>
        
          <tr>  
            <th>متوسط الأداء السنوي</th>
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
            <td className='box-name'>صندوق إتقان للمرابحات والصكوك<img src='/Frame 1.png'/></td>
          </tr>
          <tr>
            <td>1.93</td>
            
            <td>الإثنين , الأربعاء</td>
          
            <td>10/01/2024</td>
            <td>SAR 16.7911</td>
            <td className='box-name'>صندوق إتقان كابيتال للأسهم السعودية<img src='/Frame 1.png'/></td>      
          </tr>
        </table>
        </div>
      </div>
    </section>
    {/* <section className='Reports-data-sec'>
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
    </section> */}
    <div className='space-homepage'></div>
    <SecFooter/>
    <div className='sec-footer-background'></div>
  </Layout>
  )
}
export const Head = () => <Seo title="إتقان كابيتال - رواد الاستثمار الإسلامي في السوق المالي السعودي"
description="استكشف خدمات إتقان كابيتال المتوافقة مع الشريعة الإسلامية، بما في ذلك إدارة الأصول، الخدمات المصرفية الاستثمارية، وخدمات الحفظ. انضم إلينا لتحقيق التميز في استثماراتك بالسوق المالي السعودي ودول مجلس التعاون الخليجي."
/>
export default Index 