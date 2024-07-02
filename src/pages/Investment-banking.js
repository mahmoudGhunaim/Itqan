import React from 'react'
import Hero from '../components/Hero';
import Layout from "../components/layout";
import PrivateBox from '../components/PrivateBoxCard';
import InfoPanel from '../components/InfoPanel';
import ScrollToTopButton from '../components/ScrollToTopButton';
import "../components/style/InvestmentBanking.css"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Seo from '../components/seo';
import { FormattedMessage } from 'react-intl';

const InvestmentBanking = (props) => {
    
  return (
   <Layout>
    <Seo
      title={<FormattedMessage id="investment_banking_seo_title" />}
      description={<FormattedMessage id="investment_banking_seo_description" />}
    />
    <ScrollToTopButton/>
    <Hero 
      title={<FormattedMessage id="investment_banking_hero_title" />}
    />
    <section className='investment-banking-sec'>
        <div className='investment-banking-title'>

        </div>
        <div className='investment-banking-container-card'>
        <PrivateBox
            title={<FormattedMessage id="public_offerings_title" />}
            subtitle={<FormattedMessage id="public_offerings_subtitle" />}
            hidebutton="none"
            imgSrc="/Group 167.png"
            link="/Individuals-login"
        />
        <PrivateBox
            title={<FormattedMessage id="initial_public_offerings_title" />}
            subtitle={<FormattedMessage id="initial_public_offerings_subtitle" />}
            size={<FormattedMessage id="initial_public_offerings_size" />}
            hidebutton="none"
            imgSrc="/Group 163.png"
            link="/Individuals-login"
            spaceP="25px"
        />
        </div>
        <div className='investment-banking-info-card'>
        <section className='infopanel-sec bg-infopanel-sec'>
        <div className='infopanel-container'>
            <div className='infopanel-content'>
                <h2><FormattedMessage id="direct_investment_title" /></h2>
                <p><FormattedMessage id="direct_investment_description" /></p>
                <Tabs>
    <TabList>
      <Tab><FormattedMessage id="private_direct_investment_tab" /></Tab>
      <Tab><FormattedMessage id="real_estate_tab" /></Tab>
      <Tab><FormattedMessage id="securities_tab" /></Tab>
    </TabList>

    <TabPanel>
      <h2><FormattedMessage id="private_direct_investment_content" /></h2>
    </TabPanel>
    <TabPanel>
      <h2><FormattedMessage id="real_estate_content" /></h2>
    </TabPanel>
    <TabPanel>
      <h2><FormattedMessage id="securities_content" /></h2>
    </TabPanel>
  </Tabs>
            </div>
            <div className='infopanel-image'>
                <img src="/Frame 1399.png" alt={<FormattedMessage id="infopanel_image_alt" />} />
            </div>
        </div>
    </section>
        </div>
        <div className='investment-banking-container-card'>
        <PrivateBox
            title={<FormattedMessage id="financing_arrangement_title" />}
            subtitle={<FormattedMessage id="financing_arrangement_subtitle" />}
            hidebutton="none"
            imgSrc="/Group 164.png"
            link="/Individuals-login"
        />
        <PrivateBox
            title={<FormattedMessage id="mergers_acquisitions_title" />}
            subtitle={<FormattedMessage id="mergers_acquisitions_subtitle" />}
            hidebutton="none"
            imgSrc="/Group 165.png"
            link="/Individuals-login"
        />
        </div>
    </section>
   </Layout>
  )
}

export default InvestmentBanking