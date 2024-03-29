import React from 'react'
import { Link } from "gatsby";
import Layout from "../components/layout";
import ItqanC from '../components/ItqanC';
import Distinction from '../components/distinction';
import SecFooter from '../components/SecFooter';
import "../components/style/AboutUs.css"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
const AboutUS = () => {
  return (
    <Layout>
      <ScrollToTopButton/>
      <Hero
      title="لمحة عامة"
      subTitle="“نبذة عنا”"/>
      <section className='who-are-we-sec'>
        <div className='who-are-we-container'>
          
          <div className='who-are-we-title'>
          <h3>من نحن؟</h3>
            <p>“إتقان كابيتال” هي شركة مساهمة مقفلة شخص واحد سعودية تقدم منتجات وخدمات استثمارية متوافقة مع الشريعة الإسلامية وتتعامل في السوق المالية السعودية وأسواق دول مجلس التعاون الخليج العربي، وتم التراخيص لها من قبل هيئة السوق المالية في أنشطة التعامل، وإدارة الاستثمارات وتشغيل الصناديق، والترتيب، وتقديم المشورة، والحفظ في أعمال الأوراق المالية. تحمل الشركة سجل تجاري رقم (4030167335) بتاريخ 2007/3/6م ، ويبلغ رأس مالها المدفوع (56,042,030)ريال سعودي. شركة إتقان كابيتال مرخصة من قبل هيئة السوق المالية السعودية بترخيص رقم (37-07058) وتاريخ 2007/04/09م ومارسة العمل إبتداءً من 2008/04/29م.</p>
            <p>نسعى بكل ما أوتينا من قوة وعزم إلى تبوء الريادة لنكون الشركة السعودية الأبرز والأكثر ثقة في تقديم العروض الاستثمارية للأفراد والمنظمات والمؤسسات والشركات الخاصة. وإتقان هو اسمنا ورسالتنا التي تحمل بين طياتها القيم والمفاهيم التي نؤمن بها وهي: الكمال والدقة والشغف. ونقدّم استرشاداً بهذه القيم مجموعة من الخدمات الاحترافية والجديرة بالثقة. نعكف في “إتقان كابيتال” على تصميم وإدارة مجموعة متنوعة من أفضل المنتجات والخدمات الاستثمارية التي تحقق عائدات مجزية للمستثمرين بمراعاة المخاطر المحتملة ونمواً قوياً للمساهمين في شركتنا.</p>
            <p>شركة إتقان كابيتال مملوكة بالكامل لشركة الزامل للتنمية والتطوير القابضة وهي شركة متخصصة في عدة قطاعات وتمتلك سجل حافل بالإنجازات داخل وخارج المملكة العربية السعودية.</p>
          </div>
        <ItqanC/>
        </div>
      </section>
      
        <Distinction/>
        <SecFooter/>
        <div className='sec-footer-background'></div>
    </Layout>
  )
}

export default AboutUS