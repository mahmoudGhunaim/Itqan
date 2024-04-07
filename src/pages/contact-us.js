import React from 'react'
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/style/ContactUs.css"
const ContactUs = () => {
  return (
    <Layout>
        <Hero title="الاتصال بنا" subTitle="“التواصل”"/>
        <ScrollToTopButton/>
        <div className='Contact-footer-section-wallpaper'>
          <section className='Contact-footer-section'>
       
               
        <div className='Contact-footer-container'>
           <form className='Contact-footer-form' >
                
                <label>
                الاسم       
                    <input
                    type='text'
                    name='name'
                    placeholder='حقل لإدخال الاسم'
                    />
                </label>
                <label>
                البريد الإلكتروني
                    <input
                    type='email'
                    name='email'
                    placeholder='حقل لإدخال البريد الإلكتروني'
                    />
                </label>
                <label>
                الرسالة
                    <textarea
                    type='text'
                    name='name'
                    placeholder='حقل لإدخال موضوع الاستفسار'
                    />
                </label>
                <button type='submit'>إرسال</button>
                <p>نحن ملتزمون بحماية واحترام خصوصيتكم. سيتم استخدام المعلومات المقدمة في هذا النموذج للتواصل معكم والإجابة على استفساراتكم فقط.</p>
            </form>
            
            <div className='Contact-footer-content'>
                <h2>اتصل بنا</h2>
                <p>نحن هنا للإجابة على استفساراتكم وتقديم الدعم. يرجى ملء النموذج وسيقوم أحد ممثلينا بالتواصل معكم في أقرب وقت ممكن.</p>
                <h3>معلومات الاتصال</h3>
                <div className='Contact-info'>
                 <div className='Contact-info-data'>
                <h6>البريد الإلكتروني</h6>
                <p>info@itqancapital.com</p>
                </div>
                <div className='Contact-info-data'>
                    <h6>رقم الهاتف</h6>
                    <p>Jeddah: +966 12 263 8787 – Ext. (615) <br/>Riyadh: 8001240533 +966 11 2164333</p>
                </div>
                </div>
                <div className='Contact-info'>
                    <div className='Contact-info-data'>
                      <h6> 1 العنوان</h6>
                         <p>المملكة العربية السعودية / الرياض......</p>
                    </div>
                    <div className='Contact-info-data'>
                      <h6> 2 العنوان</h6>
                         <p>المملكة العربية السعودية / الرياض......</p>
                    </div>
                </div>
                
                <h6>التواصل الاجتماعي</h6>
                <div className='Contact-footer-content-social'> 
                    <img src='/X.png'/>
                    <img src='/LinkedIn.png'/>
                </div>
            </div>
        </div>
        
    </section>
    </div>
    </Layout>
    )
}

export default ContactUs