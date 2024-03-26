import './academic.css';
import { Link } from 'react-router-dom';

const Academic = () => {
  return (
    <div className='academic'>
        <ul>
          <li><Link to='/programstructure' id='academicLink'>Program Structure</Link></li>
          <li><Link to='/curriculumandelectives' id='academicLink'>Curriculum &amp; Electives</Link></li>
          <li><Link to='/curriculamandadmin' id='academicLink'>Curriculam &amp; Admin</Link></li>
        </ul>
    </div>
  )
}

export default Academic