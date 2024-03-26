import './aboutUs.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {

  return (
    <div className='aboutUs'>
            <ul>
                <Link to='/chairman' className='aboutlink'><li>Chairman</li></Link>
                <Link to='/governingcouncil' className='aboutlink'><li>Governing Council</li></Link>
                <Link to='/aboutcollege' className='aboutlink'><li>About College</li></Link>
                <Link to='/director' className='aboutlink'><li>Director</li></Link>
                <Link to='/trustees' className='aboutlink'><li>Trustees</li></Link>
                <Link to='/advisor' className='aboutlink'><li>Advisor</li></Link>
            </ul>
    </div>
  )
}

export default AboutUs