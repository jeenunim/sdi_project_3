import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='menu'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/weaponDetails">Weapon Details</Link></li>
      <li><Link to="/addThreat">Add Threat</Link></li>
    </ul>
  )
}

export default Header