import { FormattedMessage } from 'react-intl';
import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Header from "./header";
import "./style/layout.css";
import Loader from "./loader";
import { LocalizationProvider } from '../context/LocalizationContext';

const Layout = ({ children, overPadding }) => {
  const [loading, setLoading] = useState(true);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); 
  }, []);
  // const intl = useIntl();

  if (loading) return <Loader />;
  return (
    <LocalizationProvider>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="footer-sec">
        <div className="footer-container">
          <div className="footer-logo">
            <Link to="../../../"><img src="/itqanlogo.svg" alt="Itqan Capital Logo"/></Link>
            <p><FormattedMessage id="footer.companyDescription" defaultMessage="Itqan Capital is an investment company based in Saudi Arabia and licensed by the Capital Market Authority." /></p>
            <p><FormattedMessage id="footer.registrationNumber" defaultMessage="Commercial Registration Number: 4030167335 dated 6/3/2007" /></p>
            <p><FormattedMessage id="footer.licenseNumber" defaultMessage="License Number: 07058-37" /></p>
            <p><FormattedMessage id="footer.contactNumber" defaultMessage="Unified Number: 8001240533" /></p>
          </div>
       
          <div className="footer-services">
            <h6><FormattedMessage id="footer.services" defaultMessage="Services" /></h6>
            <Link to="/asset-management"><FormattedMessage id="footer.assetManagement" defaultMessage="Asset Management" /></Link>
            <Link to="/Investment-banking"><FormattedMessage id="footer.investmentBanking" defaultMessage="Investment Banking" /></Link>
            <Link to="/conservation-services"><FormattedMessage id="footer.conservationServices" defaultMessage="Conservation Services" /></Link>
            <Link to="/advisory-research"><FormattedMessage id="footer.advisoryResearch" defaultMessage="Wealth Management" /></Link>
          </div>

          <div className="footer-links">
            <h6><FormattedMessage id="footer.quickLinks" defaultMessage="Quick Links" /></h6>
            <Link to="/about-us"><FormattedMessage id="footer.aboutUs" defaultMessage="Overview" /></Link>
            <Link to="/announcements"><FormattedMessage id="footer.announcements" defaultMessage="Announcements" /></Link>
            <Link to="/careers"><FormattedMessage id="footer.careers" defaultMessage="Careers" /></Link>
            <Link to="/contact-us"><FormattedMessage id="footer.contactUs" defaultMessage="Contact Us" /></Link>
          </div>

          <form>
            <h6><FormattedMessage id="footer.newsletter" defaultMessage="Newsletter" /></h6>
            <p><FormattedMessage id="footer.newsletterDescription" defaultMessage="Join us to keep you updated on all new investment tips" /></p>
            <div className="button-input">
              <input
                type="text"
                // placeholder={intl.formatMessage({ id: "footer.emailPlaceholder", defaultMessage: "Your email address" })}

                className="button-input-field"
              />
              <button className="button-input-button" type="submit">
                <FormattedMessage id="footer.subscribe" defaultMessage="Subscribe" />
              </button>
            </div>
          </form>
        </div>
      </footer>
      <footer className="copyright-sec">
        <div className="copyright">
          <p><FormattedMessage id="footer.designBy" defaultMessage="Designed and developed by" /> <Link to="https://softylus.com/">Softylus</Link> 2024.</p>
          <p><FormattedMessage id="footer.copyright" defaultMessage="Itqan Capital © 2024. All rights reserved. Created for Itqan Capital" /></p>
        </div>
      </footer>
    </LocalizationProvider>
  );
}

export default Layout;
