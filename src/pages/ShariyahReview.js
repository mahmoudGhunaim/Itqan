import React from 'react'
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import InfoPanel from '../components/InfoPanel';
import "../components/style/index.css";

const ShariyahReview = () => {
  return (
    <Layout>
        <ScrollToTopButton/>
        <Hero
        title="الهيئة الشرعية"/>
        <section className='ShariyahReview-sec'>
        <InfoPanel 
        revers="row-reverse"
        title="الهيئة الشرعية"
        none="none"
        paragraph="تتعاون “إتقان كابيتال” مع هيئة الرقابة الشرعية، الذي يلتزم فريقها بالعمل معنا وتقديم الحلول المتوافقة مع الضوابط القانونية لمنتجاتنا، ويساهم التواصل الفعال مع شبكتهم من مستشاري الشريعة بكل فعالية في دعمنا لإطلاق منتجاتنا بسرعة تمنحنا مزايا تنافسية."
        button="لمزيدٍ من المعلومات عن هيئة الرقابة الشرعي"
        image="/abour_01 1.png"
        />
        </section>

    </Layout>
  )
}

export default ShariyahReview