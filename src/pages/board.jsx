import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/Directors.css"
import Layout from "../components/layout";
import Seo from '../components/seo';
const Board = () => {
  return (
    <Layout>
        <Seo
        title="فريق إتقان - مجلس الإدارة - شركة إتقان كابيتال        "
        description="تعرف على أعضاء مجلس الإدارة في شركة إتقان كابيتال، بما في ذلك العضو المنتدب والرئيس التنفيذي بسام هاشم السيد، واستفد من الخبرات والتخصصات الفريدة التي يجلبها كل فرد إلى الشركة.        "/>
        <ScrollToTopButton/>
        <section className='Board-hero-sec'>
            <div className='Board-hero-container'>
            <div className='Board-hero-title'>
                <h1>فريق إتقان</h1>
                <p> “نبذة عنا”</p>
            </div>
            </div>
        </section>
        <section className='director-card-sec'>
            <h3>مجلس الإدارة</h3>
            <div className='director-card-container'>
                <div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div>
                <div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div><div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div><div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div><div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div><div className='director-card'>
                    <img src='/Abdul-Rahman-Al-Mutawa.png'/>
                    <div className='director-card-info'>
                    <h4>بسام هاشم السيد</h4>
                    <p>العضو المنتدب و الرئيس التنفيذي</p>
                    </div>
                </div>
                
            </div>
        </section>
    </Layout>
  )
}

export default Board