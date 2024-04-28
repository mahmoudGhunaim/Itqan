
import Hero from '../components/Hero';
import Layout from "../components/layout";
import { Link } from "gatsby"
import React, { useState } from 'react';
import "../components/style/IndividualsLogin.css"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Accordion from '@mui/material/Accordion';
import axios from 'axios';  
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Seo from '../components/seo';
import Modal from 'react-modal';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Successfully from "../Json/Successfully.json"
import Fail from "../Json/fail.json"
const IndividualsLogin = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        nationality: '',
        gender: '',
        title:'',
        investorInformation:'', 
        identityType: '',
        identityNumber: '',
        issueDate: '',
        expirationDate: '',
        placeOfIssue: '',
        dateOfBirth: '',
        maritalStatus: '',
        numberOfDependents: '',
        housingType: '',
        residenceAddress: '',
        postalCode: '',
        poBox: '',
        country: '',
        city: '',
        mobileNumber: '',
        homePhone: '',
        email: '',
        Building:'',
        Currency:'',
        telephoneNumber: '',
        correspondenceLanguage: '',
        messageTime: '',
        communicationMethod: '',
        annualIncome: '',
        incomeSource: '',
        netWorth: '',
        academicQualifications: '',
        employmentStatus: '',
        employmentCategory: '',
        employerName: '',
        jobTitle: '',
        employmentDate: '',
        employerAddress: '',
        employerPostalCode: '',
        employerPOBox: '',
        employerCountry: '',
        employerCity: '',
        employerFax: '',
        employerPhone: '',
        passportIssuePlace: '',
        passportNumber: '',
        passportIssueDate: '',
        passportExpirationDate: '',
        passportName: '',
        originCountryAddress: '',
        agreementType: '',
        // termsConsent: false
    });


    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Using await to wait for the axios post request to complete
            const response = await axios.post("http://192.168.1.19:1337/api/individuals-logins", { data: formData }, {
                headers: {
                    'Content-Type': 'application/json',              
                    "Authorization": "Bearer 662516a59e6dbdcaf0e28198cbaaa8f40c29f4076ba645e5d521ccbc234370f13da8e9fab43d30a47cbfd96461483c6f97d4b48859958b1399addc63ac80cc139b62b3f3799835893df308b2c131329a97f1ad993ead75036119f2fa767c0d35a1545cb77a6b5edf9fb2639df381d7d630891fad18b0770be9a2db0c2cb3e9a7"
                }
            });
    
            // Response handling after promise resolution
            if (response.status === 200) {
                setFormSubmitted(true);
                setFormData({
                    fullName: '',
                    nationality: '',
                    gender: '',
                    title:'',
                    investorInformation:'',
                    identityType: '',
                    identityNumber: '',
                    issueDate: '',
                    expirationDate: '',
                    placeOfIssue: '',
                    dateOfBirth: '',
                    maritalStatus: '',
                    numberOfDependents: '',
                    housingType: '',
                    residenceAddress: '',
                    postalCode: '',
                    poBox: '',
                    country: '',
                    city: '',
                    mobileNumber: '',
                    homePhone: '',
                    email: '',
                    Building: '' ,
                    Currency:'',
                    telephoneNumber: '',
                    correspondenceLanguage: '',
                    messageTime: '',
                    communicationMethod: '',
                    annualIncome: '',
                    incomeSource: '',
                    netWorth: '',
                    academicQualifications: '',
                    employmentStatus: '',
                    employmentCategory: '',
                    employerName: '',
                    jobTitle: '',
                    employmentDate: '',
                    employerAddress: '',
                    employerPostalCode: '',
                    employerPOBox: '',
                    employerCountry: '',
                    employerCity: '',
                    employerFax: '',
                    employerPhone: '',
                    passportIssuePlace: '',
                    passportNumber: '',
                    passportIssueDate: '',
                    passportExpirationDate: '',
                    passportName: '',
                    originCountryAddress: '',
                    agreementType: '',
                });
            } else {
                setFormError(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setFormError(true);
        }
    };
    
  return (
<Layout>
<Seo title="فتح حساب للأفراد - خدمة العملاء - إتقان كابيتال" description="اتفق على شروط وأحكام فتح حساب استثماري للأفراد مع إتقان كابيتال. ملء النموذج بالمعلومات المطلوبة لبدء عملية الفتح. تقديم الطلب الآن واحصل على حسابك الاستثماري الخاص."/>
            <ScrollToTopButton/>
            <Hero title="فتح حساب للأفراد" />
            <section className='individuals-login-sec'>
            <div className='individuals-login-container'>
            <div className='individuals-login-title'>
                <h1>اتفاقية فتح حساب استثماري</h1>
                <p>يرجى اختيار نوع الحساب المراد فتحه</p>
                <div className='individuals-login-buttons'>
                    <Link to="/companies-login"><button style={{background:"none",color:"#46235E"}}>حساب شركات</button></Link><Link to="/Individuals-login"><button style={{background:"#3F1A58",color:"#FFFFFF"}}>حساب أفراد</button></Link>
                </div>
            </div>
            <form className='individuals-login-field' onSubmit={handleSubmit}>
                {/* Accordion for Personal Information */}
                <Accordion defaultExpanded>
                <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="individuals-login-field"
                            className='individuals-sec-field-title'
                            >
                        <h3>المعلومات الشخصية - الأفراد</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='individuals-sec-field'>
                        <div className='individuals-single-field'>
                                <label>معلومات المستثمر (أفراد)</label>
                                <select name="investorInformation" value={formData.investorInformation} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="New Account ">New Account / حساب جديد </option>
                                    <option value="Additional account ">Additional account / حساب إضافي</option>
                                    <option value="Update Information ">Update Information / تحديث بيانات</option>
                                </select>
                            </div>
                            <div className='individuals-single-field'>
                                <label>الاسم الكامل للعميل</label>
                                <input name="fullName" value={formData.fullName} onChange={handleChange} />
                            </div>
                            {/* <div className='individuals-single-field'>
                                <label>الجنسية</label>
                                <input name="nationality" value={formData.nationality} onChange={handleChange} />
                            </div> */}
                            <div className='individuals-single-field'>
                                <label>الجنس</label>
                                <select name="gender" value={formData.gender} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="Male">Male/ذكر </option>
                                    <option value="Female">Female/أنثى</option>
                                </select>
                            </div>
                            </div>
                            <div  className='individuals-sec-field'>
                            <div className='individuals-single-field'>
                                <label>لقب المستثمر</label>
                                <select name="title" value={formData.title} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="Mr.">Mr./السيد</option>
                                    <option value="Mrs.">Mrs./السيدة</option>
                                    <option value="Miss.">Miss/الآنسة</option>
                                    <option value="Dr.">Dr./الدكتور </option>
                                    <option value="Eng.">Eng./المهندس</option>
                                    <option value="other">Other/ أخرى</option>
                                </select>
                            </div>
                            <div className='individuals-single-field'>
                                <label>تاريخ الميلاد</label>
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                            </div>
                            <div className='individuals-single-field'>
                                <label>الحالة الاجتماعية</label>
                                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="Single">Single/أعزب</option>
                                    <option value="Married">Married/متزوج</option>
                                </select>
                            </div>
                            </div>
                            <div  className='individuals-sec-field'>
                           
                           <div className='individuals-single-field'>
                               <label>عدد أفراد الأسرة</label>
                               <input type="number" name="numberOfDependents" value={formData.numberOfDependents} onChange={handleChange} />
                           </div>
                           <div className='individuals-single-field'>
                                <label>الجنسية</label>
                                <input name="fullName" value={formData.nationality} onChange={handleChange} />
                            </div>
                           </div>
                            <div  className='individuals-sec-field'>
                            <div className='individuals-single-field'>
                                <label>نوع الهوية</label>
                                <select name="identityType" value={formData.identityType} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="National ID">National ID/ أحوال مدنية</option>
                                    <option value="Passport">Passport/جواز سفر </option>
                                    <option value="Residence ID">ResidenceID / هوية مقيم</option>
                                    <option value="Family Registration">Family Registration / بطاقة عائلية</option>
                                    <option value="Other">Other / أخرى </option>
                                </select>
                            </div>
                            <div className='individuals-single-field'>
                                <label>رقم الهوية</label>
                                <input name="identityNumber" value={formData.identityNumber} onChange={handleChange} />
                            </div>
                            <div className='individuals-single-field'>
                                <label>تاريخ الإصدار</label>
                                <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
                            </div>
                            </div>
                            <div  className='individuals-sec-field'>
                            <div className='individuals-single-field'>
                                <label>تاريخ الانتهاء</label>
                                <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
                            </div>
                            <div className='individuals-single-field'>
                                <label>مكان الإصدار</label>
                                <input name="placeOfIssue" value={formData.placeOfIssue} onChange={handleChange} />
                            </div>
                            
                            </div>
                         
                            {/* <div  className='individuals-sec-field'>
                            <div className='individuals-single-field'>
                                <label>نوع السكن</label>
                                <select name="housingType" value={formData.housingType} onChange={handleChange}>
                                    <option value="">-- يُرجى الاختيار --</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Studio">Studio</option>
                                    <option value="Dormitory">Dormitory</option>
                                </select>
                            </div>
                         
                            <div className='individuals-single-field'>
                                <label>عنوان السكن</label>
                                <input name="residenceAddress" value={formData.residenceAddress} onChange={handleChange} />
                            </div>
                            </div> */}
                     
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="individuals-login-field"
        className='individuals-sec-field-title'
    >
        <h3>عنوان للمراسلة</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الرمز البريدي</label>
                <input name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>صندوق البريد</label>
                <input name="poBox" value={formData.poBox} onChange={handleChange} />
            </div>
   
            <div className='individuals-single-field'>
                    <label htmlFor="correspondenceLanguage">لغة المراسلات</label>
                    <select id="correspondenceLanguage" name="correspondenceLanguage" value={formData.correspondenceLanguage} onChange={handleChange}>
                        <option value="">-- يُرجى الاختيار --</option>
                        <option value="EN">English</option>
                        <option value="AR">العربية</option>
                    </select>
                </div>
            </div>
            <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                    <label>البريد الالكتروني</label>
                    <input name="email" value={formData.email} onChange={handleChange} />
                </div>
                
                <div className='individuals-single-field'>
                    <label>رقم الجوال</label>
                    <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                </div>
                <div className='individuals-single-field'>
                    <label>رقم الهاتف</label>
                    <input name="telephoneNumber" value={formData.telephoneNumber} onChange={handleChange} />
                </div>
            </div>
            <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الدولة</label>
                <input name="country" value={formData.country} onChange={handleChange} />
            </div>
                <div className='individuals-single-field'>
                    <label>رقم المبني</label>
                    <input name="Building " value={formData.Building } onChange={handleChange} />
                </div>
                <div className='individuals-single-field'>
                    <label>المدينة/الحي</label>
                    <input name="city" value={formData.city} onChange={handleChange} />
                </div>
             
            </div>
      
    </AccordionDetails>
</Accordion>
<Accordion defaultExpanded>
    <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1-content"
         id="individuals-login-field"
         className='individuals-sec-field-title'
    >
        <h3>معلومات البنك</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>اسم البنك</label>
                <input name="bankName" value={formData.bankName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الحساب المصرفي الدولي </label>
                <input name="ibanNumber" value={formData.ibanNumber} onChange={handleChange} />
            </div>
            
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الفرع</label>
                <input name="bankBranch" value={formData.bankBranch} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المدينة</label>
                <input name="bankCity" value={formData.bankCity} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>عملة الحساب </label>
                <input name="Currency " value={formData.Currency } onChange={handleChange} />
            </div>
       
        </div>
    </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1-content"
         id="individuals-login-field"
         className='individuals-sec-field-title'
    >
        <h3>المراسلات</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>وقت الرسال</label>
                <select id="messageTime" name="messageTime" className="custom-select">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="صباحًا (AM)">صباحًا (AM)</option>
                    <option value="بعد الظهر/مساءً (PM)">بعد الظهر/مساءً (PM)</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>بواسطة</label>
                <select id="communicationMethod" name="communicationMethod">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="SMS">SMS</option>
                    <option value="Mail">Mail</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label htmlFor="annualIncome">الدخل السنوي التقريبي (ريال سعودي)</label>
                <select id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Less than 50,000">Less than 50,000</option>
                    <option value="50,000 - 100,000">50,000 - 100,000</option>
                    <option value="100,000 - 150,000">100,000 - 150,000</option>
                    <option value="150,000 - 200,000">150,000 - 200,000</option>
                    <option value="200,000 - 250,000">200,000 - 250,000</option>
                    <option value="250,000 - 300,000">250,000 - 300,000</option>
                    <option value="300,000 - 350,000">300,000 - 350,000</option>
                    <option value="350,000 - 400,000">350,000 - 400,000</option>
                    <option value="More than 400,000">More than 400,000</option>
                </select>

            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>مصدر الدخل</label>
                <select id="incomeSource" name="incomeSource">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Employment">Employment</option>
                    <option value="Business">Business</option>
                    <option value="Investments">Investments</option>
                    <option value="Rental Income">Rental Income</option>
                    <option value="Retirement">Retirement</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>صافي الثروة التقريبي (باستثناء السكن) (ريال سعودي)</label>
                <select id="netWorth" name="netWorth">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="< 100,000"> Less than 100,000</option>
                    <option value="100,000 - 500,000">100,000 - 500,000</option>
                    <option value="500,000 - 1,000,000">500,000 - 1,000,000</option>
                    <option value="1,000,000 - 5,000,000">1,000,000 - 5,000,000</option>
                    <option value="5,000,000 - 10,000,000">5,000,000 - 10,000,000</option>
                    <option value="> 10,000,000"> More than 10,000,000</option>
                </select>
            </div>
        </div>
    </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="individuals-login-field"
          className='individuals-sec-field-title'
    >
        <h3>معلومات المهنة - أفراد</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>المؤهلات العلمية</label>
                <select id="academicQualifications" name="academicQualifications">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="High School Diploma or Equivalent">High School Diploma or Equivalent</option>
                    <option value="Vocational Training">Vocational Training</option>
                    <option value="Associate Degree">Associate Degree</option>
                    <option value="Bachelor’s Degree">Bachelor’s Degree</option>
                    <option value="Master’s Degree">Master’s Degree</option>
                    <option value="Doctorate or Higher">Doctorate or Higher</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>الحالة الوظيفية</label>
                <select id="employmentStatus" name="employmentStatus">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Employed">Employed</option>
                    <option value="Self-Employed">Self-Employed</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Student">Student</option>
                    <option value="Retired">Retired</option>
                    <option value="Homemaker">Homemaker</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>فئة التوظيف</label>
                <select id="employmentCategory" name="employmentCategory">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Temporary">Temporary</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>اسم صاحب العمل</label>
                <input name="employerName" value={formData.employerName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المسمى الوظيفي</label>
                <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الالتحاق</label>
                <input type="date" name="employmentDate" value={formData.employmentDate} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>عنوان صاحب العمل</label>
                <input name="employerAddress" value={formData.employerAddress} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الرمز البريدي</label>
                <input name="employerPostalCode" value={formData.employerPostalCode} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>صندوق البريد</label>
                <input name="employerPOBox" value={formData.employerPOBox} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الدولة</label>
                <input name="employerCountry" value={formData.employerCountry} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>المدينة</label>
                <input name="employerCity" value={formData.employerCity} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>فاكس العمل</label>
                <input name="employerFax" value={formData.employerFax} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>هاتف العمل</label>
                <input name="employerPhone" value={formData.employerPhone} onChange={handleChange} />
            </div>
        </div>
    </AccordionDetails>
</Accordion>

<Accordion defaultExpanded>
    <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel1-content"
         id="individuals-login-field"
         className='individuals-sec-field-title'
    >
        <h3>معلومات شخصية (لغير السعوديين)</h3>
    </AccordionSummary>
    <AccordionDetails> 
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>مكان الإصدار</label>
                <input name="passportIssuePlace" value={formData.passportIssuePlace} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم جواز السفر</label>
                <input name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الإصدار</label>
                <input type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>تاريخ الانتهاء</label>
                <input type="date" name="passportExpirationDate" value={formData.passportExpirationDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الاسم كما في جواز السفر</label>
                <input name="passportName" value={formData.passportName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>العنوان في بلد المنشأ</label>
                <input name="originCountryAddress" value={formData.originCountryAddress} onChange={handleChange} />
            </div>
        </div>
    </AccordionDetails>
</Accordion>
<div className='individuals-sec-field-title' style={{background:"#F2F4F7"}}>
    <h3>تصنيف العميل</h3>

    <div className='individuals-sec-field'>
        <div className='individuals-single-field' style={{textAlign:"right"}}>
            <label>أوافق على التصنيف على أنه</label>
            <select id="agreement" name="agreement" value={formData.agreement} onChange={handleChange}>
                <option value="">-- يُرجى الاختيار --</option>
                <option value="عميل انجاز فقط">عميل انجاز فقط</option>
                <option value="عميل">عميل</option>
                <option value="طرف مقابل">طرف مقابل</option>
            </select>
            <div className='individuals-single-check-box'>
                <input type="checkbox" id="consent" name="consent" checked={formData.consent} onChange={handleChange} style={{marginLeft: "10px"}} />
                <label htmlFor="consent">لقد قرأت ووافقت / وافقت على <Link to="/terms-and-conditions">الأحكام والشروط</Link></label>
            </div>
        </div>
    </div>
</div>
<button type='submit' className='individuals-buttom-form'>إرسال</button>
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
                                        <h4>لقد تم أرسال طلبك بنجاح</h4>
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
                                        <h4>لم يتم أرسال طلبك , الرجاء المحاوله لاحقا</h4>
                                        </div>
                                    </div>
                                )}
                            </Modal>
    </form>
    </div>
    </section>
</Layout>
    )
}

export default IndividualsLogin