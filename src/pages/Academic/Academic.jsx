import './academic.css';
import { Link } from 'react-router-dom';

const Academic = () => {
  return (
    <div className='academic'>
            <Link to='/programstructure' id='ddLink'>Program Structure</Link>
            <Link to='/curriculumandelectives' id='ddLink'>Curriculum &amp; Electives</Link>
            <Link to='/curriculamandadmin' id='ddLink'>Curriculam &amp; Admin</Link>
    </div>
  )
}

export default Academic