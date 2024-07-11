import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { useLocalization } from '../context/LocalizationContext';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

const Header = ({ siteTitle }) => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const { locale, changeLocale } = useLocalization();
  const aboutDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (lastScrollTop < currentScrollPos && currentScrollPos > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = currentScrollPos;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)) {
      setShowAboutDropdown(false);
    }
    if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
      setShowServicesDropdown(false);
    }
  };

  const toggleModal = () => setModal(!modal);

  const toggleAboutDropdown = () => setShowAboutDropdown(!showAboutDropdown);
  const toggleServicesDropdown = () => setShowServicesDropdown(!showServicesDropdown);

  const handleLanguageChange = (newLocale) => {
    changeLocale(newLocale);
    setShowAboutDropdown(false);
    setShowServicesDropdown(false);
  };

  return (
    <header className={`navBar-sec ${isVisible ? 'show-header' : 'hide-header'}`} style={{ transition: 'top 0.3s' }}>
      <div className="navBar-container">
        <div className="navBar-logo">
          <Link to={`/${locale}/`}>
            <img src="/itqanlogo.svg" alt="Logo" />
          </Link>
         
        </div>
        <div className="navBar-links">
          <Link to={`/${locale}/`}>
            <FormattedMessage id="home" />
          </Link>
          <div className="dropdown" ref={aboutDropdownRef}>
            <Link to="#" onClick={toggleAboutDropdown}>
              <FormattedMessage id="about_us" /> <img src='/arrow.png' alt="arrow" />
            </Link>
            {showAboutDropdown && (
              <div className="dropdown-content">
                <Link to={`/${locale}/about-us`}><FormattedMessage id="overview" /></Link>
                <Link to={`/${locale}/shariyah-review`}><FormattedMessage id="sharia_board" /></Link>
                <Link to={`/${locale}/board-directors`}><FormattedMessage id="organizational_structure" /></Link>
                <Link to={`/${locale}/board`}><FormattedMessage id="board_of_directors" /></Link>
                <Link to={`/${locale}/management-team`}><FormattedMessage id="management_team" /></Link>
              </div>
            )}
          </div>
          <div className="dropdown" ref={servicesDropdownRef}>
            <Link to="#" onClick={toggleServicesDropdown}>
              <FormattedMessage id="Services" /> <img src='/arrow.png' alt="Arrow" />
            </Link>
            {showServicesDropdown && (
              <div className="dropdown-content">
                <Link to={`/${locale}/asset-management`}>
                  <FormattedMessage id="asset_management" />
                </Link>
                <Link to={`/${locale}/Investment-banking`}>
                  <FormattedMessage id="investment_banking" />
                </Link>
                <Link to={`/${locale}/conservation-services`}>
                  <FormattedMessage id="conservation_services" />
                </Link>
                <Link to={`/${locale}/advisory-research`}>
                  <FormattedMessage id="advisory_research" />
                </Link>
              </div>
            )}
          </div>
          <Link to={`/${locale}/announcements`}>
            <FormattedMessage id="announcements" />
          </Link>
          <Link to={`/${locale}/reports`}>
            <FormattedMessage id="reports" />
          </Link>
          <Link to={`/${locale}/client-awareness`}>
            <FormattedMessage id="client_awareness" />
          </Link>
          <Link to={`/${locale}/contact-us`}>
            <FormattedMessage id="contact_us" />
          </Link>
        </div>
        <div className="navBar-openAcc">
          <Link to={`/${locale}/Individuals-login`}><button><FormattedMessage id="open_new_account" /></button></Link>
          <div className=''>
          <button onClick={() => handleLanguageChange('en')} className={`lang-btn ${locale === 'en' ? 'active' : ''}`} style={{ display: locale === 'en' ? 'none' : '' }}>
                        <img src='/Vector (111).svg' alt='EN' /> EN
                      </button>
                      <button onClick={() => handleLanguageChange('ar')} className={`lang-btn ${locale === 'ar' ? 'active' : ''}`} style={{ display: locale === 'ar' ? 'none' : '' }}>
                        <img src='/Vector (111).svg' alt='AR' /> AR
                      </button>
          </div>
          {/* <MDBDropdown>
                  <MDBDropdownToggle>
                    <img src='/Vector (111).svg' alt='EN' />{locale === 'ar' ? 'AR' : 'EN'}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem style={{ display: locale === 'en' ? 'none' : '' }}>
                      <button onClick={() => handleLanguageChange('en')} className={`lang-btn ${locale === 'en' ? 'active' : ''}`}>
                        <img src='/Vector (111).svg' alt='EN' /> EN
                      </button>
                    </MDBDropdownItem>
                    <MDBDropdownItem style={{ display: locale === 'ar' ? 'none' : '' }}>
                      <button onClick={() => handleLanguageChange('ar')} className={`lang-btn ${locale === 'ar' ? 'active' : ''}`}>
                        <img src='/Vector (111).svg' alt='AR' /> AR
                      </button>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown> */}
        </div>
        <div className='mobile-menu'>
        <div className=''>
          <button onClick={() => handleLanguageChange('en')} className={`lang-btn ${locale === 'en' ? 'active' : ''}`} style={{ display: locale === 'en' ? 'none' : '' }}>
                        <img src='/Vector (111).svg' alt='EN' /> EN
                      </button>
                      <button onClick={() => handleLanguageChange('ar')} className={`lang-btn ${locale === 'ar' ? 'active' : ''}`} style={{ display: locale === 'ar' ? 'none' : '' }}>
                        <img src='/Vector (111).svg' alt='AR' /> AR
                      </button>
          </div>
          <Button color="danger" onClick={toggleModal}>
            <img src='/menu.png' alt="Menu" />
          </Button>
         
          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}></ModalHeader>
            <ModalBody>
              <div className="logo-sec-mob">
                <Link to="/"><img src="/itqanlogo.svg" alt="Logo" /></Link>
                {/* <MDBDropdown>
                  <MDBDropdownToggle>
                    <img src='/Vector (111).svg' alt='EN' />{locale === 'ar' ? 'AR' : 'EN'}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem style={{ display: locale === 'en' ? 'none' : '' }}>
                      <button onClick={() => handleLanguageChange('en')} className={`lang-btn ${locale === 'en' ? 'active' : ''}`}>
                        <img src='/Vector (111).svg' alt='EN' /> EN
                      </button>
                    </MDBDropdownItem>
                    <MDBDropdownItem style={{ display: locale === 'ar' ? 'none' : '' }}>
                      <button onClick={() => handleLanguageChange('ar')} className={`lang-btn ${locale === 'ar' ? 'active' : ''}`}>
                        <img src='/Vector (111).svg' alt='AR' /> AR
                      </button>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown> */}
              </div>
              <div className='navBar-hamburger'>
                <Link to={`/${locale}/`}>
                  <FormattedMessage id="home" />
                </Link>
                <Link to={`/${locale}/about-us`}>
                  <FormattedMessage id="overview" />
                </Link>
                <Link to={`/${locale}/shariyah-review`}>
                  <FormattedMessage id="sharia_board" />
                </Link>
                <Link to={`/${locale}/board-directors`}>
                  <FormattedMessage id="organizational_structure" />
                </Link>
                <Link to={`/${locale}/board`}>
                  <FormattedMessage id="board_of_directors" />
                </Link>
                <Link to={`/${locale}/management-team`}>
                  <FormattedMessage id="management_team" />
                </Link>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="login-mob">
                <Link to={`/${locale}/Individuals-login`}>
                  <button>
                    <FormattedMessage id="open_new_account" />
                  </button>
                </Link>
              </div>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </header>
  );
};

export default Header;
