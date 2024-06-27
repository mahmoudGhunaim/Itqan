import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./style/ItqanC.css";

const ItqanC = () => {
  return (
    <section className='itqan-c-section'>
      <div className='itqan-c-container'>
         {/* <div className='itqan-c-image'>
                <img src='/a2 1.png'/>
            </div> */}
        <div className='itqan-c-content'>
          <h2><FormattedMessage id="itqan_title" /></h2>
          <div className='itqan-c-line'></div>
          <p><FormattedMessage id="itqan_intro" /></p>
          <div className='itqan-c-text'>
            <h6><img src='/Viewpoint.png' alt="Viewpoint icon" /><FormattedMessage id="itqan_vision_title" /></h6>
            <p><FormattedMessage id="itqan_vision_text" /></p>
          </div>
          <div className='itqan-c-text'>
            <h6><img src='/SpeechStand.png' alt="SpeechStand icon" /><FormattedMessage id="itqan_mission_title" /></h6>
            <p><FormattedMessage id="itqan_mission_text" /></p>
          </div>
          <div className='itqan-c-text'>
            <h6><img src='/UnityGroup.png' alt="UnityGroup icon" /><FormattedMessage id="itqan_culture_title" /></h6>
            <p><FormattedMessage id="itqan_culture_text_1" /></p>
            <p><FormattedMessage id="itqan_culture_text_2" /><img src='/carbon_condition-wait-point.png' alt="Carbon Condition Wait Point icon" /></p>
            <p><FormattedMessage id="itqan_culture_text_3" /><img src='/carbon_condition-wait-point.png' alt="Carbon Condition Wait Point icon" /></p>
            <p><FormattedMessage id="itqan_culture_text_4" /><img src='/carbon_condition-wait-point.png' alt="Carbon Condition Wait Point icon" /></p>
            <p><FormattedMessage id="itqan_culture_text_5" /><img src='/carbon_condition-wait-point.png' alt="Carbon Condition Wait Point icon" /></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItqanC;