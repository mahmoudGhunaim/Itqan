import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./style/distinction.css";

const Distinction = () => {
  return (
    <section className='distinguishes-sec'>
      <div className='distinguishes-container'>
        <div className='distinguishes-title'>
          <h1><FormattedMessage id="distinction_title" /></h1>
        </div>
        <div className='distinguishes-card'>
          <div className='distinguishes-single-card'>
            <img src='/heart-line.png' alt="Heart Line icon" />
            <h3><FormattedMessage id="distinction_card1_title" /></h3>
            <p><FormattedMessage id="distinction_card1_text" /></p>
          </div>
          <div className='distinguishes-single-card'>
            <img src='/checkbox-circle-line.png' alt="Checkbox Circle Line icon" />
            <h3><FormattedMessage id="distinction_card2_title" /></h3>
            <p><FormattedMessage id="distinction_card2_text" /></p>
          </div>
          <div className='distinguishes-single-card'>
            <img src='/bard-line.png' alt="Bard Line icon" />
            <h3><FormattedMessage id="distinction_card3_title" /></h3>
            <p><FormattedMessage id="distinction_card3_text" /></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Distinction;
