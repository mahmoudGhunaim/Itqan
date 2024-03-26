import React, { useState } from 'react';
import { Link } from "gatsby";
import "./style/layout.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Header = ({ siteTitle }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <header className="navBar-sec">
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
          <Link to="/CustomerService">خدمة العملاء</Link>
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
