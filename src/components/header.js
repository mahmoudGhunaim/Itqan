import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import "./style/layout.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [modal, setModal] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showCustomerServiceDropdown, setShowCustomerServiceDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // This replaces the previous visibility state handling

  const toggle = () => setModal(!modal);

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

  return (
    <header className={`navBar-sec ${isVisible ? 'show-header' : 'hide-header'}`} style={{transition: 'top 0.3s'}}>    
      <div className="navBar-container">
        <div className="navBar-logo">
          <img src="/itqanlogo.svg" alt="Logo"/>
        </div>
        <div className="navBar-links">
          <Link to="/">الرئيسية</Link>
          <div className="dropdown">
          <Link to="" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            نبذة عنا
          </Link>
          {showDropdown && (
            <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <Link to="/AboutUS">لمحة عامة</Link>
              <Link to="/ShariyahReview">الهيئة الشرعية</Link>
              <Link to="/BoardDirectors">الهيكل التنظيمي</Link>
              <Link to="/CSR">المسؤولية الاجتماعية للشركات (CSR)</Link>
            </div>
          )}
</div>
          <div className="dropdown">
            <Link to="" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              الخدمات
            </Link>
            {showDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <Link to="/AssetManagement">إدارة الأصول</Link>
                <Link to="/ConservationServices">خدمات الحفظ</Link>
                <Link to="/InvestmentBanking">الخدمات المصرفية الاستثمارية</Link>
                <Link to="/AdvisoryResearch">البحوث والمشورة</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="/CustomerService" onMouseEnter={() => setShowCustomerServiceDropdown(true)} onMouseLeave={() => setShowCustomerServiceDropdown(false)}>
              خدمة العملاء
            </Link>
            {showCustomerServiceDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowCustomerServiceDropdown(true)} onMouseLeave={() => setShowCustomerServiceDropdown(false)}>
                <Link to="/FAQ">الأسئلة الشائعة</Link>
                <Link to="/ClientAwareness">توعية العملاء</Link>
              </div>
            )}
          </div>        
            <Link to="/Announcements">التصريحات</Link>
          <div className="dropdown">
            <Link to="" onMouseEnter={() => setShowResourcesDropdown(true)} onMouseLeave={() => setShowResourcesDropdown(false)}>
              المصادر
            </Link>
            {showResourcesDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowResourcesDropdown(true)} onMouseLeave={() => setShowResourcesDropdown(false)}>
                <Link to="/Reports">التقارير</Link>
                <Link to="/ResearchLibrary">مكتبة البحوث</Link>
              </div>
            )}
          </div>          <Link to="/ContactUs">الاتصال بنا</Link>
        </div>
        <div className="navBar-openAcc">
          <Link to="/OpenAccount"><button>فتح حساب جديد</button></Link>
        </div>
        <div className='mobile-menu'>
          <Button color="danger" onClick={toggle}>
            <img src='/menu.png' alt="Menu"/>
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <div className="logo-sec-mob">
                <Link to="/">          <img src="/itqanlogo.svg" alt="Logo"/></Link>
              </div>
              <div className='navBar-hamburger'>
              <Link to="/">الرئيسية</Link>
          <Link to="/AboutUS">نبذة عنا</Link>
            <Link to="/AssetManagement">إدارة الأصول</Link>
                <Link to="/ConservationServices">خدمات الحفظ</Link>
                <Link to="/InvestmentBanking">الخدمات المصرفية الاستثمارية</Link>
                <Link to="/AdvisoryResearch">البحوث والمشورة</Link>
              <Link to="/CustomerService">خدمة العملاء</Link>
          <Link to="/Statements">التصريحات</Link>
          <Link to="/Resources">المصادر</Link>
          <Link to="/ContactUs">الاتصال بنا</Link>
         
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="login-mob">
                <Link to="/OpenAccount"><button>فتح حساب جديد</button></Link>
              </div>
              </ModalFooter>
            </Modal>
    </div>
      </div>
    </header>
  );
};

export default Header;
