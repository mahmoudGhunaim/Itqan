import React, { useState } from 'react'
import "../components/style/AssetManagement.css"
import Layout from "../components/layout";
import ItqanC from '../components/ItqanC';
import Distinction from '../components/distinction';
import SecFooter from '../components/SecFooter';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import InfoPanel from '../components/InfoPanel';
import Accordion from '../components/Accordion';
import accordionData from '../Json/Accordion.json';
import PrivateBox from '../components/PrivateBoxCard';
import PrivateBoxData from "../Json/PrivateBoxData.json"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Seo from '../components/seo';
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="btn-sliider">
      <button onClick={() => swiper.slidePrev()} className=''><img src='/arrow-circle-left.png' /></button>
      <button onClick={() => swiper.slideNext()} className=''><img src='/arrow-circle-right.png' /></button>
    </div>
  )
}
const AssetManagement = () => {
  const [activeButton, setActiveButton] = useState("stock");

  const [content, setContent] = useState(
    <section className='AssetManagement-title'>
      <h2 className='boxes-title'>صناديق الأسهم والمرابحات العامة</h2>
      <InfoPanel
        title="صندوق المرابحات والصكوك     "
        paragraph="يهدف صندوق إتقان للمرابحات والصكوك إلى تحقيق عائدات مجزية للمستثمرين على المدى القصير والمتوسط متوافقة مع الضوابط الشرعية للاستثمار، والعمل على المحافظة على رأس مال المستثمر وتوفير إمكانية الاسترداد حسب الحاجة بأمثل طريقة لإدارة المخاطر. بهدف تحقيق أهدافه الاستثمارية، سيستثمر الصندوق بشكل أساسي في السوق السعودية في محفظة استثمارية متنوعة مكونة من أدوات استثمارية عالية الجودة وقصيرة الأجل ومتوافقة مع الضوابط الشرعية للاستثمار بما يشمل:"
        point1="صفقات السلع القائمة على المرابحة."
        point2="الصكوك باختلاف أنواعها، بشكل مباشر وغير مباشر، بحد أقصى 30% من صافي قيمة أصول الصندوق."
        point3="وحدات صناديق استثمارية تستثمر في المرابحات و/ أو الصكوك بشكل رئيسي."
        point4="وحدات صناديق الاستثمار التي تستثمر في أدوات الاستثمار المختلفة بما في ذلك المرابحة والمضاربة والاستصناع والسلم."
        button="استثمر بذكاء مع صندوق إتقان"
        image="/Frame 136.png"
        links="/Individuals-login"
      />
      <InfoPanel
        title="صندوق الأسهم السعودية"
        paragraph="يهدف صندوق إتقان كابيتال للأسهم السعودية، وهو صندوق استثماري مفتوح، لتحقيق نمو في رأس المال في المدى المتوسط والطويل من خلال الاستثمار في أسهم الشركات المدرجة في سوق الأسهم السعودية الرئيسية أو المدرجة في سوق الأسهم السعودية الموازية (نمو)، وفي أسهم الإصدارات الأولية وحقوق الأولوية المدرجة في سوق الأسهم السعودية الرئيسية أو المدرجة في سوق الأسهم السعودية الموازية (نمو)، وصناديق المؤشرات المتداولة (ETFs) والصناديق العقارية المتداولة وصناديق الاستثمار في الأسهم السعودية و صناديق أسواق النقد وصناديق الدخل الثابت المرخصة من هيئة السوق المالية وأدوات الدخل الثابت والنقد وأشباه النقود المتوافقة مع ضوابط هيئة الرقابة الشرعية ذات تصنيف ائتماني بحد أدنى- BBB أو ما يعادلها في تصنيفات وكالات التصنيف الائتماني."
        button="استثمر بذكاء مع صندوق إتقان"
        image="/Frame 138.png"
        revers="row-reverse"
        none="none"
        links="/Individuals-login"
      />
    </section>
  );
;

  const handlePortfolioManagementClick = () => {
    setContent(<section className='management-portfolios-sec'> < h2 className='boxes-title'>إدارة المحافظ</h2>
    <InfoPanel
    title="إدارة المحافظ
    "
    paragraph="ترتبط الإدارة الناجحة للثروات ارتباطاً مباشراً بجودة المشورة الأساسية، والتي تعتمد بدورها على خبرة المستشار وقدراته. وفي إتقان، يركز فريقنا من المتخصصين ذوي الخبرة على وضع الاستراتيجيات المثلى لكل عميل على حدة وتنفيذها، ونعتمد على الخبرات الخارجية عند الاقتضاء. فبدلاً من تقديم حلول جاهزة، التي غالباً ما تكون العنصر الأساسي لدى كبرى شركات إدارة الثروات، نركز على توفير استجابات تتوافق بدقة مع الاحتياجات والتوقعات الشخصية ومدى القدرة على تحمل المخاطر.
    إن هيكل رسوم إتقان كابيتال مصمم طبقاً لطبيعة المنتج ومدة الإدارة والموارد المطلوبة وليس بالاعتماد على معدل أو نسبة ثابتة."
  
    button="استفد من تجربتنا الفريدة الآن"
    image="/Frame 139.png"
    revers="row-reverse"
    none="none"
    links="/Individuals-login"
    /></section>);
    setActiveButton("portfolio");
  };

  const handlePrivateFundsClick = () => {
    setContent( <section className='private-box-sec'>
    <div  className='private-box-container'>
    <Swiper className="swiper-Discover"
        breakpointsInverse={true}
        breakpoints={{
          900: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1070:{
            slidesPerView: 2 ,
            spaceBetween: 50,
          },
          
          1300: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1640:{
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }} // Enable pagination and make the bullets clickable.

        spaceBetween={0}
        direction="horizontal"

        scrollbar={{ draggable: true }}

        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       
      >
      <div  className='private-box-title'>
        <h2>الصناديق الخاصة</h2>
        <SliderButtons />
      </div>
      <div  className='private-box-card'>
            {PrivateBoxData.map((item, index) => (
         <SwiperSlide className="swiper-Discover-Slide"><PrivateBox 
          key={index} 
          title={item.title}
          subtitle={item.subtitle}
          Button={item.button}
          imgSrc={item.imgSrc}
          size={item.size}
          link={item.link} 
          hidebutton="none"
        /></SwiperSlide>
      ))}
      </div>
      </Swiper>
    </div>
  </section>);
      setActiveButton("private");

  };

  const handleStockFundsClick = () => {
    setContent(<section className='AssetManagement-title'>
    <h2 className='boxes-title'>صناديق الأسهم والمرابحات العامة</h2>
    <InfoPanel
    title="صندوق المرابحات والصكوك     "
    paragraph="يهدف صندوق إتقان للمرابحات والصكوك إلى تحقيق عائدات مجزية للمستثمرين على المدى القصير والمتوسط متوافقة مع الضوابط الشرعية للاستثمار، والعمل على المحافظة على رأس مال المستثمر وتوفير إمكانية الاسترداد حسب الحاجة بأمثل طريقة لإدارة المخاطر. بهدف تحقيق أهدافه الاستثمارية، سيستثمر الصندوق بشكل أساسي في السوق السعودية في محفظة استثمارية متنوعة مكونة من أدوات استثمارية عالية الجودة وقصيرة الأجل ومتوافقة مع الضوابط الشرعية للاستثمار بما يشمل:"
    point1="صفقات السلع القائمة على المرابحة."
    point2="الصكوك باختلاف أنواعها، بشكل مباشر وغير مباشر، بحد أقصى 30% من صافي قيمة أصول الصندوق."
    point3="وحدات صناديق استثمارية تستثمر في المرابحات و/ أو الصكوك بشكل رئيسي."
    point4="وحدات صناديق الاستثمار التي تستثمر في أدوات الاستثمار المختلفة بما في ذلك المرابحة والمضاربة والاستصناع والسلم."
    button="استثمر بذكاء مع صندوق إتقان"
    image="/Frame 136.png"
    links="/Individuals-login"
    
    />
    <InfoPanel
    title="صندوق الأسهم السعودية
    "
    paragraph="يهدف صندوق إتقان كابيتال للأسهم السعودية، وهو صندوق استثماري مفتوح، لتحقيق نمو في رأس المال في المدى المتوسط والطويل من خلال الاستثمار في أسهم الشركات المدرجة في سوق الأسهم السعودية الرئيسية أو المدرجة في سوق الأسهم السعودية الموازية (نمو)، وفي أسهم الإصدارات الأولية وحقوق الأولوية المدرجة في سوق الأسهم السعودية الرئيسية أو المدرجة في سوق الأسهم السعودية الموازية (نمو)، وصناديق المؤشرات المتداولة (ETFs) والصناديق العقارية المتداولة وصناديق الاستثمار في الأسهم السعودية و صناديق أسواق النقد وصناديق الدخل الثابت المرخصة من هيئة السوق المالية وأدوات الدخل الثابت والنقد وأشباه النقود المتوافقة مع ضوابط هيئة الرقابة الشرعية ذات تصنيف ائتماني بحد أدنى- BBB أو ما يعادلها في تصنيفات وكالات التصنيف الائتماني."
  
    button="استثمر بذكاء مع صندوق إتقان"
    image="/Frame 138.png"
    revers="row-reverse"
    none="none"
    links="/Individuals-login"
    /> 
    <section className='assetManagement-accordion'>
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
    </section>);
        setActiveButton("stock");
  };

  return (
    <Layout>
      <Seo
        title="خدمات إدارة الأصول في شركة إتقان كابيتال - صناديق الأسهم والمرابحات والعقارات        "
        description="اكتشف خدمات إدارة الأصول التي تقدمها شركة إتقان كابيتال، بما في ذلك صناديق الأسهم والمرابحات وصندوق العقارات، واستفد من الاستشارات المالية المخصصة لتحقيق أهداف استثمارية متوافقة مع الضوابط الشرعية.        "/>
        <Hero
        title=" إدارة الأصول"
        subTitle="“خدمات إدارة الأصول”"/>
        <section className='assetManagement-all-sec'>
        <div className="buttons-container">
        <button
          className={activeButton === "portfolio" ? "active" : ""}
          onClick={handlePortfolioManagementClick}
        >
          أدارة المحافظ
        </button>
        <button
          className={activeButton === "private" ? "active" : ""}
          onClick={handlePrivateFundsClick}
        >
          الصناديق الخاصة
        </button>
        <button
          className={activeButton === "stock" ? "active" : ""}
          onClick={handleStockFundsClick}
        >
          الصناديق العامة
        </button>
      </div>
      {content}
      </section>
      <div className="content">
       
      </div>
        <ScrollToTopButton/>
        
       
      
      
    </Layout>
  )
}

export default AssetManagement