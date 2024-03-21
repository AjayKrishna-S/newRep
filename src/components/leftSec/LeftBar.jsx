import React from 'react';
import './leftBar.css';
import app from '../../assets/docs/application.pdf';
import app1 from '../../assets/docs/holyright.pdf';
import appd from '../../assets/images/applicationdownload.jpg';
import affilright from '../../assets/images/affilright.jpg';
import newsimg from '../../assets/images/new.gif';
import arq from '../../assets/images/arq1.gif';

const LeftBar = () => {
  return (
    <div id="sidebar" className="sidebar">
      <h2 className="title">News and Events</h2>
      <div>
        <marquee className="marquee"  direction="up" loop="true" scrollamount="2" scrolldelay="10">
          <ul>
            <li className="NLink"><a href="#" target="_blank">First year Admission is going on for 2023-2024</a></li>
            <li className="NLink"><a href="../appl/TALENTIA 2017.pdf" target="_blank">TALENTIA 2017</a></li>
          </ul>
        </marquee>
      </div>

      <p className="more"><a href="newsandevents.html">More</a></p>

      <h2 className="title" >Forth Coming Events</h2>
      <div>
        <marquee className="marquee"  direction="up" loop="true" scrollamount="2" scrolldelay="10">
          <ul>
            <p className="new"><img src={newsimg} alt="" width="39" height="39" /></p>
            <li className="NLink"><img src={arq} alt="" /> Anna University Counseling Code 697</li>
            <li className="NLink"><img src={arq} alt="" />First year Admission is going on for 2023-2024</li>
          </ul>
        </marquee>
      </div>

      <p className="more"><a href="newsandevents.html">More</a></p>

      <a href={app} target="_blank">
        <img src={appd} alt="" className="image" />
      </a>

      <a href={app1} target="_blank">
        <img src={affilright} alt="" className="image" />
      </a>

      <div className="clear"></div>
    </div>
  );
}

export default LeftBar;