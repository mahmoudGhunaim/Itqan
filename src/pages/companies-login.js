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
const CompaniesLogin = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);
    const [formData, setFormData] = useState({
        specialCasesInfo: '',
        name: '',
        identityType: '',
        identityNumber: '',
        issueDate: '',
        expirationDate: '',
        placeOfIssue: '',
        phoneNumber: '',
        faxNumber: '',
        commercialName: '',
        activityType: '',
        targetCountry: '',
        identityNature: '',
        employeeCount: '',
        startDate: '',
        residenceAddress: '',
        postalCode: '',
        poBox: '',
        country: '',
        city: '',
        communicationLanguage: '',
        sendingDuration: '',
        sendingMethod: '',
        authorizedPersonName: '',
        jobTitle: '',
        email: '',
        paidCapital: '',
        annualTurnover: '',
        bankName: '',
        bankCity: '',
        branch: '',
        iban: '',
        isDirectorOrPartner: false, // Assuming this is a boolean field
        otherFinancialInfo: '',
        financialShares: '',
        debtBonds: '',
        currencyExchangeRate: '',
        deposits: '',
        tradeFinancing: '',
        investmentFunds: '',
        commodities: '',
        derivativesAndOptions: '',
        realEstate: '',
        investmentTotal: '',
        investmentInfo: '',
        riskPreference: '',
        generalInvestmentGoals: '',
        preferredInvestmentAssets: ''
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
            const response = await axios.post("http://192.168.1.19:1337/api/companies-logins", { data: formData }, {
                headers: {
                    'Content-Type': 'application/json',              
                    "Authorization": "Bearer 662516a59e6dbdcaf0e28198cbaaa8f40c29f4076ba645e5d521ccbc234370f13da8e9fab43d30a47cbfd96461483c6f97d4b48859958b1399addc63ac80cc139b62b3f3799835893df308b2c131329a97f1ad993ead75036119f2fa767c0d35a1545cb77a6b5edf9fb2639df381d7d630891fad18b0770be9a2db0c2cb3e9a7"
                }
            });
    
            // Response handling after promise resolution
            if (response.status === 200) {
                setFormSubmitted(true);
                setFormData({
                    specialCasesInfo: '',
                    name: '',
                    identityType: '',
                    identityNumber: '',
                    issueDate: '',
                    expirationDate: '',
                    placeOfIssue: '',
                    phoneNumber: '',
                    faxNumber: '',
                    commercialName: '',
                    activityType: '',
                    targetCountry: '',
                    identityNature: '',
                    employeeCount: '',
                    startDate: '',
                    residenceAddress: '',
                    postalCode: '',
                    poBox: '',
                    country: '',
                    city: '',
                    communicationLanguage: '',
                    sendingDuration: '',
                    sendingMethod: '',
                    authorizedPersonName: '',
                    jobTitle: '',
                    email: '',
                    paidCapital: '',
                    annualTurnover: '',
                    bankName: '',
                    bankCity: '',
                    branch: '',
                    iban: '',
                    isDirectorOrPartner: false, 
                    otherFinancialInfo: '',
                    financialShares: '',
                    debtBonds: '',
                    currencyExchangeRate: '',
                    deposits: '',
                    tradeFinancing: '',
                    investmentFunds: '',
                    commodities: '',
                    derivativesAndOptions: '',
                    realEstate: '',
                    investmentTotal: '',
                    investmentInfo: '',
                    riskPreference: '',
                    generalInvestmentGoals: '',
                    preferredInvestmentAssets: ''
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
    <ScrollToTopButton/>
    <Seo
    title="فتح حساب للشركات - خدمة العملاء - إتقان كابيتال    "
    description="اتفق على شروط وأحكام فتح حساب استثماري للشركات مع إتقان كابيتال. ملء النموذج بالمعلومات المطلوبة لبدء عملية الفتح. تقديم الطلب الآن واحصل على حساب الاستثمار لشركتك.    "/>
    <Hero
    title="فتح حساب للشركات"/>
    <section className='individuals-login-sec'>
        <div className='individuals-login-container'>
            <div className='individuals-login-title'>
                <h1>اتفاقية فتح حساب استثماري</h1>
                <p>يرجى اختيار نوع الحساب المراد فتحه</p>
                <div className='individuals-login-buttons'>
                    <Link to="/companies-login"><button style={{background:"#3F1A58",color:"#FFFFFF"}}>حساب شركات</button></Link><Link to="/Individuals-login"><button style={{background:"none",color:"#46235E"}}>حساب أفراد</button></Link>
                </div>
            </div>
            <form className='individuals-login-field' onSubmit={handleSubmit}>
     
            <Accordion defaultExpanded>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="individuals-login-field"
        className='individuals-sec-field-title'
    >
        <h3>معلومات للحالات الخاصة</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>معلومات للحالات الخاصة</label>
                <input name="specialCasesInfo" value={formData.specialCasesInfo} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الاسم</label>
                <input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>نوع الهوية</label>
                <input name="identityType" value={formData.identityType} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهوية</label>
                <input name="identityNumber" value={formData.identityNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الاصدار</label>
                <input name="issueDate" type="date" value={formData.issueDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الانتهاء</label>
                <input name="expirationDate" type="date" value={formData.expirationDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>مكان الاصدار</label>
                <input name="placeOfIssue" value={formData.placeOfIssue} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهاتف</label>
                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الفاكس</label>
                <input name="faxNumber" value={formData.faxNumber} onChange={handleChange} />
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
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الاسم التجاري</label>
                <input name="commercialName" value={formData.commercialName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>نوع النشاط</label>
                <input name="activityType" value={formData.activityType} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الدولة المستهدفة</label>
                <input name="targetCountry" value={formData.targetCountry} onChange={handleChange} />
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
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>نوع الهوية</label>
                <input name="identityType" value={formData.identityType} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الطبيعة القانونية</label>
                <input name="identityNature" value={formData.identityNature} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الرقم</label>
                <input name="identityNumber" value={formData.identityNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الاصدار</label>
                <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>عدد الموظفين</label>
                <input type="number" name="employeeCount" value={formData.employeeCount} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ البدأ</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>عنوان السكن</label>
                <input name="residenceAddress" value={formData.residenceAddress} onChange={handleChange} />
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
                <label>الدولة</label>
                <input name="country" value={formData.country} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>المدينة</label>
                <input name="city" value={formData.city} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الفاكس</label>
                <input name="faxNumber" value={formData.faxNumber} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>رقم الهاتف</label>
                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>لغة المراسلات</label>
                <input name="communicationLanguage" value={formData.communicationLanguage} onChange={handleChange} />
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
        <h3>المراسلات / التقرير</h3>
    </AccordionSummary>
    <AccordionDetails> 
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>مدة الارسال</label>
                <input name="sendingDuration" value={formData.sendingDuration} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>طريقة الارسال</label>
                <input name="sendingMethod" value={formData.sendingMethod} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>اسم الشخص المخول</label>
                <input name="authorizedPersonName" value={formData.authorizedPersonName} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>نوع الهوية</label>
                <input name="identityType" value={formData.identityType} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهوية</label>
                <input name="identityNumber" value={formData.identityNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الاصدار</label>
                <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
            </div>
        </div>
        
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>تاريخ الانتهاء</label>
                <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>مكان الاصدار</label>
                <input name="placeOfIssue" value={formData.placeOfIssue} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المسمى الوظيفي</label>
                <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
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
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>المسمى الوظيفي</label>
                <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الاسم</label>
                <input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الفاكس</label>
                <input name="faxNumber" value={formData.faxNumber} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>رقم الهاتف</label>
                <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>البريد الالكتروني</label>
                <input name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهاتف الآخر</label>
                <input name="otherPhoneNumber" value={formData.otherPhoneNumber} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>رأس المال المدفوع (بالريال السعودي)</label>
                <input name="paidCapital" value={formData.paidCapital} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>حجم الأعمال السنوي (ريال سعودي)</label>
                <input name="annualTurnover" value={formData.annualTurnover} onChange={handleChange} />
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
                <label>المدينة</label>
                <input name="bankCity" value={formData.bankCity} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الفرع</label>
                <input name="branch" value={formData.branch} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الايبان</label>
                <input name="iban" value={formData.iban} onChange={handleChange} />
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
                <label>هل العميل مدير أو مسؤول في شركة عامة مدرجة؟</label>
                <input name="publicCompanyPosition" value={formData.publicCompanyPosition} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>هل العميل مدير أو شريك أو مسؤول في إتقان كابيتال أو شركة مرخصة أخرى؟</label>
                <input name="licensedCompanyPosition" value={formData.licensedCompanyPosition} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>أي معلومات مالية أخرى عن المركز المالي للعميل؟</label>
                <textarea name="additionalFinancialInfo" value={formData.additionalFinancialInfo} onChange={handleChange}></textarea>
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
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>أسهم مالية</label>
                <input name="financialStocks" value={formData.financialStocks} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>سند المديونية</label>
                <input name="bonds" value={formData.bonds} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>سعر صرف العملة</label>
                <input name="currencyExchangeRate" value={formData.currencyExchangeRate} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>الايداعات</label>
                <input name="deposits" value={formData.deposits} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تمويل التجارة</label>
                <input name="tradeFinancing" value={formData.tradeFinancing} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>صناديق الاستثمار</label>
                <input name="investmentFunds" value={formData.investmentFunds} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>السلع</label>
                <input name="commodities" value={formData.commodities} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>العقود الثانوية والخيارات</label>
                <input name="derivativesAndOptions" value={formData.derivativesAndOptions} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>العقارات</label>
                <input name="realEstate" value={formData.realEstate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المجموع</label>
                <input name="totalInvestment" value={formData.totalInvestment} onChange={handleChange} />
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
                <div className='individuals-sec-field-call'>
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
                </div>
                </AccordionDetails>
                </Accordion>
      
                <div className='individuals-sec-field-title'>
                    <h3 style={{ background: "#F2F4F7" }}>تصنيف العميل</h3>
                    <div className='individuals-sec-field'>
                        <div className='individuals-single-field' style={{ textAlign: "right" }}>
                            <label>أوافق على التصنيف على أنه</label>
                            <select id="agreement" name="gender" style={{}}>
                                <option value="">{/* Placeholder option */}-- يُرجى الاختيار --</option>
                                <option value="عميل انجاز فقط">عميل انجاز فقط</option>
                                <option value="عميل">عميل</option>
                                <option value="طرف مقابل">طرف مقابل</option>
                            </select>
                            <div className='individuals-single-check-box'>
                                <input type="checkbox" id="consent" name="consent" value="yes" style={{ marginLeft: "10px" }} />
                                <label htmlFor="consent">لقد قرأت ووافقت / وافقت على <Link to="">الأحكام والشروط</Link></label>
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

export default CompaniesLogin