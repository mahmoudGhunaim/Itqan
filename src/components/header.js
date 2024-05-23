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
        <Link to="/"><img src="/itqanlogo.svg" alt="Logo"/></Link>
        </div>
        <div className="navBar-links">
          <Link to="/">الرئيسية</Link>
          <div className="dropdown">
          <Link to="" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            نبذة عنا
          </Link>
          {showDropdown && (
            <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              <Link to="/about-us">لمحة عامة</Link>
              <Link to="/shariyah-review">الهيئة الشرعية</Link>
              <Link to="/board-directors">الهيكل التنظيمي</Link>
              <Link to="/board">مجلس الإدارة</Link>
              <Link to="/management-team">فريق الإدارة</Link>
            </div>
          )}
</div>
          <div className="dropdown">
            <Link to="" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
              الخدمات
            </Link>
            {showDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <Link to="/asset-management">إدارة الأصول</Link>
                <Link to="/Investment-banking">المصرفية الاستثمارية</Link>
                <Link to="/conservation-services">خدمات الحفظ</Link>
                <Link to="/advisory-research">إدارة الثروات</Link>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link to="/" onMouseEnter={() => setShowCustomerServiceDropdown(true)} onMouseLeave={() => setShowCustomerServiceDropdown(false)}>
              خدمة العملاء
            </Link>
            {showCustomerServiceDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowCustomerServiceDropdown(true)} onMouseLeave={() => setShowCustomerServiceDropdown(false)}>

                <Link to="/client-awareness">توعية العملاء</Link>
              </div>
            )}
          </div>        
            <Link to="/announcements">التصريحات</Link>
            <Link to="/reports">التقارير</Link>
            
                 <Link to="/contact-us">الاتصال بنا</Link>
        </div>
        <div className="navBar-openAcc">
          <Link to="/Individuals-login"><button>فتح حساب جديد</button></Link>
        </div>
        <div className='mobile-menu'>
          <Button color="danger" onClick={toggle}>
          <Link to="/"><img src='/menu.png' alt="Menu"/></Link>
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <div className="logo-sec-mob">
                <Link to="/">          <img src="/itqanlogo.svg" alt="Logo"/></Link>
              </div>
              <div className='navBar-hamburger'>
              <Link to="/">الرئيسية</Link>
              <Link to="/about-us">لمحة عامة</Link>
              <Link to="/shariyah-review">الهيئة الشرعية</Link>
              <Link to="/board-directors">الهيكل التنظيمي</Link>
              <Link to="/csr">المسؤولية الاجتماعية للشركات (CSR)</Link>
              <Link to="/board">مجلس الإدارة</Link>
              <Link to="/management-team">فريق الإدارة</Link>

              <Link to="/asset-management">إدارة الأصول</Link>
                <Link to="/conservation-services">خدمات الحفظ</Link>
                <Link to="/Investment-banking">الخدمات المصرفية الاستثمارية</Link>
                <Link to="/advisory-research">البحوث والمشورة</Link>
                <Link to="/client-awareness">توعية العملاء</Link>
                <Link to="/announcements">التصريحات</Link>
                <Link to="/reports">التقارير</Link>
                <Link to="/research-library">مكتبة البحوث</Link>
                <Link to="/contact-us">الاتصال بنا</Link>
         
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="login-mob">
                <Link to="/Individuals-login"><button>فتح حساب جديد</button></Link>
              </div>
              </ModalFooter>
            </Modal>
    </div>
      </div>
    </header>
  );
};

export default Header;
