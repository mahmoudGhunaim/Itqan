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

const CompaniesLogin = () => {
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
    title="فتح حساب للشركات"
    subTitle="“خدمة العملاء”" />
    <section className='individuals-login-sec'>
        <div className='individuals-login-container'>
            <div className='individuals-login-title'>
                <h1>اتفاقية فتح حساب استثماري</h1>
                <p>يرجى اختيار نوع الحساب المراد فتحه</p>
                <div className='individuals-login-buttons'>
                    <Link to="/CompaniesLogin"><button style={{background:"#3F1A58",color:"#FFFFFF"}}>حساب شركات</button></Link><Link to="/IndividualsLogin"><button style={{background:"none",color:"#46235E"}}>حساب أفراد</button></Link>
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
                    <h3>معلومات للحالات الخاصة</h3>
                    </AccordionSummary>
                    <AccordionDetails>                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>معلومات للحالات الخاصة</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الاسم</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >نوع الهوية</label>
                        <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>رقم الهوية</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>تاريخ الاصدار</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >تاريخ الانتهاء</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>مكان الاصدار</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الهاتف</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >رقم الفاكس</label>
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
                    <h3>معلومات الشركة - الشركات</h3>
                    </AccordionSummary>
                    <AccordionDetails>  
                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الاسم التجاري</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>نوع النشاط</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الدولة المستهدفة</label>
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
                    <h3>نوع الهوية</h3>
              </AccordionSummary>
              <AccordionDetails>                 
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>نوع الهوية</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الطبيعة القانونية</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الرقم</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>تاريخ الاصدار</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>نوع الهوية</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>عدد الموظفين</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>تاريخ البدأ</label>
                   <input/>
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
                <div className='individuals-single-field'>
                    <label htmlFor="gender">الدولة</label>
                    <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المدينة</label>
                    <input/>
               </div>
                <div  className='individuals-single-field'>
                    <label>رقم الفاكس</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>رقم الهاتف</label>
                    <input/>
               </div>
                <div  className='individuals-single-field'>
                    <label>لغة المراسلات</label>
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
                    <h3> المراسلات / التقرير</h3>
                    </AccordionSummary>
                    <AccordionDetails> 
                    <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>مدة الارسال</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>طريقة الارسال</label>
                   <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >اسم الشخص المخول</label>
                    <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>نوع الهوية</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رقم الهوية</label>
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
                    <label>مكان الاصدار</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >المسمى الوظيفي</label>
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
                    <h3>المعلومات الشخصية للتواصل</h3>
                 </AccordionSummary>
                 <AccordionDetails> 
         
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المسمى الوظيفي</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>الاسم</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >رقم الفاكس</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>رقم الهاتف</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>البريد الالكتروني</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >رقم الهاتف</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>رأس المال المدفوع (بالريال السعودي)</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>حجم الأعمال السنوي (ريال سعودي)</label>
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
                    <h3>معلومات البنك</h3>
              </AccordionSummary>
              <AccordionDetails>                 
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>هل العميل مدير أو مسؤول في شركة عامة مدرجة؟</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>هل العميل مدير أو شريك أو مسؤول في إتقان كابيتال أو شركة مرخصة أخرى؟</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>أي معلومات مالية أخرى عن المركز المالي للعميل؟</label>
                  <textarea/>
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
                    <h3>معلومات الاستثمار</h3>
                  
                 </AccordionSummary>
                 <AccordionDetails> 
                 <p className='individuals-sec-field-title-p'>تفاصيل محفظة الاستثمار الجارية (بالريال السعودي)</p>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>أسهم مالية</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>سند المديونية</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >سعر صرف العملة</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>الايداعات</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>تمويل التجارة</label>
                    <input/>
                </div>
                <div className='individuals-single-field'>
                    <label >صناديق الاستثمار</label>
                       <input/>
                </div>
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>السلع</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>العقود الثانوية والخيارات</label>
                    <input/>
                </div>
               
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>العقارات</label>
                    <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>المجموع</label>
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
                    <h3>المعلومات الاستثمارية والخبرات</h3>
              </AccordionSummary>
              <AccordionDetails>                 
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>المعلومات الاستثمارية والخبرات</label>
                   <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>رغبة العميل في المخاطرة</label>
                    <input/>
                </div>
                
                </div>
                <div  className='individuals-sec-field'>
                <div  className='individuals-single-field'>
                    <label>أهداف الاستثمار العامة</label>
                  <input/>
                </div>
                <div  className='individuals-single-field'>
                    <label>ما هي أصول الاستثمار المفضلة للعميل (ضع علامة على العدد المطلوب)</label>
                    <input/>
                </div>
                
                </div>
                <div className='individuals-sec-field-grid' style={{marginTop:"30px"}}>
                    <div className='individuals-sec-field-grid-box-title'>
                        <h4></h4>
                    </div>
                    <div className='individuals-sec-field-grid-box-title'>
                        <h4>المخاطرة عالية
(الشركات الصغيرة وشركات المنتجات الفردية وذات العائد المرتفع)</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box-title'>
                        <h4>المخاطرة متوسطة
(الشركات الكبيرة ذات الديون طويلة الأجل)</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box-title'>
                        <h4>المخاطرة ضعيفة
                    (صناديق الاستثمار الرئيسية ذات الديون قصيرة الأجل)</h4>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>تشارك</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>أداة دين</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>صناديق الاستثمار</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>تمويل التجارة</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>السلع</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                </div>
                <div className='individuals-sec-field-grid'>
                    <div className='individuals-sec-field-grid-box-h4'>
                        <h4>الخيارات</h4>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                     <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
                    <input/>
                    </div>
                    <div className='individuals-sec-field-grid-box'>
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

export default CompaniesLogin