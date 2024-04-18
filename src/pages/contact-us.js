import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../components/layout";
import Hero from '../components/Hero';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Seo from '../components/seo';
import "../components/style/ContactUs.css"
import Modal from 'react-modal';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Successfully from "../Json/Successfully.json"
import Fail from "../Json/fail.json"
const ContactUs = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { data: formData };

        axios.post("http://192.168.1.19:1337/api/contact-uses", payload, {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Authorization": "Bearer 662516a59e6dbdcaf0e28198cbaaa8f40c29f4076ba645e5d521ccbc234370f13da8e9fab43d30a47cbfd96461483c6f97d4b48859958b1399addc63ac80cc139b62b3f3799835893df308b2c131329a97f1ad993ead75036119f2fa767c0d35a1545cb77a6b5edf9fb2639df381d7d630891fad18b0770be9a2db0c2cb3e9a7"
            }
        })
        .then(response => {
            if (response.status === 200) {
                setFormSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setFormError(true);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            setFormError(true);
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
                             <Modal isOpen={formSubmitted || formError} onRequestClose={() => {setFormSubmitted(false); setFormError(false);}}>
                                {formSubmitted ? (
                                    <div className='Contact-successfuly'>
                                     <button onClick={() => {setFormSubmitted(false);}}><img src='/close.svg'/></button>
                                     <div className='Contact-successfuly-body'> 
                                     <Player
                                        autoplay
                                        loop
                                        src={Successfully} 
                                        style={{ height: '200px', width: '200px' }} 
                                    >
                                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                    </Player>  
                                        <h4>لقد تم أرسال رسالتك بنجاح</h4>
                                        </div>

                                    </div>
                                ) : (
                                    <div className='Contact-error'>
                                     <button onClick={() => {setFormError(false);}}><img src='/close.svg'/></button>
                                     <div className='Contact-error-body'>
                                     <Player
                                        autoplay
                                        loop
                                        src={Fail} 
                                        style={{ height: '200px', width: '200px' }} 
                                    >
                                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                    </Player>  
                                        <h4>لم يتم أرسال رسالتك , الرجاء المحاوله لاحقا</h4>
                                        </div>
                                    </div>
                                )}
                            </Modal>
                        
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
