import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {


  return (
    <div className='nav'>
        <ul className='navWrapper'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li >
              <Link to='/'>About Us</Link>
              
              <div className='dropdown' >
                <Link to='/chairman' id='ddLink'>Chairman</Link>
                <Link to='/governingcouncil' id='ddLink'>Governing Council</Link>
                <Link to='/aboutcollege' id='ddLink'>About College</Link>
                <Link to='/director' id='ddLink'>Director</Link>
                <Link to='/trustees' id='ddLink'>Trustees</Link>
                <Link to='/aboutus' id='ddLink'>Advisor</Link>
              </div>
            </li>

            <li >
              <Link to='/'>Academic</Link>
              <div className='dropdown'>
              <Link to='/programstructure' id='ddLink'>Program Structure</Link>
              <Link to='/curriculumandelectives' id='ddLink'>Curriculum &amp; Electives</Link>
              <Link to='/curriculamandadmin' id='ddLink'>Curriculam &amp; Admin</Link>
              </div>
              
            </li>

            <li>
              <Link to='/guestlectures'>Guest Lectures</Link>
            </li>

            <li>
              <Link to='/admission'>Admission</Link>
            </li>

            <li>
              <Link to='/facilities'>Facilities</Link>
            </li>

            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li >
              <Link to='/hasbinmedia'>HASB in Media</Link>

            </li>
            <li >
              <Link to='/contactus'>Contact us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav