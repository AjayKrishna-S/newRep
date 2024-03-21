import React from 'react';
import './rightBar.css';
import img10 from '../../assets/images/img10.gif';
import mand from '../../assets/images/mandetory_discloser.jpg';
import anti from '../../assets/images/anti_ragging.jpg';
import aicte from '../../assets/images/aicte.jpg';
import grc from '../../assets/images/grc.jpg';
import md from '../../assets/docs/Md.pdf';
import affil from '../../assets/docs/affilation.pdf';
import antiragging from '../../assets/docs/anti ragging.pdf';

const RightBar = () => {
  return (
    <div className='RightBar'>
      <h1 className='title'>Virtual tour</h1>
      <div className='image-container'>
        <img src={img10} alt="Virtual tour" />
      </div>
      <div className="links-container">
        <iframe
          title="YouTube Video"
          width="240"
          height="182"
          src="http://www.youtube.com/embed/1dBA/YOE7al" 
          frameBorder="0"
          allowFullScreen
          style={{ width: '240px', height: '182px', border: 'none' }}
        ></iframe>
        <a href={md} target="_blank">
          <img src={mand} alt="Mandatory Disclosure" />
        </a>
        <a href={antiragging} target="_blank">
          <img src={anti} alt="Anti Ragging" />
        </a>
        <a href={affil} target="_blank">
          <img src={aicte} alt="AICTE" />
        </a>
        <a href={affil} target="_blank">
          <img src={grc} alt="GRC" />
        </a>
      </div>
    </div>
  );
};

export default RightBar;
