
import Hero from '../components/Hero';
import Layout from "../components/layout";
import { Link } from "gatsby"
import React, { useState,useEffect } from 'react';
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
import { FormattedMessage } from 'react-intl';
import { useLocalization } from '../context/LocalizationContext';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Checkbox, TextField } from '@mui/material';

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
    //   const express = require('express');
    //   const cors = require('cors');
      
    //   const app = express();
      
    //   // Configure CORS
    //   app.use(cors({
    //       origin: 'https://your-client-origin.com', // Change to your actual client origin
    //       methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    //       allowedHeaders: ['Authorization', 'Content-Type', 'Accept', 'Cache-Control', 'Accept-Encoding'],
    //       credentials: true
    //   }));
      
    //   // Example of other middleware and routes
    //   app.use(express.json());
      
    //   // Define your routes here
    //   app.post('/api/individuals-logins', (req, res) => {
    //       // Your existing API logic
    //       res.json({ message: 'API working' });
    //   });
      
    //   // Start the server
    //   const PORT = process.env.PORT || 3000;
    //   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
    const [total, setTotal] = useState(0);
    const [calc, setcalc] = useState({
      idealportfoliofortheclientalternativeInvestments: '',
      idealportfoliofortheclientderivativesContracts: '',
      idealportfoliofortheclientrealEstate: '',
      idealportfoliofortheclientinvestmentFund: '',
      idealportfoliofortheclientequity: '',
      idealportfoliofortheclientdebitInstruments: '',
      idealportfoliofortheclientdepositsMurabah: ''
    });

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setcalc({
      ...calc,
      [name]: value
    });
  };
    useEffect(() => {
      const sum = Object.values(calc).reduce((acc, curr) => {
        const value = parseFloat(curr);
        return acc + (isNaN(value) ? 0 : value);
      }, 0);
      setTotal(sum);
    }, [calc]);
     const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("https://itqan-strapi.softylus.com/api/individuals-logins", { data: formData }, {
                headers: {
                    'Content-Type': 'application/json',              
                    "Authorization": "Bearer 848485480979d1216343c88d697bd91d7e9d71cacffad3b1036c75e10813cc5849955b2fb50ea435089aa66e69976f378d4d040bc32930525651db4ad255615c24947494ddef876ec208ef49db6ba43f4a2eb05ddbee034e2b01f54741f2e9ea2f1930a4181d602dc086b7cde8a871f48d63596e07356bf2a56749c7c4f20b6c"
                }
            });
    
            if (response.status === 200 ) {
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
      const { locale } = useLocalization();
      const rows = [
        { id: 'depositsMurabah', label: 'Deposits/Murabah (ودائع ومرابحات)' },
        { id: 'debitInstruments', label: 'Debit Instruments (أدوات دين)' },
        { id: 'equity', label: 'Equity (أسهم)' },
        { id: 'investmentFund', label: 'Investment Fund (صناديق استثمارية)' },
        { id: 'realEstate', label: 'Real estate (عقارات)' },
        { id: 'derivativesContracts', label: 'Derivatives contracts (عقود مشتقات)' },
        { id: 'alternativeInvestments', label: 'Alternative Investments (استثمارات بديلة)' },
      ];
      const rows2 = [
        { 
          id: 'Certificates', 
          label: 'الشهادات Certificates'
        },
        { 
          id: 'Dividends', 
          label: 'حصص الأرباح أو أي دخل آخر Dividends or any other income'
        },
        { 
          id: 'SalesProceed', 
          label: 'حصيلة البيع/ Sales proceed'
        }
      ];
  return (
<Layout>
<Seo title="فتح حساب للأفراد - خدمة العملاء - إتقان كابيتال" description="اتفق على شروط وأحكام فتح حساب استثماري للأفراد مع إتقان كابيتال. ملء النموذج بالمعلومات المطلوبة لبدء عملية الفتح. تقديم الطلب الآن واحصل على حسابك الاستثماري الخاص."/>
            <ScrollToTopButton/>
            <Hero title={<FormattedMessage id="individualAccount.title" />} />
            <section className='individuals-login-sec'>
            <div className='individuals-login-container'>
                <div className='individuals-login-title'>
                    <h1><FormattedMessage id="investment_account_agreement_title" /></h1>
                    <p><FormattedMessage id="select_account_type" /></p>
                    <div className='individuals-login-buttons'>
                        <Link to={`/${locale}/companies-login`}>
                            <button style={{background:"none",color:"#46235E"}}>
                                <FormattedMessage id="corporate_account" />
                            </button>
                        </Link>
                        <Link to={`/${locale}/Individuals-login`}>
                        <button style={{background:"#3F1A58",color:"#FFFFFF"}}>
                                <FormattedMessage id="individual_account" />
                            </button>
                        </Link>
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
                            <h3><FormattedMessage id="personal_information_individuals" /></h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='individuals-sec-field'>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="investor_information" /></label>
                                    <select name="investorInformation" value={formData.investorInformation} onChange={handleChange}>
                                        <option value=""><FormattedMessage id="please_select" /></option>
                                        <option value="New Account"><FormattedMessage id="new_account" /></option>
                                        <option value="Additional account"><FormattedMessage id="additional_account" /></option>
                                        <option value="Update Information"><FormattedMessage id="update_information" /></option>
                                    </select>
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="full_name" /></label>
                                    <input name="fullName" value={formData.fullName} onChange={handleChange} />
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="gender" /></label>
                                    <select name="gender" value={formData.gender} onChange={handleChange}>
                                        <option value=""><FormattedMessage id="please_select" /></option>
                                        <option value="Male"><FormattedMessage id="male" /></option>
                                        <option value="Female"><FormattedMessage id="female" /></option>
                                    </select>
                                </div>
                            </div>
                            <div className='individuals-sec-field'>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="investor_title" /></label>
                                    <select name="title" value={formData.title} onChange={handleChange}>
                                        <option value=""><FormattedMessage id="please_select" /></option>
                                        <option value="Mr."><FormattedMessage id="mr" /></option>
                                        <option value="Mrs."><FormattedMessage id="mrs" /></option>
                                        <option value="Miss."><FormattedMessage id="miss" /></option>
                                        <option value="Dr."><FormattedMessage id="dr" /></option>
                                        <option value="Eng."><FormattedMessage id="eng" /></option>
                                        <option value="other"><FormattedMessage id="other" /></option>
                                    </select>
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="date_of_birth" /></label>
                                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="marital_status" /></label>
                                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                        <option value=""><FormattedMessage id="please_select" /></option>
                                        <option value="Single"><FormattedMessage id="single" /></option>
                                        <option value="Married"><FormattedMessage id="married" /></option>
                                    </select>
                                </div>
                            </div>
                            <div className='individuals-sec-field'>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="number_of_dependents" /></label>
                                    <input type="number" name="numberOfDependents" value={formData.numberOfDependents} onChange={handleChange} />
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="nationality" /></label>
                                    <input name="nationality" value={formData.nationality} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='individuals-sec-field'>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="identity_type" /></label>
                                    <select name="identityType" value={formData.identityType} onChange={handleChange}>
                                        <option value=""><FormattedMessage id="please_select" /></option>
                                        <option value="National ID"><FormattedMessage id="national_id" /></option>
                                        <option value="Passport"><FormattedMessage id="passport" /></option>
                                        <option value="Residence ID"><FormattedMessage id="residence_id" /></option>
                                        <option value="Family Registration"><FormattedMessage id="family_registration" /></option>
                                        <option value="Other"><FormattedMessage id="other" /></option>
                                    </select>
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="identity_number" /></label>
                                    <input name="identityNumber" value={formData.identityNumber} onChange={handleChange} />
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="issue_date" /></label>
                                    <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='individuals-sec-field'>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="expiration_date" /></label>
                                    <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} />
                                </div>
                                <div className='individuals-single-field'>
                                    <label><FormattedMessage id="place_of_issue" /></label>
                                    <input name="placeOfIssue" value={formData.placeOfIssue} onChange={handleChange} />
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
        <h3><FormattedMessage id="address.title" /></h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="postalCode.label" /></label>
                <input name="postalCode" value={formData.postalCode} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="poBox.label" /></label>
                <input name="poBox" value={formData.poBox} onChange={handleChange} />
            </div>
   
            <div className='individuals-single-field'>
                <label htmlFor="correspondenceLanguage">
                    <FormattedMessage id="correspondenceLanguage.label" />
                </label>
                <select id="correspondenceLanguage" name="correspondenceLanguage" value={formData.correspondenceLanguage} onChange={handleChange}>
                    <option value="">
                        <FormattedMessage id="correspondenceLanguage.placeholder" />
                    </option>
                    <option value="EN">
                        <FormattedMessage id="correspondenceLanguage.option.EN" />
                    </option>
                    <option value="AR">
                        <FormattedMessage id="correspondenceLanguage.option.AR" />
                    </option>
                </select>
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="email.label" /></label>
                <input name="email" value={formData.email} onChange={handleChange} />
            </div>
                
            <div className='individuals-single-field'>
                <label><FormattedMessage id="mobileNumber.label" /></label>
                <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="telephoneNumber.label" /></label>
                <input name="telephoneNumber" value={formData.telephoneNumber} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="country.label" /></label>
                <input name="country" value={formData.country} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="building.label" /></label>
                <input name="Building" value={formData.Building} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="city.label" /></label>
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
        <h3><FormattedMessage id="bankInfo.title" /></h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="bankName.label" /></label>
                <input name="bankName" value={formData.bankName} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="ibanNumber.label" /></label>
                <input name="ibanNumber" value={formData.ibanNumber} onChange={handleChange} />
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="bankBranch.label" /></label>
                <input name="bankBranch" value={formData.bankBranch} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="bankCity.label" /></label>
                <input name="bankCity" value={formData.bankCity} onChange={handleChange} />
            </div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="currency.label" /></label>
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
        <h3><FormattedMessage id="correspondence.title" /></h3>
    </AccordionSummary>
    <AccordionDetails>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="incomeSource.label" /></label>
                <select id="incomeSource" name="incomeSource">
                    <option value=""><FormattedMessage id="incomeSource.placeholder" /></option>
                    <option value="Employment">employment / وظيفة</option>
                    <option value="Business">Business / تجارة</option>
                    <option value="Real Estate">Real Estate / عقار</option>
                    <option value="Inheritance">Inheritance / إرث</option>
                    <option value="Stock">Stock / أسهم</option>
                    <option value="Other">Other / أخرى</option>
                </select>
            </div>
            <div className='individuals-single-field'>
    <label><FormattedMessage id="communicationMethod.label" /></label>
    <select id="communicationMethod" name="communicationMethod">
        <option value="">
            <FormattedMessage id="communicationMethod.placeholder" />
        </option>
        <option value="Email">
            <FormattedMessage id="communicationMethod.email" />
        </option>
        <option value="Fax">
            <FormattedMessage id="communicationMethod.fax" />
        </option>
        <option value="SMS">
            <FormattedMessage id="communicationMethod.sms" />
        </option>
        <option value="Mail">
            <FormattedMessage id="communicationMethod.mail" />
        </option>
    </select>
</div>
            <div className='individuals-single-field'>
                <label><FormattedMessage id="correspondenceType.label" /></label>
                <select 
        id="Correspondence" 
        name="Correspondence" 
        value={formData.Correspondence} 
        onChange={handleChange}
    >
        <option value="">
            <FormattedMessage id="correspondenceType.placeholder" />
        </option>
        <option value="Per Transaction">
            <FormattedMessage id="accountStatements.perTransaction" />
        </option>
        <option value="Daily">
            <FormattedMessage id="accountStatements.daily" />
        </option>
        <option value="Monthly">
            <FormattedMessage id="accountStatements.monthly" />
        </option>
        <option value="Upon Request">
            <FormattedMessage id="accountStatements.uponRequest" />
        </option>
    </select>
            </div>
        </div>
        <div className='individuals-sec-field'>
            <div className='individuals-single-field'>
                <label htmlFor="annualIncome"><FormattedMessage id="annualIncome.label" /></label>
                <select id="annualIncome" name="annualIncome" value={formData.annualIncome} onChange={handleChange}>
                    <option value=""><FormattedMessage id="annualIncome.placeholder" /></option>
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
                <label><FormattedMessage id="netWorth.label" /></label>
                <select id="netWorth" name="netWorth">
                    <option value=""><FormattedMessage id="netWorth.placeholder" /></option>
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
            <h3><FormattedMessage id="careerInfo.title" /></h3>
        </AccordionSummary>
        <AccordionDetails>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="academicQualifications.label" /></label>
                    <select id="academicQualifications" name="academicQualifications">
                        <option value=""><FormattedMessage id="academicQualifications.placeholder" /></option>
                        <option value="Primary"><FormattedMessage id="academicQualifications.primary" /></option>
                        <option value="Intermediate"><FormattedMessage id="academicQualifications.intermediate" /></option>
                        <option value="High School"><FormattedMessage id="academicQualifications.highSchool" /></option>
                        <option value="Diploma"><FormattedMessage id="academicQualifications.diploma" /></option>
                        <option value="Bachelor"><FormattedMessage id="academicQualifications.bachelor" /></option>
                        <option value="Postgraduate"><FormattedMessage id="academicQualifications.postgraduate" /></option>
                    </select>
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="sector.label" /></label>
                    <select id="Sector" name="Sector">
                        <option value=""><FormattedMessage id="sector.placeholder" /></option>
                        <option value="Government"><FormattedMessage id="sector.government" /></option>
                        <option value="Private"><FormattedMessage id="sector.private" /></option>
                        <option value="Self-Employment"><FormattedMessage id="sector.selfEmployment" /></option>
                        <option value="Other"><FormattedMessage id="sector.other" /></option>
                    </select>
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="employmentCategory.label" /></label>
                    <select id="employmentCategory" name="employmentCategory">
                        <option value=""><FormattedMessage id="employmentCategory.placeholder" /></option>
                        <option value="Full-Time"><FormattedMessage id="employmentCategory.fullTime" /></option>
                        <option value="Part-Time"><FormattedMessage id="employmentCategory.partTime" /></option>
                        <option value="Contract"><FormattedMessage id="employmentCategory.contract" /></option>
                        <option value="Freelance"><FormattedMessage id="employmentCategory.freelance" /></option>
                        <option value="Internship"><FormattedMessage id="employmentCategory.internship" /></option>
                        <option value="Temporary"><FormattedMessage id="employmentCategory.temporary" /></option>
                        <option value="Other"><FormattedMessage id="employmentCategory.other" /></option>
                    </select>
                </div>
            </div>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="employerName.label" /></label>
                    <input name="employerName" value={formData.employerName} onChange={handleChange} />
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="jobTitle.label" /></label>
                    <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                </div>
            </div>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="employerAddress.label" /></label>
                    <input name="employerAddress" value={formData.employerAddress} onChange={handleChange} />
                </div>
            </div>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="yearsEmployment.label" /></label>
                    <input name="yearsEmployment" value={formData.yearsEmployment} onChange={handleChange} />
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="employerPhone.label" /></label>
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
            <h3><FormattedMessage id="financialExperience.title" /></h3>
        </AccordionSummary>
        <AccordionDetails>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="financialExperience.label" /></label>
                    <select name="financialExperience" value={formData.financialExperience} onChange={handleChange}>
                        <option value=""><FormattedMessage id="financialExperience.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="financialExperience.yes" /></option>
                        <option value="No"><FormattedMessage id="financialExperience.no" /></option>
                    </select>
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="otherFinancialExperience.label" /></label>
                    <input name="otherFinancialExperience" value={formData.otherFinancialExperience} onChange={handleChange} />
                      
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
            <h3><FormattedMessage id="generalInformation.title" /></h3>
        </AccordionSummary>
        <AccordionDetails>
            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.boardMembership.label" /></label>
                    <select name="boardMembership" value={formData.boardMembership} onChange={handleChange}>
                        <option value=""><FormattedMessage id="generalInformation.boardMembership.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="generalInformation.yes" /></option>
                        <option value="No"><FormattedMessage id="generalInformation.no" /></option>
                    </select>
                    {formData.boardMembership === "Yes" && (
                        <input type="text" name="companyName" placeholder={<FormattedMessage id="generalInformation.boardMembership.companyName.placeholder" />} value={formData.companyName} onChange={handleChange} />
                    )}
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.seniorPosition.label" /></label>
                    <select name="seniorPosition" value={formData.seniorPosition} onChange={handleChange}>
                        <option value=""><FormattedMessage id="generalInformation.seniorPosition.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="generalInformation.yes" /></option>
                        <option value="No"><FormattedMessage id="generalInformation.no" /></option>
                    </select>
                </div>
            </div>

            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.familyRelationship.label" /></label>
                    <select name="familyRelationship" value={formData.familyRelationship} onChange={handleChange}>
                        <option value=""><FormattedMessage id="generalInformation.familyRelationship.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="generalInformation.yes" /></option>
                        <option value="No"><FormattedMessage id="generalInformation.no" /></option>
                    </select>
                </div>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.accountOwnership.label" /></label>
                    <select name="accountOwnership" value={formData.accountOwnership} onChange={handleChange}>
                        <option value=""><FormattedMessage id="generalInformation.accountOwnership.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="generalInformation.yes" /></option>
                        <option value="No"><FormattedMessage id="generalInformation.no" /></option>
                    </select>
                </div>
            </div>

            {formData.accountOwnership === "No" && (
                <div className='individuals-sec-field'>
                    <div className='individuals-single-field'>
                        <label><FormattedMessage id="generalInformation.beneficialOwnership.label" /></label>
                        <textarea name="beneficialOwnership" value={formData.beneficialOwnership} onChange={handleChange}></textarea>
                    </div>
                </div>
            )}

            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.bankAccountOwnership.label" /></label>
                    <select name="bankAccountOwnership" value={formData.bankAccountOwnership} onChange={handleChange}>
                        <option value=""><FormattedMessage id="generalInformation.bankAccountOwnership.placeholder" /></option>
                        <option value="Yes"><FormattedMessage id="generalInformation.yes" /></option>
                        <option value="No"><FormattedMessage id="generalInformation.no" /></option>
                    </select>
                </div>
                <div className='individuals-single-field'>
                    <label htmlFor="expectedDuration"><FormattedMessage id="generalInformation.expectedDuration.label" /></label>
                    <select
                        id="expectedDuration"
                        name="expectedDuration"
                        value={formData.expectedDuration}
                        onChange={handleChange}
                    >
                       <option value=""><FormattedMessage id="generalInformation.expectedDuration.placeholder" /></option>
                        <option value="shortTerm"><FormattedMessage id="generalInformation.expectedDuration.shortTerm" /></option>
                        <option value="mediumTerm"><FormattedMessage id="generalInformation.expectedDuration.mediumTerm" /></option>
                        <option value="longTerm"><FormattedMessage id="generalInformation.expectedDuration.longTerm" /></option>
                    </select>
                </div>
            </div>

            <div className='individuals-sec-field'>
                <div className='individuals-single-field'>
                    <label><FormattedMessage id="generalInformation.financialSituationInfo.label" /></label>
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
      <h3><FormattedMessage id="specialCaseInformation.heading" /></h3>
    </AccordionSummary>
    <AccordionDetails>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.incompetentLegalGuardian" /></label>
          <input type="text" name="incompetentLegalGuardian" value={formData.incompetentLegalGuardian} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.veiledWomanId" /></label>
          <input type="text" name="veiledWomanId" value={formData.veiledWomanId} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.illiterateBlindWitness" /></label>
          <input type="text" name="illiterateBlindWitness" value={formData.illiterateBlindWitness} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgent" /></label>
          <input type="text" name="inheritorsAgent" value={formData.inheritorsAgent} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.fatherGuardianMinor" /></label>
          <input type="text" name="fatherGuardianMinor" value={formData.fatherGuardianMinor} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentName" /></label>
          <input type="text" name="inheritorsAgentName" value={formData.inheritorsAgentName} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentId" /></label>
          <input type="text" name="inheritorsAgentId" value={formData.inheritorsAgentId} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentIdType" /></label>
          <input type="text" name="inheritorsAgentIdType" value={formData.inheritorsAgentIdType} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentExpiryDate" /></label>
          <input type="date" name="inheritorsAgentExpiryDate" value={formData.inheritorsAgentExpiryDate} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentIssueDate" /></label>
          <input type="date" name="inheritorsAgentIssueDate" value={formData.inheritorsAgentIssueDate} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentTelNo" /></label>
          <input type="text" name="inheritorsAgentTelNo" value={formData.inheritorsAgentTelNo} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentPlaceOfIssue" /></label>
          <input type="text" name="inheritorsAgentPlaceOfIssue" value={formData.inheritorsAgentPlaceOfIssue} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentSignature" /></label>
          <input type="text" name="inheritorsAgentSignature" value={formData.inheritorsAgentSignature} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="specialCaseInformation.inheritorsAgentFaxNo" /></label>
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
      <h3><FormattedMessage id="investmentExperience.heading" /></h3>
    </AccordionSummary>
    <AccordionDetails>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.knowledgeDescription" /></label>
          <select name="investmentKnowledgeDescription" value={formData.investmentKnowledgeDescription} onChange={handleChange}>
          <option value=""><FormattedMessage id="generalInformation.expectedDuration.placeholder" /></option>

            <option value="Extensive"><FormattedMessage id="investmentExperience.extensive" /></option>
            <option value="Good"><FormattedMessage id="investmentExperience.good" /></option>
            <option value="Limited"><FormattedMessage id="investmentExperience.limited" /></option>
          </select>
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.years" /></label>
          <input type="number" name="investmentYears" value={formData.investmentYears} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.previousInvestments" /></label>
          <input type="text" name="previousInvestments" value={formData.previousInvestments} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.professionalCertificates" /></label>
          <input type="text" name="professionalCertificates" value={formData.professionalCertificates} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.loanToInvestedMoneyRatio" /></label>
          <input type="text" name="loanToInvestedMoneyRatio" value={formData.loanToInvestedMoneyRatio} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.marginTransactions" /></label>
          <input type="text" name="marginTransactions" value={formData.marginTransactions} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.securitiesTransactionsOutsideKingdom" /></label>
          <input type="text" name="securitiesTransactionsOutsideKingdom" value={formData.securitiesTransactionsOutsideKingdom} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.countriesForSecuritiesTransactions" /></label>
          <input type="text" name="countriesForSecuritiesTransactions" value={formData.countriesForSecuritiesTransactions} onChange={handleChange} />
        </div>
        <div className='individuals-single-field'>
          <label><FormattedMessage id="investmentExperience.riskAppetite" /></label>
          <select name="riskAppetite" value={formData.riskAppetite} onChange={handleChange}>
          <option value=""><FormattedMessage id="generalInformation.expectedDuration.placeholder" /></option>

            <option value="Extensive"><FormattedMessage id="investmentExperience.extensive" /></option>
            <option value="Good"><FormattedMessage id="investmentExperience.good" /></option>
            <option value="Limited"><FormattedMessage id="investmentExperience.limited" /></option>
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
      <h3><FormattedMessage id="investmentGoals.heading" /></h3>
    </AccordionSummary>
    <AccordionDetails>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.capitalProtection" /></label>
          <input type="checkbox" name="capitalProtection" checked={formData.investmentGoals.capitalProtection} onChange={handleChange2} />
        </div>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.incomeGeneration" /></label>
          <input type="checkbox" name="incomeGeneration" checked={formData.investmentGoals.incomeGeneration} onChange={handleChange2} />
        </div>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.balanced" /></label>
          <input type="checkbox" name="balanced" checked={formData.investmentGoals.balanced} onChange={handleChange2} />
        </div>
      </div>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.capitalGrowth" /></label>
          <input type="checkbox" name="capitalGrowth" checked={formData.investmentGoals.capitalGrowth} onChange={handleChange2} />
        </div>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.retirementSavings" /></label>
          <input type="checkbox" name="retirementSavings" checked={formData.investmentGoals.retirementSavings} onChange={handleChange2} />
        </div>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.projectFinancing" /></label>
          <input type="checkbox" name="projectFinancing" checked={formData.investmentGoals.projectFinancing} onChange={handleChange2} />
        </div>
      </div>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="investmentGoals.assetPurchase" /></label>
          <input type="checkbox" name="assetPurchase" checked={formData.investmentGoals.assetPurchase} onChange={handleChange2} />
        </div>
      </div>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field '>
          <label><FormattedMessage id="investmentGoals.other" /></label>
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
      <h3><FormattedMessage id="favoriteInvestmentAssets.heading" /></h3>
    </AccordionSummary>
    <AccordionDetails>
      <label><FormattedMessage id="favoriteInvestmentAssets.selectMultipleCategories" /></label>
      <div className='individuals-sec-field'>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="favoriteInvestmentAssets.saudiAssets" /></label>
          <input type="checkbox" name="saudiAssets" checked={formData.saudiAssets} onChange={handleChange} />
        </div>
        <div className='individuals-single-field checkbox'>
          <label><FormattedMessage id="favoriteInvestmentAssets.foreignCurrencyAssets" /></label>
          <input type="checkbox" name="foreignCurrencyAssets" checked={formData.foreignCurrencyAssets} onChange={handleChange} />
        </div>
      </div>
      <div className='individuals-sec-field'>
        {formData.foreignCurrencyAssets && (
          <div className='individuals-single-field'>
            <label><FormattedMessage id="favoriteInvestmentAssets.selectForeignCurrencies" /></label>
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
      <h3><FormattedMessage id="investmentPortfolioInformation.heading" /></h3>
      </AccordionSummary>
    <AccordionDetails>
    <div className='individuals-sec-field table'>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="investment portfolio table">
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage id="tableHeader.investmentTools" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="tableHeader.currentClientPortfolio" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="tableHeader.idealClientPortfolio" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  name={`clientCurrentWallet${row.id}`}
                  value={formData[`clientCurrentWallet${row.id}`]}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <input
                  type="text"
                  name={`idealportfoliofortheclient${row.id}`}
                  value={formData[`idealportfoliofortheclient${row.id}`]}
                  onChange={handleChange}
                />
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <FormattedMessage id="tableData.checkPercentageSum" />
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
</div>
</AccordionDetails>
</Accordion>
<Accordion defaultExpanded className='table-table'>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="individuals-login-field"
        className='individuals-sec-field-title'
  >
<h3>
        <FormattedMessage id="header.custodianInfo" />
      </h3>  </AccordionSummary>
  <AccordionDetails>
  <div className='individuals-sec-field'>
      <div className='individuals-single-field'>
        <label>
          <FormattedMessage id="form.accountNumber" />
        </label>
        <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} />
      </div>
      <div className='individuals-single-field'>
        <label>
          <FormattedMessage id="form.custodianName" />
        </label>
        <input name="custodianName" value={formData.custodianName} onChange={handleChange} />
      </div>
      <div className='individuals-single-field'>
        <label>
          <FormattedMessage id="form.custodianAddress" />
        </label>
        <input name="custodianAddress" value={formData.custodianAddress} onChange={handleChange} />
      </div>
    </div>
    <div className='individuals-sec-field table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="send to table">
        <TableHead>
          <TableRow>
            <TableCell>
              <FormattedMessage id="tableHeader.sendTo" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="tableHeader.client" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="tableHeader.custodian" />
            </TableCell>
            <TableCell>
              <FormattedMessage id="tableHeader.otherEntities" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.label}
              </TableCell>
              <TableCell>
                <Checkbox
                  name={`client${row.id}`}
                  checked={formData[`client${row.id}`]}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <Checkbox
                  name={`custodian${row.id}`}
                  checked={formData[`custodian${row.id}`]}
                  onChange={handleChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name={`OtherParties${row.id}`}
                  value={formData[`OtherParties${row.id}`]}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
        <h3><FormattedMessage id="accordion.sectionTitle" /></h3>
      </AccordionSummary>
      <AccordionDetails>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.q1" /></label>
            <select value={q1Answer} onChange={(e) => setQ1Answer(e.target.value)}>
            <option value=""><FormattedMessage id="question.selectOption" /></option>

              <option value="1"><FormattedMessage id="question.q1.option1" /></option>
              <option value="2"><FormattedMessage id="question.q1.option2" /></option>
              <option value="3"><FormattedMessage id="question.q1.option3" /></option>
            </select>
          </div>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.q2" /></label>
            <select value={q2Answer} onChange={(e) => setQ2Answer(e.target.value)}>
            <option value=""><FormattedMessage id="question.selectOption" /></option>

              <option value="1"><FormattedMessage id="question.q2.option1" /></option>
              <option value="2"><FormattedMessage id="question.q2.option2" /></option>
              <option value="3"><FormattedMessage id="question.q2.option3" /></option>
              <option value="4"><FormattedMessage id="question.q2.option4" /></option>
            </select>
          </div>
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.q3" /></label>
            <select value={q3Answer} onChange={handleQ3Change}>
              <option value=""><FormattedMessage id="question.selectOption" /></option>
              <option value="1"><FormattedMessage id="question.q3.option1" /></option>
              <option value="2"><FormattedMessage id="question.q3.option2" /></option>
              <option value="3"><FormattedMessage id="question.q3.option3" /></option>
              <option value="4"><FormattedMessage id="question.q3.option4" /></option>
            </select>
          </div>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.q4" /></label>
            <select value={q4Answer} onChange={handleQ4Change}>
              <option value=""><FormattedMessage id="question.selectOption" /></option>
              <option value="1"><FormattedMessage id="question.q4.option1" /></option>
              <option value="2"><FormattedMessage id="question.q4.option2" /></option>
              <option value="3"><FormattedMessage id="question.q4.option3" /></option>
              <option value="4"><FormattedMessage id="question.q4.option4" /></option>
            </select>
          </div>
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.q5" /></label>
            <select value={q5Answer} onChange={handleQ5Change}>
              <option value=""><FormattedMessage id="question.selectOption" /></option>
              <option value="1"><FormattedMessage id="question.q5.option1" /></option>
              <option value="2"><FormattedMessage id="question.q5.option2" /></option>
              <option value="3"><FormattedMessage id="question.q5.option3" /></option>
              <option value="4"><FormattedMessage id="question.q5.option4" /></option>
            </select>
          </div>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.totalPoints" /></label>
            <div className='calculateTotalPoints'><h4>{calculateTotalPoints()}</h4></div>
          </div>
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="result.lowRisk" /></label>
          </div>
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="result.mediumRisk" /></label>
          </div>
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="result.highRisk" /></label>
          </div>
        </div>
        <div className='individuals-sec-field'>
        <div className='individuals-single-field'>
            <label><FormattedMessage id="question.recommendation" /> </label>
            <label className='recommendation'>  {calculateTotalPoints() >= 1 && calculateTotalPoints() <= 6 && (
          <FormattedMessage id="lowRisk" />
        )}
        {calculateTotalPoints() >= 7 && calculateTotalPoints() <= 15 && (
          <FormattedMessage id="mediumRisk" />
        )}
        {calculateTotalPoints() > 15 && (
          <FormattedMessage id="highRisk" />
        )}</label>
          </div>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.investmentDesire" /></label>
            <input
              name="investmentDesire"
              value={formData.investmentDesire}
              onChange={handleChange}
            />
          </div>
          
        </div>
        <div className='individuals-sec-field'>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.signature" /></label>
            <input
              type="file"
              name="signature"
              accept="image/*"
              value={formData.signature}
              onChange={handleChange}
            />
          </div>
          <div className='individuals-single-field'>
            <label><FormattedMessage id="question.clientName" /></label>
            <input
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
            />
          </div>
        </div>
      </AccordionDetails>
    </Accordion>


    <button type='submit' className='individuals-buttom-form'>
        <FormattedMessage id="form.submit" />
      </button>
      <Modal isOpen={formSubmitted || formError} onRequestClose={() => {setFormSubmitted(false); setFormError(false);}}>
        {formSubmitted ? (
          <div className='Contact-successfuly'>
            <button onClick={() => {setFormSubmitted(false);}}>
              <img src='/close.svg' alt="Close" />
            </button>
            <div className='Contact-successfuly-body'> 
              <Player
                autoplay
                loop
                src={Successfully} 
                style={{ height: '200px', width: '200px' }} 
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>  
              <h4><FormattedMessage id="form.success" /></h4>
            </div>
          </div>
        ) : (
          <div className='Contact-error'>
            <button onClick={() => {setFormError(false);}}>
              <img src='/close.svg' alt="Close" />
            </button>
            <div className='Contact-error-body'>
              <Player
                autoplay
                loop
                src={Fail} 
                style={{ height: '200px', width: '200px' }} 
              >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
              </Player>  
              <h4><FormattedMessage id="form.error" /></h4>
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