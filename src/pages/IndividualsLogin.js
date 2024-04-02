
import Hero from '../components/Hero';
import Layout from "../components/layout";
import { Link } from "gatsby"
import React, { useState } from 'react';
import "../components/style/IndividualsLogin.css"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const IndividualsLogin = () => {
    const [genders] = useState(['Male', 'Female']);
    const [identityTypes] = useState(['National ID', 'Passport', 'Driver’s License', 'Residence Permit']);
    const [maritalStatuses] = useState(['Single', 'Married', 'Divorced', 'Widowed']);
    const [housingTypes] = useState(['Apartment', 'House', 'Villa', 'Studio', 'Dormitory']);
    const [agreement] = useState(['عميل انجاز فقط', 'عميل', 'طرف مقابل']);
    const [correspondenceLanguages] = useState([
        { code: 'EN', language: 'English' },
        { code: 'AR', language: 'العربية' },
    ]);
    const [messageTimes] = useState(['صباحًا (AM)', 'بعد الظهر/مساءً (PM)']);
    const [communicationMethods] = useState(['Email', 'Phone', 'SMS', 'Mail']);
    const [incomeBrackets] = useState([
        '< 50,000',
        '50,000 - 100,000',
        '100,000 - 150,000',
        '150,000 - 200,000',
        '200,000 - 250,000',
        '250,000 - 300,000',
        '300,000 - 350,000',
        '350,000 - 400,000',
        '> 400,000'
    ]);
    const [incomeSources] = useState([
        'Employment',
        'Business',
        'Investments',
        'Rental Income',
        'Retirement',
        'Other'
    ]);
    const [netWorthBrackets] = useState([
        '< 100,000',
        '100,000 - 500,000',
        '500,000 - 1,000,000',
        '1,000,000 - 5,000,000',
        '5,000,000 - 10,000,000',
        '> 10,000,000'
    ]);
    const [educationalQualifications] = useState([
        'High School Diploma or Equivalent',
        'Vocational Training',
        'Associate Degree',
        'Bachelor’s Degree',
        'Master’s Degree',
        'Doctorate or Higher'
    ]);
    const [employmentStatusOptions] = useState([
        'Employed',
        'Self-Employed',
        'Unemployed',
        'Student',
        'Retired',
        'Homemaker',
        'Other'
        // You can add more statuses or customize these as needed.
    ]);
    const [employmentCategories] = useState([
        'Full-Time',
        'Part-Time',
        'Contract',
        'Freelance',
        'Internship',
        'Temporary',
        'Other' // You can add more categories or customize these as needed.
    ]);
  return (
<Layout>
    <ScrollToTopButton/>
    <Hero
    title="فتح حساب للأفراد"
    subTitle="“خدمة العملاء”" />
    <section className='individuals-login-sec'>
        <div className='individuals-login-container'>
            <div className='individuals-login-title'>
                <h1>اتفاقية فتح حساب استثماري</h1>
                <p>يرجى اختيار نوع الحساب المراد فتحه</p>
                <div className='individuals-login-buttons'>
                    <Link to="/CompaniesLogin"><button style={{background:"none",color:"#46235E"}}>حساب شركات</button></Link><Link to="/IndividualsLogin"><button style={{background:"#3F1A58",color:"#FFFFFF"}}>حساب أفراد</button></Link>
                </div>
            </div>
            <form className='individuals-login-field'>
     
                    <Accordion defaultExpanded>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="individuals-login-field"
                            className='individuals-sec-field-title'
                            >
                    <h3>المعلومات الشخصية - الأفراد</h3>
                    </AccordionSummary>
                    <AccordionDetails>                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الاسم الكامل للعميل</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الجنسية</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">الجنس</label>
                        <select id="gender" name="gender">
                        <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                            {genders.map((gender, index) => (
                                 <option key={index} value={gender}>
                                {gender}
                            </option>
                            ))}
                     </select>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>نوع الهوية</label>
                    <select id="identityType" name="identityType">
                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                    {identityTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الهوية</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">تاريخ الاصدار</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>تاريخ الانتهاء</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>مكان الاصدار</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">تاريخ الميلاد</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الحالة الاجتماعية</label>
                    <select id="maritalStatus" name="maritalStatus">
                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                    {maritalStatuses.map((status, index) => (
                                        <option key={index} value={status}>
                                            {status}
                                        </option>
                                    ))}
                                </select>
                </div>
                <div  className='individuals-single-field'>
                    <label>عدد المعالين</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>نوع السكن</label>
                    <select id="housingType" name="housingType">
                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                    {housingTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                </div>
                <div  className='individuals-single-field'>
                    <label>عنوان السكن</label>
                    <input/>
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
                    <h3>عنوان للمراسلة</h3>
                    </AccordionSummary>
                    <AccordionDetails>  
                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الرمز البريدي</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>صندوق البريد</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الدولة</label>
                    <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المدينة</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الجوال</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">هاتف المنزل</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>البريد الالكتروني</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الهاتف</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">لغة المراسلات</label>
                    <select id="correspondenceLanguage" name="correspondenceLanguage">
                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                    {correspondenceLanguages.map((option, index) => (
                                        <option key={index} value={option.code}>
                                            {option.language}
                                        </option>
                                    ))}
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
                    <h3>معلومات البنك</h3>
              </AccordionSummary>
              <AccordionDetails>                 
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>اسم البنك</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>المدنية</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الفرع</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الايبان</label>
                    <input/>
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
                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>وقت الرسال</label>
                    <select id="messageTime" name="messageTime" className="custom-select">
                                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                    {messageTimes.map((time, index) => (
                                        <option key={index} value={time}>
                                            {time}
                                        </option>
                                    ))}
                                </select>
                </div>
                <div  className='individuals-single-field'>
                    <label>بواسطة</label>
                    <select id="communicationMethod" name="communicationMethod">
                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>

                            {communicationMethods.map((method, index) => (
                                <option key={index} value={method}>
                                    {method}
                                </option>
                            ))}
                        </select>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">الدخل السنوي التقريبي (ريال سعودي)</label>
                    <select id="annualIncome" name="annualIncome">
                            <option value="">-- يُرجى الاختيار --</option>
                            {incomeBrackets.map((bracket, index) => (
                                <option key={index} value={bracket}>
                                    {bracket}
                                </option>
                            ))}
                        </select>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>مصدر الدخل</label>
                    <select id="incomeSource" name="incomeSource">
                            <option value="">-- يُرجى الاختيار --</option>
                            {incomeSources.map((source, index) => (
                                <option key={index} value={source}>
                                    {source}
                                </option>
                            ))}
                        </select>                </div>
                <div  className='individuals-single-field'>
                    <label>صافي الثروة التقريبي (باستثناء السكن) (ريال سعودي)</label>
                    <select id="netWorth" name="netWorth">
                            <option value="">-- يُرجى الاختيار --</option>
                            {netWorthBrackets.map((bracket, index) => (
                                <option key={index} value={bracket}>
                                    {bracket}
                                </option>
                            ))}
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
                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المؤهلات العلمية</label>
                    <select id="academicQualifications" name="academicQualifications">
                            <option value="">-- يُرجى الاختيار --</option>
                            {educationalQualifications.map((qualification, index) => (
                                <option key={index} value={qualification}>
                                    {qualification}
                                </option>
                            ))}
                        </select>
                </div>
                <div  className='individuals-single-field'>
                    <label>الحالة الوظيفية</label>
                    <select id="employmentStatus" name="employmentStatus">
                            <option value="">-- يُرجى الاختيار --</option>
                            {employmentStatusOptions.map((status, index) => (
                                <option key={index} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">فئة التوظيف</label>
                    <select id="employmentCategory" name="employmentCategory">
                            <option value="">-- يُرجى الاختيار --</option>
                            {employmentCategories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>اسم صاحب العمل</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>المسمى الوظيفي</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="gender">تاريخ الالتحاق</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>عنوان صاحب العمل</label>
                  <input/>
                </div>
              
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الرمز البريدي</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>صندوق البريد</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >الدولة</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المدينة</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>فاكس العمل</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >هاتف العمل</label>
                       <input/>
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
         
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>مكان الاصدار</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم جواز السفر</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >تاريخ الاصدار</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>تاريخ الانتهاء</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الاسم كما في جواز السفر</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >العنوان في بلد المنشأ</label>
                       <input/>
                </div>
                </div>
                </AccordionDetails>
                </Accordion>
      
                           <div
                            className='individuals-sec-field-title'
                            >
                                <h3 style={{background:"#F2F4F7"}}>تصنيف العميل</h3>
                           
                            <div  className='individuals-sec-field'>
                            <div  className='individuals-single-field' style={{textAlign:"right"}}>
                                <label>أوافق على التصنيف على أنه</label>
                                <select id="agreement" name="gender" style={{width:"50%"}}>
                                    <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                        {agreement.map((agreement, index) => (
                                            <option key={index} value={agreement}>
                                            {agreement}
                                        </option>
                                        ))}
                                </select>
                                <div className='individuals-single-check-box'>
                                <input type="checkbox" id="consent" name="consent" value="yes" style={{marginLeft: "10px"}} />
                                  <label for="consent">أوافق على الشروط والأحكام</label>
                                  </div>
                                </div>
                                </div>
                            </div>
                            <button type='submit' className='individuals-buttom-form'>إرسال</button>
            </form>
        </div>
    </section>
</Layout>
    )
}

export default IndividualsLogin