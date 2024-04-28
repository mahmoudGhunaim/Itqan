// import React from 'react'
// import Layout from "../components/layout";
// import CSRhData from "../Json/CSRData.json"
// import ScrollToTopButton from '../components/ScrollToTopButton';
// import Hero from '../components/Hero';
// import "../components/style/ConservationServices.css"

// import InfoPanel from '../components/InfoPanel';
// import Seo from '../components/seo';

// const CSR = () => {
//   return (
//     <Layout>
//       <Seo
//       title="المسؤولية الاجتماعية للشركات (CSR) - شركة إتقان كابيتال"
//       description="اطلع على كيفية تفعيل المسؤولية الاجتماعية للشركات (CSR) في شركة إتقان كابيتال، حيث نلتزم بتوجيه استثماراتنا وأنشطتنا نحو دعم المجتمع وتحسين الظروف الاجتماعية والبيئية.      "/>
//     <ScrollToTopButton/>
//     <Hero
//     title="المسؤولية الاجتماعية للشركات (CSR)"
//     subTitle="“نبذة عنا”"
//     />
//     <section className='AdvisoryResearch-sec'>
//      <div className='AdvisoryResearch-card-title'>
//                 <h1>المسؤولية الاجتماعية للشركات (CSR)</h1>
//                 <p>تعد المسؤولية الاجتماعية للشركات (CSR) إحدى الركائز الأساسية التي تقوم عليها المبادئ التأسيسية لشركة “إتقان كابيتال”. وتستهدف أعمالنا وأنشطتنا استقطاب رأس المال – وهي عملية أساسية لإنشاء نمو اقتصادي مستدام. ويثمر النمو عن الوظائف والفرص التجارية والابتكار فضلاً عن مجتمعات أفضل من ناحية الصحة والتعليم وأكثر ازدهارًا.</p>
//              </div>
//   </section>
//   {CSRhData.map((item, index) => (
//         <InfoPanel
//           key={index}
//           title={item.title}
//           paragraph={item.paragraph} 
//           button={item.Button}
//           image={item.imgSrc}
//           revers={item.revers}
//           none={item.none}
//           links={item.links}
//         />
//     ))}
// </Layout>
//   )
// }

// export default CSR