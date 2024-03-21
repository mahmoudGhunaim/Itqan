import * as React from "react";
import { Link } from "gatsby";
import "./style/layout.css";

const Header = ({ siteTitle }) => {
  const [showDropdown, setShowDropdown] = React.useState();

  return (
    <header className="navBar-sec">
      <div className="navBar-container">
        <div className="navBar-logo">
          <img src="/itqanlogo.svg" alt="Logo"/>
        </div>
        <div className="navBar-links">
          <Link to={`../../../`}>الرئيسية</Link>
          <Link to="/AboutUS">نبذة عنا</Link>
          <div className="dropdown">
            <Link to="/AboutUS" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown()}>
              الخدمات
            </Link>
            {showDropdown && (
              <div className="dropdown-content" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown()}>
                <Link to="/AssetManagement">إدارة الأصول</Link>
                <Link to="/ConservationServices">خدمات الحفظ</Link>
                <Link to="/InvestmentBanking">الخدمات المصرفية الاستثمارية</Link>
                <Link to="/AdvisoryResearch">البحوث والمشورة</Link>
              </div>
            )}
          </div>
          <Link to="/AboutUS">خدمة العملاء</Link>
          <Link to="/AboutUS">التصريحات</Link>
          <Link to="/AboutUS">المصادر</Link>
          <Link to="/ContactUs">الاتصال بنا</Link>
        </div>
        <div className="navBar-openAcc">
          <Link to="/AboutUs"><button>فتح حساب جديد</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
