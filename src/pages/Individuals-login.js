
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
        Correspondence:'',
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
        YearsEmployment:'',
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
        Sector:'',
        financialExperience:'',
        otherFinancialExperience:'',
        inheritorsAgentFaxNo:'',
        inheritorsAgentSignature:'',
        inheritorsAgentPlaceOfIssue:'',
        inheritorsAgentTelNo:'',
        inheritorsAgentIssueDate:'',
        inheritorsAgentIdType:'',
        inheritorsAgentId:'',
        inheritorsAgentExpiryDate:'',
        inheritorsAgentName:'',
        fatherGuardianMinor:'',
        inheritorsAgent:'',
        illiterateBlindWitness:'',
        veiledWomanId:'',
        incompetentLegalGuardian:'',
        investmentKnowledgeDescription:'' ,
                    investmentYears:'' ,
                    previousInvestments:'' ,
                    professionalCertificates:'' ,
                    loanToInvestedMoneyRatio:'' ,
                    marginTransactions:'' ,
                    securitiesTransactionsOutsideKingdom:'' ,
                    countriesForSecuritiesTransactions:'' ,
                    riskAppetite: '',
                    investmentGoals: {
                        capitalProtection: '',
                        incomeGeneration: '',
                        balanced: '',
                        capitalGrowth: '',
                        retirementSavings: '',
                        projectFinancing: '',
                        assetPurchase: '',
                        other: ""
                      },
                      saudiAssets: '',
                      foreignCurrencyAssets: '',
                      selectedCurrencies: "",
                      expectedDuration: '',
                      clientCurrentWalletdepositsMurabah: "",
                      idealportfoliofortheclientdepositsMurabah: "",
                      clientCurrentWalletdebitInstruments: "",
                      idealportfoliofortheclientdebitInstruments: "",
                      clientCurrentWalletequity: "",
                      idealportfoliofortheclientequity: "",
                      clientCurrentWalletinvestmentFund: "",
                      idealportfoliofortheclientinvestmentFund: "",
                      clientCurrentWalletrealEstate: "",
                      idealportfoliofortheclientrealEstate: "",
                      clientCurrentWalletderivativesContracts: "",
                      idealportfoliofortheclientderivativesContracts: "",
                      clientCurrentWalletalternativeInvestments: "",
                      idealportfoliofortheclientalternativeInvestments: "",
                      accountNumber:'' ,
                      custodianName:'' ,
                      custodianAddress:'' ,
                      clientCertificates: '',
                      custodianCertificates: '',
                      OtherPartiesCertificates:'' ,
                      clientDividends: '',
                      custodianDividends: '',
                      OtherPartiesDividends:'' ,
                      clientSalesProceed: '',
                      custodianSalesProceed: '',
                      OtherPartiesSalesProceed:'' ,
                      recommendation: '',
                      signature: '', // This should be handled differently as it's a file upload
                      clientName: ''

    });
    const [q1Answer, setQ1Answer] = useState('');
    const [q2Answer, setQ2Answer] = useState('');
    const [q3Answer, setQ3Answer] = useState('');
    const [q4Answer, setQ4Answer] = useState('');
    const [q5Answer, setQ5Answer] = useState('');

    
    // Handle change for question 1
    const handleQ1Change = (e) => {
      setQ1Answer(e.target.value);
    };
    
    // Handle change for question 2
    const handleQ2Change = (e) => {
      setQ2Answer(e.target.value);
    };
    const handleQ3Change = (e) => {
        setQ3Answer(e.target.value);
      };
      const handleQ4Change = (e) => {
        setQ4Answer(e.target.value);
      };
      const handleQ5Change = (e) => {
        setQ5Answer(e.target.value);
      };
  
    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
    
        if (type === "checkbox") {
            console.log('check1');
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: checked
            }));
        } else {
            console.log('check2');

            if (name.startsWith("investmentGoals.")) {
                console.log('check2 inside if');

                const goalName = name.split(".")[1];
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    investmentGoals: {
                        ...prevFormData.investmentGoals,
                        [goalName]: value
                    }
                }));
            } else {
                console.log('else');
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: value
                }));
            }
        }
    };
    const handleChange2 = (event) => {
        const { name, type, checked, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          investmentGoals: {
            ...prevFormData.investmentGoals,
            [name]: type === "checkbox" ? checked : value
          }
        }));
      };
    
      const [answers, setAnswers] = useState({
        q1: 0,
        q2: 0,
        q3: 0,
        q4: 0,
        q5: 0,
      });
      const handleOptionChange = (question, points) => {
        setAnswers({ ...answers, [question]: points });
      };
    
      const totalPoints = Object.values(answers).reduce((acc, curr) => acc + curr, 0);

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Prepare headers to match Postman
            const headers = {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Authorization': 'Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c',
                'Cache-Control': 'no-cache',
                'Accept-Encoding': 'gzip, deflate, br',
                'User-Agent': 'PostmanRuntime/7.37.3',
                'Host': 'wizardly-torvalds.65-21-12-13.plesk.page'
            };
    
            // Make the POST request
            const response = await axios.post(
                "https://wizardly-torvalds.65-21-12-13.plesk.page/api/individuals-logins",
                formData, // Directly passing the formData here
                { headers }
            );
    

            if (response.status === 200) {
                setFormSubmitted(true);
                setFormData({
                    fullName: '',
                    nationality: '',
                    gender: '',
                    title: '',
                    investorInformation: '',
                    identityType: '',
                    identityNumber: '',
                    issueDate: '',
                    expirationDate: '',
                    YearsEmployment: '',
                    placeOfIssue: '',
                    dateOfBirth: '',
                    maritalStatus: '',
                    numberOfDependents: '',
                    housingType: '',
                    residenceAddress: '',
                    Correspondence: '',
                    postalCode: '',
                    poBox: '',
                    country: '',
                    city: '',
                    mobileNumber: '',
                    homePhone: '',
                    Sector: '',
                    email: '',
                    Building: '',
                    Currency: '',
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
                    financialExperience: '',
                    otherFinancialExperience: '',
                    inheritorsAgentFaxNo: '',
                    inheritorsAgentSignature: '',
                    inheritorsAgentPlaceOfIssue: '',
                    inheritorsAgentTelNo: '',
                    inheritorsAgentIssueDate: '',
                    inheritorsAgentIdType: '',
                    inheritorsAgentId: '',
                    inheritorsAgentExpiryDate: '',
                    inheritorsAgentName: '',
                    fatherGuardianMinor: '',
                    inheritorsAgent: '',
                    illiterateBlindWitness: '',
                    veiledWomanId: '',
                    incompetentLegalGuardian: '',
                    investmentKnowledgeDescription: '',
                    investmentYears: '',
                    previousInvestments: '',
                    professionalCertificates: '',
                    loanToInvestedMoneyRatio: '',
                    marginTransactions: '',
                    securitiesTransactionsOutsideKingdom: '',
                    countriesForSecuritiesTransactions: '',
                    riskAppetite: '',
                    investmentGoals: {
                        capitalProtection: '',
                        incomeGeneration: '',
                        balanced: '',
                        capitalGrowth: '',
                        retirementSavings: '',
                        projectFinancing: '',
                        assetPurchase: '',
                        other: ""
                    },
                    saudiAssets: '',
                    foreignCurrencyAssets: '',
                    selectedCurrencies: "",
                    expectedDuration: '',
                    clientCurrentWalletdepositsMurabah: "",
                    idealportfoliofortheclientdepositsMurabah: "",
                    clientCurrentWalletdebitInstruments: "",
                    idealportfoliofortheclientdebitInstruments: "",
                    clientCurrentWalletequity: "",
                    idealportfoliofortheclientequity: "",
                    clientCurrentWalletinvestmentFund: "",
                    idealportfoliofortheclientinvestmentFund: "",
                    clientCurrentWalletrealEstate: "",
                    idealportfoliofortheclientrealEstate: "",
                    clientCurrentWalletderivativesContracts: "",
                    idealportfoliofortheclientderivativesContracts: "",
                    clientCurrentWalletalternativeInvestments: "",
                    idealportfoliofortheclientalternativeInvestments: "",
                    accountNumber: '',
                    custodianName: '',
                    custodianAddress: '',
                    clientCertificates: '',
                    custodianCertificates: '',
                    OtherPartiesCertificates: '',
                    clientDividends: '',
                    custodianDividends: '',
                    OtherPartiesDividends: '',
                    clientSalesProceed: '',
                    custodianSalesProceed: '',
                    OtherPartiesSalesProceed: '',
                    recommendation: '',
                    signature: '',
                    clientName: ''
                });
            } else {
                console.error('Unexpected response:', response);
                setFormError(true);
            }
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setFormError(true);
        }
    };
    const calculateTotalPoints = () => {
        let totalPoints = 0;
    
        totalPoints += parseInt(q1Answer);
        totalPoints += parseInt(q2Answer);
        totalPoints += parseInt(q3Answer);
        totalPoints += parseInt(q4Answer);
        totalPoints += parseInt(q5Answer);
    
        return totalPoints;
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
                                <input name="nationality" value={formData.nationality} onChange={handleChange} />
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
                    <input name="Building" value={formData.Building} onChange={handleChange} />
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
                <input name="Currency" value={formData.Currency} onChange={handleChange} />
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
                <label>مصدر الدخل</label>
                <select id="incomeSource" name="incomeSource">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Employment">employment / وظيفة</option>
                    <option value="Business">Business / تجارة</option>
                    <option value="Real Estate">Real Estate / عقار</option>
                    <option value="Inheritance">Inheritance / إرث</option>
                    <option value="Stock">Stock / أسهم</option>
                    <option value="Other">Other / أخرى</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>بواسطة</label>
                <select id="communicationMethod" name="communicationMethod">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Email">البريد الالكتروني</option>
                    <option value="Fax">فاكس</option>
                    <option value="SMS">رسالة قصيرة</option>
                    <option value="Mail">بريد</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>كشوف الحساب</label>
                <select id="Correspondence" name="Correspondence">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Per Transaction">عند كل عملية</option>
                    <option value="Daily">يومي</option>
                    <option value="Monthly">شهري</option>
                    <option value="Upon Request">عند الطلب</option>
                </select>
            </div>
            
        </div>
        <div className='individuals-sec-field'>
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
                <label>المستوى التعليمي</label>
                <select id="academicQualifications" name="academicQualifications">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Primary">Primary / ابتدائي</option>
                    <option value="Intermediate">Intermediate / متوسط</option>
                    <option value="High School">High School / ثانوي</option>
                    <option value="Diploma">دبلوم/ Diploma</option>
                    <option value="Bachelor/ جامعي">Bachelor/ جامعي</option>
                    <option value="Postgraduate / دراسات عليا">Postgraduate / دراسات عليا</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>قطاع</label>
                <select id="Sector " name="Sector">
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Government / حكومي">Government / حكومي</option>
                    <option value="Private/خاص">Private/خاص</option>
                    <option value="Self- Employment / أعمال خاصة ">Self- Employment / أعمال خاصة </option>
                    <option value="أخرى/ Other">أخرى/ Other</option>
               
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
                <label>اسم جهة العمل</label>
                <input name="employerName" value={formData.employerName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المسمى الوظيفي</label>
                <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>عنوان جهة العمل</label>
                <input name="employerAddress" value={formData.employerAddress} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>مدة الخدمة</label>
                <input name="YearsEmployment" value={formData.YearsEmployment} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>هاتف جهة العمل</label>
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
        <h3>الخبرات العملية في القطاع المالي</h3>
    </AccordionSummary>
    <AccordionDetails> 
    <div className='individuals-sec-field'>
    <div className='individuals-single-field'>
        <label>الخبرات العملية في القطاع المالي</label>
        <select name="financialExperience" value={formData.financialExperience} onChange={handleChange}>
            <option value="">-- يُرجى الاختيار --</option>
            <option value="Yes">نعم</option>
            <option value="No">لا</option>
        </select>
    </div>

    <div className='individuals-single-field'>
        <label>هل للعميل أي خبرات عملية أخرى ذات صلة بالقطاع المالي؟</label>
        <select name="otherFinancialExperience" value={formData.otherFinancialExperience} onChange={handleChange}>
            <option value="">-- يُرجى الاختيار --</option>
            <option value="Yes">نعم</option>
            <option value="No">لا</option>
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
        <h3>معلومات عامة</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>هل العميل عضو أو ذو علاقة بعضو مجلس إدارة أو لجنة مراجعة أو أحد كبار التنفيذين في شركة مدرجة؟</label>
                <select name="boardMembership" value={formData.boardMembership} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Yes">نعم</option>
                    <option value="No">لا</option>
                </select>
                {formData.boardMembership === "Yes" && (
                    <input type="text" name="companyName" placeholder="اسم الشركة" value={formData.companyName} onChange={handleChange} />
                )}
            </div>
            <div className='individuals-single-field'>
                <label>هل العميل مكلف بمهمات عليا في المملكة او في دولة أجنبية أو مناصب إدارة عليا أو وظيفة في إحدى المنظمات الدولية؟</label>
                <select name="seniorPosition" value={formData.seniorPosition} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Yes">نعم</option>
                    <option value="No">لا</option>
                </select>
            </div>
        </div>

        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>هل للعميل صلة قرابة برابطة الدم أو الزواج وصولًا إلى الدرجة الثانية أو يعد مقربًا من شخص مكلف بمهمات عليا في المملكة أو في دولة أجنبية أو مناصب إدارة عليا أو وظيفة في إحدى المنظمات الدولية؟</label>
                <select name="familyRelationship" value={formData.familyRelationship} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Yes">نعم</option>
                    <option value="No">لا</option>
                </select>
            </div>
        
            <div className='individuals-single-field'>
                <label>هل أنت المالك والمستفيد الحقيقي والنهائي والوحيد للحساب الاستثماري او علاقة العمل؟</label>
                <select name="accountOwnership" value={formData.accountOwnership} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Yes">نعم</option>
                    <option value="No">لا</option>
                </select>
            </div>
        </div>

        {formData.accountOwnership === "No" && (
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label>هوية المستفيد الحقيقي من الحساب أو علاقة العمل:</label>
                    <textarea name="beneficialOwnership" value={formData.beneficialOwnership} onChange={handleChange}></textarea>
                </div>
            </div>
        )}

        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>هل الحساب البنكي الذي قمت بإدخاله في الخانة المخصصة له بملف فتح الحساب باسمك وهل انت المالك والمستفيد الحقيقي والنهائي والوحيد له؟</label>
                <select name="bankAccountOwnership" value={formData.bankAccountOwnership} onChange={handleChange}>
                    <option value="">-- يُرجى الاختيار --</option>
                    <option value="Yes">نعم</option>
                    <option value="No">لا</option>
                </select>
            </div>
            <div className='individuals-single-field'>
            <label htmlFor="expectedDuration">المدة التي يتوقع العميل خلالها استرداد الأموال المستثمرة</label>
                <select
                    id="expectedDuration"
                    name="expectedDuration"
                    value={formData.expectedDuration}
                    onChange={handleChange}
                >
                    <option value="">اختر المدة</option>
                    <option value="shortTerm">مدة قصيرة المدى (أقل من سنة)</option>
                    <option value="mediumTerm">مدة متوسطة المدى (من سنة إلى خمس سنوات)</option>
                    <option value="longTerm">مدة طويلة المدى (أكثر من خمس سنوات)</option>
                </select>
                </div>
        </div>

        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>أي معلومات أخرى عن الوضع المالي للمستثمر</label>
                <textarea name="financialSituationInfo" value={formData.financialSituationInfo} onChange={handleChange}></textarea>
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
        <h3>معلومات الحالات الخاصة</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
      
            <div className='individuals-single-field'>
                <label>قيم لناقص الأهلية</label>
                <input type="text" name="incompetentLegalGuardian" value={formData.incompetentLegalGuardian} onChange={handleChange} />
            </div>
        
            <div className='individuals-single-field'>
                <label>معرف المحجبة</label>
                <input type="text" name="veiledWomanId" value={formData.veiledWomanId} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>شاهد للأمي والكفيف</label>
                <input type="text" name="illiterateBlindWitness" value={formData.illiterateBlindWitness} onChange={handleChange} />
            </div>
           
            <div className='individuals-single-field'>
                <label>ولي / وصي للقاصر</label>
                <input type="text" name="inheritorsAgent" value={formData.inheritorsAgent} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>وكيل الورثة</label>
                <input type="text" name="fatherGuardianMinor" value={formData.fatherGuardianMinor} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الاسم</label>
                <input type="text" name="inheritorsAgentName" value={formData.inheritorsAgentName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهوية</label>
                <input type="text" name="inheritorsAgentId" value={formData.inheritorsAgentId} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>نوع الهوية</label>
                <input type="text" name="inheritorsAgentIdType" value={formData.inheritorsAgentIdType} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الانتهاء</label>
                <input type="date" name="inheritorsAgentExpiryDate" value={formData.inheritorsAgentExpiryDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>تاريخ الإصدار</label>
                <input type="date" name="inheritorsAgentIssueDate" value={formData.inheritorsAgentIssueDate} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الهاتف</label>
                <input type="text" name="inheritorsAgentTelNo" value={formData.inheritorsAgentTelNo} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>مكان الإصدار</label>
                <input type="text" name="inheritorsAgentPlaceOfIssue" value={formData.inheritorsAgentPlaceOfIssue} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>التوقيع</label>
                <input type="text" name="inheritorsAgentSignature" value={formData.inheritorsAgentSignature} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>رقم الفاكس</label>
                <input type="text" name="inheritorsAgentFaxNo" value={formData.inheritorsAgentFaxNo} onChange={handleChange} />
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
        <h3>المعرفة والخبرات الاستثمارية</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label>كيف تصف معرفتك وخبراتك الاستثمارية؟</label>
                <select name="investmentKnowledgeDescription" value={formData.investmentKnowledgeDescription} onChange={handleChange}>
                    <option value="Extensive">متميزة</option>
                    <option value="Good">جيدة</option>
                    <option value="Limited">محدودة</option>
                </select>
            </div>
            <div className='individuals-single-field'>
                <label>عدد سنوات الاستثمار في أسواق الأوراق المالية:</label>
                <input type="number" name="investmentYears" value={formData.investmentYears} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>المنتجات التي سبق الاستثمار فيها:</label>
                <input type="text" name="previousInvestments" value={formData.previousInvestments} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>الشهادات المهنية:</label>
                <input type="text" name="professionalCertificates" value={formData.professionalCertificates} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>نسبة القروض من الأموال المستثمرة:</label>
                <input type="text" name="loanToInvestedMoneyRatio" value={formData.loanToInvestedMoneyRatio} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>صفات التمويل بالهامش خلال السنوات الخمس السابقة:</label>
                <input type="text" name="marginTransactions" value={formData.marginTransactions} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>صفقات الأوراق المالية خارج المملكة خلال السنوات الخمس السابقة:</label>
                <input type="text" name="securitiesTransactionsOutsideKingdom" value={formData.securitiesTransactionsOutsideKingdom} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>إذا كان قد تم تنفيذ صفقات أوراق مالية خارج المملكة خلال السنوات الخمس السابقة، ما هي الدول التي تم تنفيذ تلك الصفقات فيها؟</label>
                <input type="text" name="countriesForSecuritiesTransactions" value={formData.countriesForSecuritiesTransactions} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label>قدرتك على تحمل المخاطر:</label>
                <select name="riskAppetite" value={formData.riskAppetite} onChange={handleChange}>
                    <option value="Extensive">متميزة</option>
                    <option value="Good">جيدة</option>
                    <option value="Limited">محدودة</option>
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
        <h3>الأهداف الاستثمارية العامة</h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field checkbox'>
                <label>حماية رأس المال</label>
                <input type="checkbox" name="capitalProtection" checked={formData.investmentGoals.capitalProtection} onChange={handleChange2} />
            </div>
            <div className='individuals-single-field checkbox'>
                <label>تحقيق الدخل</label>
                <input type="checkbox" name="incomeGeneration" checked={formData.investmentGoals.incomeGeneration} onChange={handleChange2} />
            </div>
            <div className='individuals-single-field checkbox'>
                <label>متوازنة</label>
                <input type="checkbox" name="balanced" checked={formData.investmentGoals.balanced} onChange={handleChange2} />
            </div>
            </div>
            <div className='individuals-sec-field'>
            <div className='individuals-single-field checkbox'>
                <label>نمو رأس المال</label>
                <input type="checkbox" name="capitalGrowth" checked={formData.investmentGoals.capitalGrowth} onChange={handleChange2} />
            </div>
            <div className='individuals-single-field checkbox'>
                <label>تكوين مدخرات للتقاعد</label>
                <input type="checkbox" name="retirementSavings" checked={formData.investmentGoals.retirementSavings} onChange={handleChange2} />
            </div>
            <div className='individuals-single-field checkbox'>
                <label>تمويل مشروع</label>
                <input type="checkbox" name="projectFinancing" checked={formData.investmentGoals.projectFinancing} onChange={handleChange2} />
            </div>
            </div>
            <div className='individuals-sec-field'>
            <div className='individuals-single-field checkbox'>
                <label>شراء أصل (على سبيل المثال: عقار أو مركبة)</label>
                <input type="checkbox" name="assetPurchase" checked={formData.investmentGoals.assetPurchase} onChange={handleChange2} />
            </div>
            </div>
            <div className='individuals-sec-field'>
            <div className='individuals-single-field '>
                <label>غيرها (يرجى التحديد)</label>
                <input type="text" name="otherInvestmentGoal" value={formData.investmentGoals.other} onChange={handleChange2} />
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
        <h3>ما الأصول الاستثمارية المفضلة للعميل؟</h3>
    </AccordionSummary>
    <AccordionDetails>
    <label>(يمكنك اختيار أكثر من فئة)</label>
    <div className='individuals-sec-field'>
        <div className='individuals-single-field checkbox'>
            <label>أصول بالريال السعودي</label>
            <input type="checkbox" name="saudiAssets" checked={formData.saudiAssets} onChange={handleChange} />
        </div>
        <div className='individuals-single-field checkbox'>
            <label>أصول بعملات أجنبية أخرى</label>
            <input type="checkbox" name="foreignCurrencyAssets" checked={formData.foreignCurrencyAssets} onChange={handleChange} />
        </div>
    </div>
    <div className='individuals-sec-field'>
        {formData.foreignCurrencyAssets && (
            <div className='individuals-single-field'>
                <label>يرجى التحديد العملات الأجنبية</label>
                <input type="text" name="selectedForeignCurrencies" value={formData.selectedForeignCurrencies} onChange={handleChange} />
            </div>
        )}
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
        <h3>علومات عن المحافظ الاستثمارية للعميل</h3>
    </AccordionSummary>
    <AccordionDetails>
    <div className='individuals-sec-field table'>

    <table>
  <thead>
    <tr>
      <th>الأدوات الاستثمارية</th>
      <th>المحفظة الحالية للعميل</th>
      <th>المحفظة المثالية للعميل</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Deposits/Murabah (ودائع ومرابحات)</td>
    <td><input type="text" name="clientCurrentWalletdepositsMurabah" value={formData.clientCurrentWalletdepositsMurabah} onChange={handleChange} /></td>
      <td><input type="text" name="idealportfoliofortheclientdepositsMurabah" value={formData.idealportfoliofortheclientdepositsMurabah} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Debit Instruments (أدوات دين)</td>
      <td><input type="text" name="clientCurrentWalletdebitInstruments" value={formData.clientCurrentWalletdebitInstruments} onChange={handleChange} /></td>

      <td><input type="text" name="idealportfoliofortheclientdebitInstruments" value={formData.idealportfoliofortheclientdebitInstruments} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Equity (أسهم)</td>
      <td><input type="text" name="clientCurrentWalletequity" value={formData.clientCurrentWalletequity} onChange={handleChange} /></td>
    
      <td><input type="text" name="idealportfoliofortheclientequity" value={formData.idealportfoliofortheclientequity} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Investment Fund (صناديق استثمارية)</td>
      <td><input type="text" name="clientCurrentWalletinvestmentFund" value={formData.clientCurrentWalletinvestmentFund} onChange={handleChange} /></td>
      <td><input type="text" name="idealportfoliofortheclientinvestmentFund" value={formData.idealportfoliofortheclientinvestmentFund} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Real estate (عقارات)</td>

      <td><input type="text" name="clientCurrentWalletrealEstate" value={formData.clientCurrentWalletrealEstate} onChange={handleChange} /></td>
      <td><input type="text" name="idealportfoliofortheclientrealEstate" value={formData.idealportfoliofortheclientrealEstate} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Derivatives contracts (عقود مشتقات)</td>
    <td><input type="text" name="clientCurrentWalletderivativesContracts" value={formData.clientCurrentWalletderivativesContracts} onChange={handleChange} /></td>
   
      <td><input type="text" name="idealportfoliofortheclientderivativesContracts" value={formData.idealportfoliofortheclientderivativesContracts} onChange={handleChange} /></td>
    </tr>
    <tr>
    <td>Alternative Investments (استثمارات بديلة)</td>
    <td><input type="text" name="clientCurrentWalletalternativeInvestments" value={formData.clientCurrentWalletalternativeInvestments} onChange={handleChange} /></td>

      <td><input type="text" name="idealportfoliofortheclientalternativeInvestments" value={formData.idealportfoliofortheclientalternativeInvestments} onChange={handleChange} /></td>
    </tr>
    <tr>
      <td>الرجاء التأكد من أن مجموع النسب المئوية أعلاه يساوي 100%</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
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
    <h3>معلومات أمين الحفظ</h3>
  </AccordionSummary>
  <AccordionDetails>
    <div className='individuals-sec-field'>
      <div className='individuals-single-field'>
        <label>رقم الحساب</label>
        <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
      </div>
      <div className='individuals-single-field'>
        <label>اسم أمين الحفظ</label>
        <input name="custodianName" value={formData.custodianName} onChange={handleChange} />
      </div>
      <div className='individuals-single-field'>
        <label>عنوان أمين الحفظ</label>
        <input name="custodianAddress" value={formData.custodianAddress} onChange={handleChange} />
      </div>
    </div>
    <div className='individuals-sec-field table'>
  <table>
    <thead>
      <tr>
        <th>أين ترغب بإرسال الآتي:</th>
        <th>العميل</th>
        <th>أمين الحفظ</th>
        <th>جهات أخرى: تحديد أي تعليمات صادرة عن العميل بشأن الجهة</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label>الشهادات Certificates</label>
        </td>
        <td className='checkbox'>          <input type="checkbox" name="clientCertificates" checked={formData.clientCertificates} onChange={handleChange} /></td>
        <td className='checkbox'>
          <input type="checkbox" name="custodianCertificates" checked={formData.custodianCertificates} onChange={handleChange} />
        </td>
        <td>        <input name="OtherPartiesCertificates" value={formData.OtherPartiesCertificates} onChange={handleChange} /></td>
      </tr>
      <tr>
        <td>
          <label>حصص الأرباح أو أي دخل آخر Dividends or any other income</label>
        </td>
        <td className='checkbox'>          <input type="checkbox" name="clientDividends" checked={formData.clientDividends} onChange={handleChange} />
</td>
        <td className='checkbox'>
          <input type="checkbox" name="custodianDividends" checked={formData.custodianDividends} onChange={handleChange} />
        </td>
        <td >        <input name="OtherPartiesDividends" value={formData.OtherPartiesDividends} onChange={handleChange} /></td>

      </tr>
      <tr>
        <td>
          <label>حصيلة البيع/ Sales proceed</label>
        </td>
        <td className='checkbox'>          <input type="checkbox" name="clientSalesProceed" checked={formData.clientSalesProceed} onChange={handleChange} /></td>
        <td className='checkbox' >
          <input type="checkbox" name="custodianSalesProceed" checked={formData.custodianSalesProceed} onChange={handleChange} />
        </td>
        <td>        <input name="OtherPartiesSalesProceed" value={formData.OtherPartiesSalesProceed} onChange={handleChange} /></td>

      </tr>
    </tbody>
  </table>
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
    <h3>استبيان تقييم المخاطر / الملائمة</h3>
  </AccordionSummary>
  <AccordionDetails>
    <div className='individuals-sec-field'>
      <div className='individuals-single-field'>
        <label>1. ما هو مدى خبرتك في مجال المنتجات الاستثمارية؟</label>
        <select value={q1Answer} onChange={(e) => setQ1Answer(e.target.value)}>
          <option value="1">لا يوجد اي خبرة استثمارية (نقطة واحدة)</option>
          <option value="2">خبرة استثمارية قليلة (نقطتان)</option>
          <option value="3">خبرة عالية في الاستثمار (3 نقاط)</option>
        </select>
      </div>
      <div className='individuals-single-field'>
        <label>2. كم هو عمرك؟</label>
        <select value={q2Answer} onChange={(e) => setQ2Answer(e.target.value)}>
          <option value="1">فوق 65 (نقطة واحدة)</option>
          <option value="2">بين 51-65 (نقطتان)</option>
          <option value="3">بين 35-50 (3 نقاط)</option>
          <option value="4">أقل من 35 (4 نقاط)</option>
        </select>
      </div>
      </div>
      <div className='individuals-sec-field'>
      <div className='individuals-single-field'>
        <label>3. ماهي ردة فعلك إذا هبطت قيمة استثمارك فجأة؟</label>
        <select value={q3Answer} onChange={handleQ3Change}>
        <option value="">-- اختر ردة الفعل --</option>
        <option value="1">بيعها لتفادي اي خسارة مستقبلية (نقطة واحدة)</option>
        <option value="2">بيع جزء منها لتفادي الخسائر (نقطتان)</option>
        <option value="3">أحافظ عليها (3 نقاط)</option>
        <option value="4">شراء المزيد إذا كان الاستثمار مغري على الاسعار المرتفعة ويظهر بأنه أفضل على سعره الحالي (4 نقاط)</option>
      </select>
      </div>
      <div className='individuals-single-field'>
        <label>4. ما هي المدة التي ستبقي فيها على استثمارك؟</label>
        <select value={q4Answer} onChange={handleQ4Change}>
        <option value="">-- اختر المدة --</option>
        <option value="1">أقل من سنة (نقطة واحدة)</option>
        <option value="2">بين 1-2 سنة (نقطتان)</option>
        <option value="3">بين 2-3 سنوات (3 نقاط)</option>
        <option value="4">أكثر من 3 سنوات (4 نقاط)</option>
      </select>      </div>
      </div>
      <div className='individuals-sec-field'>

      <div className='individuals-single-field'>
        <label>5. ماهي نسبة رأس المال التي سوف تستعملها لهذا الاستثمار من إجمالي رأس المال (باستثناء العقارات والاستثمارات غير النقدية)؟</label>
        <select value={q5Answer} onChange={handleQ5Change}>
        <option value="">-- اختر النسبة --</option>
        <option value="1">أقل من 25% (نقطة واحدة)</option>
        <option value="2">بين 26% -50% (نقطتان)</option>
        <option value="3">بين 51% -75% (3 نقاط)</option>
        <option value="4">أكثر من 75% (4 نقاط)</option>
      </select>      </div>
      <div className='individuals-single-field'>
        <label>النتيجة (عدد النقاط)</label>
        <div className='calculateTotalPoints'><h4>{calculateTotalPoints()}</h4></div>
              </div>
          
    </div>
    <div className='individuals-sec-field'>

    <div className='individuals-single-field'>
                <label>عدد النقاط من (1) إلى (6): مخاطر منخفضة
(ننصح العميل بالاستثمار في منتجات منخفضة المخاطر)
</label>
              </div></div>
              <div className='individuals-sec-field'>

<div className='individuals-single-field'>
            <label>
            عدد النقاط من (7) إلى (15): مخاطر متوسطة إلى مرتفعة
(ننصح العميل بالاستثمار في منتجات متوسطة المخاطر)

</label>
          </div></div>
          <div className='individuals-sec-field'>

<div className='individuals-single-field'>
            <label>
            عدد النقاط أكثر من (15): مخاطر مرتفعة
(ننصح العميل بالاستثمار في منتجات عالية المخاطر)
</label>
          </div></div>
          <div className='individuals-sec-field'>

          <div className='individuals-single-field'>
  <label>يرغب العميل الاستثمار في (صناديق / محافظ):</label>
  <input
    name="investmentDesire"
    value={formData.investmentDesire}
    onChange={handleChange}
  />
</div>
<div className='individuals-single-field'>
  <label>بالرغم من توصية إتقان كابيتال:</label>
  <input
    name="recommendation"
    value={formData.recommendation}
    onChange={handleChange}
  />
  </div>
  </div>
          <div className='individuals-sec-field'>

<div className='individuals-single-field'>
  <label>التوقيع:</label>
  <input
    type="file"
    name="signature"
    accept="image/*"

    value={formData.signature}
    onChange={handleChange}
  />
</div>
<div className='individuals-single-field'>
  <label>اسم العميل:</label>
  <input

    name="clientName"
    value={formData.clientName}
    onChange={handleChange}

  />
</div>
</div>

  </AccordionDetails>
</Accordion>


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