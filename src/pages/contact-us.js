import React, { useState } from 'react';
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/style/ContactUs.css"
import Seo from '../components/seo';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
          alert('Please fill out all fields.');
          return;
        }
      
        const url = `https://api.contentful.com/spaces/9acb47rc8erz/environments/master/entries`;
        const headers = {
          'Authorization': `Bearer _S2DDj9jugLQ_JfgVHESlqbnG6N9uPT-d2fMMOXbr7Y`,
          'Content-Type': 'application/vnd.contentful.management.v1+json',
          'X-Contentful-Content-Type': 'itqanForm'
        };
      
        const data = {
          fields: {
            name: { 'en-US': formData.name },
            email: { 'en-US': formData.email },
            message: { 'en-US': formData.message }
          }
        };
      
        try {
          const response = await axios.post(url, data, { headers });
          console.log('Form submitted: ', response.data);
          alert('Form submitted successfully!');
        } catch (error) {
          console.error('Submission error: ', error);
          alert('Failed to submit the form.');
        }
      };
    
  return (
    <Layout>
        <Seo
        title="تواصل معنا للحصول على دعم وإجابة استفساراتك - إتقان كابيتال        "
        description="نحن في إتقان كابيتال هنا لمساعدتك وتقديم الدعم. اتصل بنا الآن عبر البريد الإلكتروني أو الهاتف أو ملء نموذج الاتصال. سنقوم بالرد على استفساراتك في أسرع وقت ممكن.        "/>
        <Hero title="الاتصال بنا" subTitle="“التواصل”"/>
        <ScrollToTopButton/>
        <div className='Contact-footer-section-wallpaper'>
          <section className='Contact-footer-section'>
       
               
        <div className='Contact-footer-container'>
            <form className='Contact-footer-form' onSubmit={handleSubmit}       method="POST">
                <label>
                    الاسم       
                    <input
                    type='text'
                    name='name'
                    placeholder='حقل لإدخال الاسم'
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    البريد الإلكتروني
                    <input
                    type='email'
                    name='email'
                    placeholder='حقل لإدخال البريد الإلكتروني'
                    value={formData.email}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    الرسالة
                    <textarea
                    name='message'
                    placeholder='حقل لإدخال موضوع الاستفسار'
                    value={formData.message}
                    onChange={handleChange}
                    />
                </label>
                <button type='submit'>إرسال</button>
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