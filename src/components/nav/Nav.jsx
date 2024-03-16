import React, { useEffect, useState } from 'react';
import './nav.css'

  

const Nav = () => {


  return (
    <div className='nav'>
        <ul className='navWrapper'>
            <li>
                <a href="index.html">Home</a>
            </li>

            <li >
              <a href="#">About Us</a>

              <div className='dropdown' >
                <a href="#">Chairman</a>
                <a href="#">Governing Council</a>
                <a href="#">About College</a>
                <a href="#">Director</a>
                <a href="#">Trustees</a>
                <a href="#">Advisor</a>
              </div>
            </li>

            <li >
              <a href="#">Academic</a>

              <div className='dropdown'>
                <a href="program.html">Program Structure</a>
                <a href="#">Curriculum &amp; Electives</a>
                <a href="Curriculumadministration.html">Curriculam &amp; Admin.</a>
              </div>
              
            </li>

            <li>
              <a href="Guest.html">Guest Lectures</a>

              <div className='dropdown' >
                <a href="#">Chairman</a>
                <a href="#">Governing Council</a>
                <a href="#">About College</a>
                <a href="#">Director</a>
                <a href="#">Trustees</a>
                <a href="#">Advisor</a>
              </div>

            </li>

            <li>
              <a href="admission.html">Admission</a>

              <div className='dropdown' >
                <a href="#">Chairman</a>
                <a href="#">Governing Council</a>
                <a href="#">About College About College</a>
                <a href="#">Director About College</a>
                <a href="#">Trustees About College</a>
                <a href="#">Advisor</a>
              </div>

            </li>

            <li>
              <a href="#">Facilities</a>

              <div className="dropdown"></div>
            </li>

            <li>
              <a href="#">Gallery</a>
              <div className="dropdown"></div>
            </li>
            <li >
              <a href="#">HASB in Media</a>

              <div className="dropdown"></div>

            </li>
            <li >
              <a href="#">Contact us</a>

              <div className="dropdown"></div>

            </li>
        </ul>
    </div>
  )
}

export default Nav