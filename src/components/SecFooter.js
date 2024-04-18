import React, { useState } from 'react';
import axios from 'axios';
import "./style/SecFooter.css";

const SecFooter = () => {
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
    const payload = {
      data: formData
    };

    // Replace URL with your Strapi API endpoint
    axios.post("http://192.168.1.19:1337/api/contact-uses", payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 662516a59e6dbdcaf0e28198cbaaa8f40c29f4076ba645e5d521ccbc234370f13da8e9fab43d30a47cbfd96461483c6f97d4b48859958b1399addc63ac80cc139b62b3f3799835893df308b2c131329a97f1ad993ead75036119f2fa767c0d35a1545cb77a6b5edf9fb2639df381d7d630891fad18b0770be9a2db0c2cb3e9a7"
      }
    })
    .then(response => {
      alert('Message sent successfully');
      // Optionally reset form data after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch(error => {
      alert('Failed to send message: ' + (error.response ? error.response.data.message : error.message));
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
          <p>نحن ملتزمون بحماية واحترام خصوصيتكم. سيتم استخدام المعلومات المقدمة في هذا النموذج للتواصل معكم والإجابة على استفساراتكم فقط.</p>
        </form>
        <div className='sec-footer-content'>
          <h2>اتصل بنا</h2>
          <p>نحن هنا للإجابة على استفساراتكم وتقديم الدعم. يرجى ملء النموذج وسيقوم أحد ممثلينا بالتواصل معكم في أقرب وقت ممكن.</p>
          <h3>معلومات الاتصال</h3>
          <h6>البريد الإلكتروني</h6>
          <p>info@itqancapital.com</p>
          <h6>العنوان</h6>
          <p>المملكة العربية السعودية / الرياض......</p>
          <h6>التواصل الاجتماعي</h6>
          <div className='sec-footer-content-social'>
            <img src='/X.png'/>
            <img src='/LinkedIn.png'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecFooter;
