import React from 'react';
import arq from '../../assets/images/arq1.gif';

const Marquee = () => {
  return (
    <div id="splash">
      <marquee className="marquee1" scrollamount="3" direction="left" style={{ color: '#FF6600' }}>
        <img src={arq} alt="Admission Going On" /> Admission Going On 2022-2023 &nbsp;&nbsp;&nbsp;&nbsp; <img src={arq} alt="Anna University Counseling Code" /> Anna University Counseling Code 697
      </marquee>
    </div>
  );
}

export default Marquee;