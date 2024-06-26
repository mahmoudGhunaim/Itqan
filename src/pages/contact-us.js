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
import { Link } from "gatsby"
import itqanProfile from "../../static/بروفايل شركة إتقان كابيتال - 30-04-2024.pdf"
import { FormattedMessage } from 'react-intl';

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

        axios.post("https://itqan-strapi.softylus.com/api/contact-uses", payload, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c"
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
                title={<FormattedMessage id="contact_us_seo_title" />}
                description={<FormattedMessage id="contact_us_seo_description" />}
            />
            <Hero title={<FormattedMessage id="contact_us_hero_title" />} />
            <ScrollToTopButton/>
            <div className='Contact-footer-section-wallpaper'>
                <section className='Contact-footer-section'>
                    <div className='Contact-footer-container'>
                        
                        <form className='Contact-footer-form' onSubmit={handleSubmit} method='OPTIONS'>
                            <label>
                                <FormattedMessage id="contact_form_name" />     
                                <input
                                    type='text'
                                    name='name'
                                    placeholder={<FormattedMessage id="contact_form_name_placeholder" />}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <FormattedMessage id="contact_form_email" />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder={<FormattedMessage id="contact_form_email_placeholder" />}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                <FormattedMessage id="contact_form_message" />
                                <textarea
                                    name='message'
                                    placeholder={<FormattedMessage id="contact_form_message_placeholder" />}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </label>
                            <button type='submit'><FormattedMessage id="contact_form_submit" /></button>
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
                                        <h4><FormattedMessage id="contact_form_success_message" /></h4>
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
                                        <h4><FormattedMessage id="contact_form_error_message" /></h4>
                                        </div>
                                    </div>
                                )}
                            </Modal>
                        
                        </form>
                       
                        <div className='Contact-footer-content'>
                <h2><FormattedMessage id="contact_us_title" /></h2>
                <p><FormattedMessage id="contact_us_description." /></p>
                <h3><FormattedMessage id="contact_info_title" /></h3>
                <div className='Contact-info'>
                 <div className='Contact-info-data'>
                <h6><FormattedMessage id="contact_info_email_title" /></h6>
                <p>info@itqancapital.com</p>
                </div>
                <div className='Contact-info-data'>
                    <h6><FormattedMessage id="contact_info_phone_title" /></h6>
                    <p><FormattedMessage id="contact_info_phone_numbers" /></p>
                </div>
                </div>
                <div className='Contact-info'>
                    <div className='Contact-info-data'>
                      <h6><FormattedMessage id="contact_info_jeddah_title" /></h6>
                         <p><FormattedMessage id="contact_info_jeddah_address" />
                         <Link to='https://www.google.com/maps/place/%D8%A5%D8%AA%D9%82%D8%A7%D9%86+%D9%83%D8%A7%D8%A8%D9%8A%D8%AA%D8%A7%D9%84+%7C+Itqan+Capital%E2%80%AD/@21.5885065,39.1293053,17z/data=!4m14!1m7!3m6!1s0x15c3dbb5575e28cb:0x7ceca97ac7bcbe1!2z2KXYqtmC2KfZhiDZg9in2KjZitiq2KfZhCB8IEl0cWFuIENhcGl0YWw!8m2!3d21.5885065!4d39.131494!16s%2Fg%2F11sh49gd90!3m5!1s0x15c3dbb5575e28cb:0x7ceca97ac7bcbe1!8m2!3d21.5885065!4d39.131494!16s%2Fg%2F11sh49gd90?entry=ttu' ><span  style={{display:"block"}} className='google-map'><FormattedMessage id="google_map" /></span></Link>
</p>                   </div>
                    <div className='Contact-info-data'>
                      <h6><FormattedMessage id="contact_info_riyadh_title" /></h6>
                         <p><FormattedMessage id="contact_info_riyadh_address" />
<Link to='https://www.google.com/maps/place/Itqan+Capital/@24.6986875,46.6879375,15z/data=!4m6!3m5!1s0x3e2f0379e66ca3d5:0x6fa553a2eed997f4!8m2!3d24.6986875!4d46.6879375!16s%2Fg%2F11v022rw6w?entry=ttu' ><span style={{display:"block"}} className='google-map'><FormattedMessage id="google_map" /></span></Link>
</p>
                    </div>
                </div>
                
                <h6><FormattedMessage id="social_media_title" /></h6>
                <div className='Contact-footer-content-social'> 
                <Link to='https://x.com/ItqanCapital'>
                    <img src='/X.png' alt="X (Twitter)" />
                    </Link>
                    <Link to='https://sa.linkedin.com/company/itqancapital'>
                    <img src='/LinkedIn.png' alt="LinkedIn" />
                    </Link>
                </div>
                <a href={itqanProfile} target="_blank" rel="noopener noreferrer">
          <h6><img src='/Investor.png' alt="Investor icon" /><FormattedMessage id="company_profile" /></h6>
          </a>
            </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default ContactUs;