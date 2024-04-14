import React from 'react'
import Hero from '../components/Hero';
import Layout from "../components/layout";
import PrivateBox from '../components/PrivateBoxCard';
import InfoPanel from '../components/InfoPanel';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/style/InvestmentBanking.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Seo from '../components/seo';
const InvestmentBanking = (props) => {
    
  return (
   <Layout>
    <Seo
    title="خدمات الاستثمار المصرفي لـ إتقان كابيتال - الطروحات العامة والاستثمار المباشر    "
    description="استكشف خدمات الاستثمار المصرفي المقدمة من إتقان كابيتال، بما في ذلك الطروحات العامة والاستثمار المباشر، واحصل على استشارات مالية استراتيجية تلبي احتياجات عملائنا بشكل فعال ومحترف.    "/>
    <ScrollToTopButton/>
    <Hero 
    title="الخدمات المصرفية الاستثمارية    "
    subTitle="“الخدمات”"/>
    <section  className='investment-banking-sec'>
        <div className='investment-banking-title'>
            <h2>خدمات إتقان كابيتال</h2>
        </div>
        <div className='investment-banking-container-card'>
        <PrivateBox
            title="الطروحات العامة"
            subtitle="عند تحديد فجوة في السوق، تبحث “إتقان كابيتال” عن فرص لطرح الأسهم الخاصة بهدف تقديم الأفكار والتوصيات للعملاء الحاليين أو المحتملين. وبصرف النظر عن الطروحات العامة التقليدية، يلبي الطرح الخاص للأسهم احتياجات الشركات التي ترغب في زيادة حقوق الملكية، كما يلبي احتياجات المستثمرين الذين يبحثون عن بدائل جذابة متوسطة الأجل لاستثمار فائض السيولة لديهم."
            Button="استثمر بذكاء مع إتقان"
            imgSrc="/Group 167.png"
           link="/Individuals-login"
                    />
        <PrivateBox
            title="الطروحات العامة الأولية            "
            subtitle="بفضل الخبرة الواسعة في القطاع المالي في المملكة العربية السعودية، يتمتع فريقنا بميزة فريدة في تحديد الفرص المالية والاستثمارية وتحقيق أكبر استفادة منها.            "
            size="نقدم استشارات مالية استراتيجية لعملائنا، مما يجعلنا نتبع نهجاً جديداً ومخصصاً في كل مهمة نقوم بها."
            Button="استثمر بذكاء مع إتقان"
            imgSrc="/Group 163.png"
            link="/Individuals-login"
            spaceP="25px"
                    />
        </div>
        <div className='investment-banking-info-card'>
        <section className='infopanel-sec bg-infopanel-sec'>
        <div className='infopanel-container'>
            <div className='infopanel-content'>
                <h2>الاستثمار المباشر</h2>
                <p>نبحث عن الاستثمارات ونحددها ونرتب لها ونديرها بشكل منفرد أو بالشراكة مع العملاء في منطقة الشرق الأوسط وشمال أفريقيا في ثلاث فئات أصول رئيسية. ويحدد المتخصصون لدينا ويطورون الفرص المميزة التي تتمتع بإمكانيات نمو حقيقية، من الناحيتين المالية والاجتماعية، والتي تشكل محوراً أساسياً في توافقنا مع مبادئ الشريعة الإسلامية.</p>
                <Tabs>
    <TabList>
      <Tab>الاستثمار المباشر الخاص</Tab>
      <Tab>الاستثمار المباشر الخاص</Tab>
    </TabList>

    <TabPanel>
      <h2>تبحث “إتقان كابيتال” عن المساهمة في شركات تمتلك مراكز مالية جيدة وإدارة مقتدرة واستراتيجية واضحة تنطوي على فرص للنمو والتخارج المربح وتلتزم بالموجهات والمبادئ الشرعية. ومن خلال تقديم الدعم في شكل رأس مال عامل إضافي أو تمويل بنكي أو توجيه استراتيجي، والعمل بالشراكة مع المالكين أو فريق الإدارة الحالي، تحقق “إتقان كابيتال” عوائد أرباح جيدة خلال فترة الامتلاك ومكاسب رأسمالية عند التخارج. وينصب تركيزنا عادةً على الشركات التي تتراوح قيمتها بين 3 – 15 مليون دولار أمريكي، أو شركات أكبر مع مستثمرين مشاركين آخرين، ويقع مقرها في منطقة الشرق الأوسط وشمال أفريقيا.</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            </div>
            <div className='infopanel-image'>
                <img src="/Frame 1399.png"/>
            </div>
        </div>
    </section>
        </div>
        <div className='investment-banking-container-card'>
        <PrivateBox
            title="ترتيب التمويل"
            subtitle="تمثل هيكلة وترتيب تمويل الشركات أحد أهم عناصر قوة “إتقان كابيتال” المهنية. وبفضل خبرتنا الطويلة في هذا المجال، مدعومة بتحرير الأنظمة التجارية والاستثمارية في المملكة إضافة إلى قيام الحكومة السعودية مؤخراً بضخ المزيد من السيولة النقدية في الاقتصاد، يُمكننا القيام بدور ريادي في تمويل المشاريع. ونحن نتبع نهجاً شاملاً في المشروع، مما يسهل تنفيذ المشاريع عبر الحدود بين البنوك من محل إقامة كل طرف، عند الاقتضاء."
            Button="استثمر بذكاء مع إتقان"
            imgSrc="/Group 167.png"
            link="/Individuals-login"
                    />
        <PrivateBox
            title="عمليات الاندماج والاستحواذ            "
            subtitle="تمثل هيكلة وترتيب تمويل الشركات أحد أهم عناصر قوة “إتقان كابيتال” المهنية. وبفضل خبرتنا الطويلة في هذا المجال، مدعومة بتحرير الأنظمة التجارية والاستثمارية في المملكة إضافة إلى قيام الحكومة السعودية مؤخراً بضخ المزيد من السيولة النقدية في الاقتصاد، يُمكننا القيام بدور ريادي في تمويل المشاريع. ونحن نتبع نهجاً شاملاً في المشروع، مما يسهل تنفيذ المشاريع عبر الحدود بين البنوك من محل إقامة كل طرف، عند الاقتضاء."         
            Button="استثمر بذكاء مع إتقان"
            imgSrc="/Group 163.png"
            link="/Individuals-login"
                    />
        </div>
    </section>
   </Layout>
  )
}

export default InvestmentBanking
