import React, { useState } from 'react';
import axios from 'axios';
import "./style/SecFooter.css";
import Modal from 'react-modal'; // Import the Modal component
import { Player, Controls } from '@lottiefiles/react-lottie-player'; // Import the Lottie Player component
import Successfully from '../Json/Successfully.json'; // Import the success animation JSON file
import Fail from '../Json/fail.json'; // Import the fail animation JSON file
import "./style/ContactUs.css"
import { Link } from "gatsby"
import itqanProfile from "../../static/itqanProfile.pdf"
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
  
    axios.post("https://itqan-strapi.softylus.com/api/contact-uses", payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c"
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
          <Link to='https://x.com/ItqanCapital'>
                    <img src='/X.png'/>
                    </Link>
                    <Link to='https://sa.linkedin.com/company/itqancapital'>
                    <img src='/LinkedIn.png'/>
                    </Link>
          </div>
          <Link to={itqanProfile}>
          <h6><img src='/file-icon.png'/>ملف تعريفي للشركة</h6>
          </Link>
        </div>
        
      </div>
    </section>
  );
}

export default SecFooter;
