import React from 'react'
import ScrollToTopButton from '../components/ScrollToTopButton';
import Hero from '../components/Hero';
import "../components/style/Directors.css"
import Layout from "../components/layout";
const Board = () => {
  return (
    <Layout>
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