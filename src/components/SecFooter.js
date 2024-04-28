import React, { useState } from 'react';
import axios from 'axios';
import "./style/SecFooter.css";
import Modal from 'react-modal'; // Import the Modal component
import { Player, Controls } from '@lottiefiles/react-lottie-player'; // Import the Lottie Player component
import Successfully from '../Json/Successfully.json'; // Import the success animation JSON file
import Fail from '../Json/fail.json'; // Import the fail animation JSON file
import "./style/ContactUs.css"
import { Link } from "gatsby"

const SecFooter = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update form data as user inputs data
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { data: formData };
  
    axios.post("http://192.168.1.19:1337/api/contact-uses", payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 662516a59e6dbdcaf0e28198cbaaa8f40c29f4076ba645e5d521ccbc234370f13da8e9fab43d30a47cbfd96461483c6f97d4b48859958b1399addc63ac80cc139b62b3f3799835893df308b2c131329a97f1ad993ead75036119f2fa767c0d35a1545cb77a6b5edf9fb2639df381d7d630891fad18b0770be9a2db0c2cb3e9a7"
      }
    })
    .then(response => {
      if (response.status === 200) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
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
    <section className='sec-footer-section'>
      <div className='sec-footer-container'>
        <form className='sec-footer-form' onSubmit={handleSubmit}>
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
      <button onClick={() => {setFormSubmitted(false);}}><img src='/close.svg' alt="Close" /></button>
      <div className='Contact-successfuly-body'> 
        <Player
          autoplay
          loop
          src={Successfully} 
          style={{ height: '200px', width: '200px' }} 
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>  
        <h4>لقد تم أرسال طلبك بنجاح</h4>
      </div>
    </div>
  ) : (
    <div className='Contact-error'>
      <button onClick={() => {setFormError(false);}}><img src='/close.svg' alt="Close" /></button>
      <div className='Contact-error-body'>
        <Player
          autoplay
          loop
          src={Fail} 
          style={{ height: '200px', width: '200px' }} 
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>  
        <h4>لم يتم أرسال طلبك , الرجاء المحاوله لاحقا</h4>
      </div>
    </div>
  )}
</Modal>
          <p>نحن ملتزمون بحماية واحترام خصوصيتكم. سيتم استخدام المعلومات المقدمة في هذا النموذج للتواصل معكم والإجابة على استفساراتكم فقط.</p>
        </form>
        <div className='sec-footer-content'>
          <h2>اتصل بنا</h2>
          <p>نحن هنا للإجابة على استفساراتكم وتقديم الدعم. يرجى ملء النموذج وسيقوم أحد ممثلينا بالتواصل معكم في أقرب وقت ممكن.</p>
          <h3>معلومات الاتصال</h3>
          <h6>البريد الإلكتروني</h6>
          <p>info@itqancapital.com</p>
          <h6>العنوان</h6>
          <p>المملكة العربية السعودية / جدة/
Al Zahraa District – Ahmed Al Attas Street

Al Zahraa Commercial Center, Unit 2563, Jeddah 23425-2753
Kingdom of Saudi Arabia
</p>
          <h6>التواصل الاجتماعي</h6>
          <div className='sec-footer-content-social'>
            <img src='/X.png'/>
            <img src='/LinkedIn.png'/>
          </div>
          <Link to='https://itqancapital.com/files/itg2024.pdf'>
          <h6><img src='/file-icon.png'/>ملف تعريفي للشركة</h6>
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default SecFooter;
