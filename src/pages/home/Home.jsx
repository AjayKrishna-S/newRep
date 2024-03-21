import React from 'react'
import './home.css'
import LeftBar from '../../components//leftSec/LeftBar';
import Welcome from '../welcome/Welcome';
import RightBar from '../../components/rightSec/RightBar'

const Home = () => {
  return (
    <div className='home'>
          <LeftBar />
          <Welcome />
          <RightBar />
    </div>
  )
}

export default Home