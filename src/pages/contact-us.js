import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Seo from '../components/seo';
import "../components/style/ContactUs.css"

const ContactUs = () => {
    // State to store the form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle change in form inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Endpoint should match your Strapi configuration, replace URL accordingly
        axios.post("http://localhost:1337/006b3775968e8c4a3ed57dc3aad47171e8a9f0d569a4534c729421ea11731d1682ed1da1134c76d2c6f3e7f44f61864eece295af307a2292ee554b9cc9a3516bc36d33a23c4ddf0871a461a3d3059bb6e99e3d7295919624096525323fb12249c82fc8ed456bb3304b4f0e51f0514489ea50f5689ddc348c22863e997d4c7593/contactuses/", {
            data: formData
        })
        .then(response => {
            alert('Message sent successfully');
            console.log(response.data);
            // Clear form data after submission
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch(error => {
            alert('Failed to send message');
            console.error('Error :', error);
        });
    };

    return (
        <Layout>
            <Seo
                title="تواصل معنا للحصول على دعم وإجابة استفساراتك - إتقان كابيتال"
                description="نحن في إتقان كابيتال هنا لمساعدتك وتقديم الدعم. اتصل بنا الآن عبر البريد الإلكتروني أو الهاتف أو ملء نموذج الاتصال. سنقوم بالرد على استفساراتك في أسرع وقت ممكن."
            />
            <Hero title="الاتصال بنا" subTitle="“التواصل”"/>
            <ScrollToTopButton/>
            <div className='Contact-footer-section-wallpaper'>
                <section className='Contact-footer-section'>
                    <div className='Contact-footer-container'>
                        <form className='Contact-footer-form' onSubmit={handleSubmit} method='OPTIONS'>
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
    );
}

export default ContactUs;
