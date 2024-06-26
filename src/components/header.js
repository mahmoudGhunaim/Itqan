import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { useLocalization } from '../context/LocalizationContext';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

const Header = ({ siteTitle }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // This replaces the previous visibility state handling

  const { locale, changeLocale } = useLocalization();
  console.log("locale in header",locale)
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

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleLanguageChange = (newLocale) => {
    changeLocale(newLocale);
    setShowDropdown(false); // Close dropdown after selecting a language
  };

  const toggle = () => setModal(!modal);

  return (
    <header className={`navBar-sec ${isVisible ? 'show-header' : 'hide-header'}`} style={{ transition: 'top 0.3s' }}>
      <div className="navBar-container">
        <div className="navBar-logo">
        <Link to={`/${locale}/`}>
          <img src="/itqanlogo.svg" alt="Logo" /></Link>
        </div>
        <div className="navBar-links">
        <Link to={`/${locale}/`}>
          <FormattedMessage id="home" />
        </Link>
          <div className="dropdown">
            <Link to="#" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <FormattedMessage id="about_us" /> <img src='/arrow.png' alt="arrow" />
            </Link>
            {showDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <Link to={`/${locale}/about-us`}><FormattedMessage id="overview" /></Link>
                <Link to={`/${locale}/shariyah-review`}><FormattedMessage id="sharia_board" /></Link>
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
            )}
          </div>
          <div className="dropdown">
            <Link to="" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <FormattedMessage id="Services" /> <img src='/arrow.png' alt="Arrow" />
            </Link>
            {showDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
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
          <MDBDropdown>
            <MDBDropdownToggle>
              {/* Display the current language in the dropdown toggle */}
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
          </MDBDropdown>
        </div>
        <div className='mobile-menu'>
          <Button color="danger" onClick={toggle}>
            <img src='/menu.png' alt="Menu" />
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <div className="logo-sec-mob">
                <Link to="/"><img src="/itqanlogo.svg" alt="Logo" /></Link>
                <MDBDropdown>
                  <MDBDropdownToggle>
                    {/* Display the current language in the dropdown toggle */}
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
                </MDBDropdown>
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
              <Link to={`/${locale}/csr`}>
                <FormattedMessage id="corporate_social_responsibility" />
              </Link>
              <Link to={`/${locale}/board`}>
                <FormattedMessage id="board_of_directors" />
              </Link>
              <Link to={`/${locale}/management-team`}>
                <FormattedMessage id="management_team" />
              </Link>
                {/* Add more menu items for services, announcements, reports, etc. */}
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
