


import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "./header"
import "./style/layout.css"

const Layout = ({ children, overPadding,  }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="footer-sec">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="/itqanlogo.svg"/>
            <p>“إتقان كابيتال” هي شركة استثمارية تتخذ من المملكة العربية السعودية مقراً لها وتعمل بترخيص من هيئة السوق المالية.</p>
            <p>رقم السجل التجاري 4030167335 بتاريخ 6/3/2007</p>
            <p>رقم الرخصة 07058-37</p>
            <p>الرقم الموحد 8001240533</p>
          </div>
       
          <div className="footer-services">
          <h6>الخدمات</h6>
            <Link to={`../../../`} >إدارة الأصول </Link>
            <Link to={``} > الخدمات المصرفية الاستثمارية</Link>
            <Link to={``} >خدمات الحفظ</Link>
            <Link to={``} >البحوث والمشورة</Link>
          </div>
          <div className="footer-links">
            <h6>روابط سريعة</h6>
            <Link to={`../../../`} >لمحة عامة</Link>
            <Link to={``} >التصريحات</Link>
            <Link to={``} >الوظائف</Link>
            <Link to={``} >الاتصال بنا</Link>
          </div>
          <form>
            <h6>النشرة البريدية</h6>
            <p>انضم إلينا لاطلاعك على جميع نصائح الاستثمار الجديدة</p>
            <div className="button-input">
              <input
                type="text"
                placeholder=" البريد الإلكتروني الخاص بك"
                onChange=""
                className="button-input-field"
              />
              <button  className="button-input-button" type="submit">
              إدخال
              </button>
            </div>
          </form>
        </div>
      </footer>
      <footer className="copyright-sec">
      <div className="copyright">
              <p>تصميم وتطوير بواسطة <Link to="">Softylus</Link> 2024.</p>
              <p>إتقان كابيتال © 2024. جميع الحقوق محفوظة. Created For Itqan Capital</p>
          </div>
      </footer>
    </>
  )
}

export default Layout
