import './curriculamAndElectives.css';
import Academic from '../Academic/Academic.jsx';

const CurriculamAndElectives = () => {
  return (
    <div className='container'>
      <div className="leftContainer">
        <Academic />
      </div>
      <div className="curriculamAndElectives">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores doloribus iusto quibusdam inventore omnis exercitationem, perspiciatis facilis deleniti officiis dicta, molestias, quaerat voluptate? Necessitatibus corrupti mollitia maiores delectus iusto?</p>
      </div>
    </div>
  )
}

export default CurriculamAndElectives