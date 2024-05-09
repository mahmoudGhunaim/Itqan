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
        fullName: '',
        nationality: '',
        gender: '',
        title:'',
        investorInformation:'', 
        identityType: '',
        relationship: '',
        nationality: '',
        idType: '',
        idNumber: '',
        placeOfIssue: '',
        issueDate: '',
        expiryDate: '',
        identityNumber: '',
        issueDate: '',
        expirationDate: '',
        placeOfIssue: '',
        dateOfBirth: '',
        maritalStatus: '',
        numberOfDependents: '',
        housingType: '',
        otherFinancialInfo:'',
        namesOfDirectors:'',
        namesOfNaturalPersons:'',
        isPubliclyListed:'',
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
        mainActivity: '',
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
                      clientName: '',
                      registrationCountry:'',
                      businessActivityCountry:'',
                      mainActivity:'',
                      paidCapitalL:'',
                      annualBusinessVolume:'',
                      website:'',
                      NameofContact:''

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
            const response = await axios.post("https://itqan-strapi.softylus.com/api/companies-logins", { data: formData }, {
                headers: {
                    'Content-Type': 'application/json',              
                    "Authorization": "Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c"
                }
            });
            if (response.status === 200 ||response.status === 204) {
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
                    YearsEmployment:'',
                    placeOfIssue: '',
                    dateOfBirth: '',
                    maritalStatus: '',
                    numberOfDependents: '',
                    mainActivity:'',
                    housingType: '',
                    relationship: '',
                    nationality: '',
                    idType: '',
                    idNumber: '',
                    placeOfIssue: '',
                    issueDate: '',
                    expiryDate: '',
                    residenceAddress: '',
                    Correspondence:'',
                    postalCode: '',
                    mainActivity:'',
                      paidCapitalL:'',
                      annualBusinessVolume:'',
                      website:'',
                    poBox: '',
                    country: '',
                    city: '',
                    mobileNumber: '',
                    homePhone: '',
                    Sector:'',
                    email: '',
                    Building: '' ,
                    Currency:'',
                    telephoneNumber: '',
                    correspondenceLanguage: '',
                    messageTime: '',
                    businessActivityCountry:'',
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
                      clientName: '',
                      registrationCountry:'',
                      NameofContact:'',
                      otherFinancialInfo:'',
                      namesOfDirectors:'',
                      namesOfNaturalPersons:'',
                      isPubliclyListed:'',
                      
                });
            } else {
                setFormError(true);
            }
        } catch (error) {
            console.error('Error:', error);
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
        <Seo title="فتح حساب للشركات - خدمة العملاء - إتقان كابيتال" description="اتفق على شروط وأحكام فتح حساب استثماري للأفراد مع إتقان كابيتال. ملء النموذج بالمعلومات المطلوبة لبدء عملية الفتح. تقديم الطلب الآن واحصل على حسابك الاستثماري الخاص."/>
                    <ScrollToTopButton/>
                    <Hero title="فتح حساب للشركات" />
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
                <h3>معلومات المستثمر (الشركات)</h3>
            </AccordionSummary>
            <AccordionDetails>
            <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>الاسم:</label>
                        <input name="companyName" value={formData.companyName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الكيان القانوني:</label>
                        <input name="legalEntity" value={formData.legalEntity} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الرقم الموحد للمنشأة:</label>
                        <input name="unifiedNumber" value={formData.unifiedNumber} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>رقم السجل التجاري (أو ما يمثله):</label>
                        <input name="commercialRegistrationNumber" value={formData.commercialRegistrationNumber} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>تاريخ التأسيس أو ممارسة النشاط:</label>
                        <input type="date" name="establishmentDate" value={formData.establishmentDate} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>العنوان المسجل:</label>
                        <input name="registeredAddress" value={formData.registeredAddress} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>رقم المبنى:</label>
                        <input name="buildingNumber" value={formData.buildingNumber} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>اسم الشارع:</label>
                        <input name="streetName" value={formData.streetName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الحي:</label>
                        <input name="district" value={formData.district} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>المدينة:</label>
                        <input name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الرمز البريدي:</label>
                        <input name="postalCode" value={formData.postalCode} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الرقم الإضافي:</label>
                        <input name="additionalNumber" value={formData.additionalNumber} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>بلد التسجيل:</label>
                        <input name="registrationCountry" value={formData.registrationCountry} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>دولة ممارسة النشاط:</label>
                        <input name="businessActivityCountry" value={formData.businessActivityCountry} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>النشاط الرئيسي:</label>
                        <input name="mainActivity" value={formData.mainActivity} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>عدد الموظفين:</label>
                        <input name="numberOfEmployees" value={formData.numberOfEmployees} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>رأس المال المدفوع:</label>
                        <input name="paidCapital" value={formData.paidCapital} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>حجم الأعمال السنوية:</label>
                        <input name="annualBusinessVolume" value={formData.annualBusinessVolume} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>هاتف (بالإضافة للتحويلة):</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الموقع الإلكتروني (إن وجد):</label>
                        <input name="website" value={formData.website} onChange={handleChange} />
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
                <h3>كشوف الحساب</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className='individuals-sec-field'>
              
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
               
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="individuals-login-field"
                className='individuals-sec-field-title'
            >
                <h3>معلومات الاتصال</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>اسم ضابط الاتصال</label>
                        <input name="contactName" value={formData.contactName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الهاتف</label>
                        <input name="businessPhone" value={formData.businessPhone} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>البريد الالكتروني</label>
                        <input name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>الجوال</label>
                        <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>عنوان المراسلة</label>
                        <input name="correspondenceAddress" value={formData.correspondenceAddress} onChange={handleChange} />
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
                <h3>معلومات الحساب البنكي</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>اسم البنك</label>
                        <input name="bankName" value={formData.bankName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>اسم مالك الحساب</label>
                        <input name="accountOwnerName" value={formData.accountOwnerName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>رقم الحساب الرئيسي</label>
                        <input name="mainAccount" value={formData.mainAccount} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>الفرع</label>
                        <input name="branch" value={formData.branch} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الدولة</label>
                        <input name="country" value={formData.country} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>عملة الحساب</label>
                        <input name="currency" value={formData.currency} onChange={handleChange} />
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
                        <label>هل الشركة مدرجة في السوق السعودي؟</label>
                        <select name="isPubliclyListed" value={formData.isPubliclyListed} onChange={handleChange}>
                            <option value="">-- يُرجى الاختيار --</option>
                            <option value="نعم">نعم / Yes</option>
                            <option value="لا">لا / No</option>
                        </select>
                    </div>
                    <div className='individuals-single-field'>
                        <label>أسماء الأشخاص الطبيعيين المالكين او المسيطرين على 25% أو أكثر من الحصص</label>
                        <input name="namesOfNaturalPersons" value={formData.namesOfNaturalPersons} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>

                    <div className='individuals-single-field'>
                        <label>أسماء جميع المديرين وكبار الإداريين:</label>
                        <input name="namesOfDirectors" value={formData.namesOfDirectors} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>أي معلومات مالية أخرى عن الوضع المالي للعميل</label>
                        <input name="otherFinancialInfo" value={formData.otherFinancialInfo} onChange={handleChange} />
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
                <h3>أسماء الأشخاص المفوضين بإدارة الحساب</h3>
            </AccordionSummary>
            <AccordionDetails>
                <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>اسم المفوض على الحساب</label>
                        <input name="authorizedPersonName" value={formData.authorizedPersonName} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>علاقته بالعميل/ الشركة</label>
                        <input name="relationship" value={formData.relationship} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>الجنسية</label>
                        <input name="nationality" value={formData.nationality} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>نوع الهوية</label>
                        <select name="idType" value={formData.idType} onChange={handleChange}>
                            <option value="">-- يُرجى الاختيار --</option>
                            <option value="Family ID">هوية عائلية</option>
                            <option value="National ID">هوية وطنية</option>
                            <option value="Passport">جواز سفر</option>
                            <option value="Residence">إقامة</option>
                        </select>
                    </div>
                    <div className='individuals-single-field'>
                        <label>رقم الهوية</label>
                        <input name="idNumber" value={formData.idNumber} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>مكان الإصدار</label>
                        <input name="placeOfIssue" value={formData.placeOfIssue} onChange={handleChange} />
                    </div>
                    </div>
                    <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label>تاريخ الإصدار</label>
                        <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
                    </div>
                    <div className='individuals-single-field'>
                        <label>تاريخ الانتهاء</label>
                        <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} />
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

export default CompaniesLogin