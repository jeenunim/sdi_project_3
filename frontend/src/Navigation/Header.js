import { Link } from 'react-router-dom';



const Header = () => {

  return (
    <div>
      <ul>
        <li><Link to='/'> you're home </Link></li>
        <li><Link to='/targetDetails'> Target Details</Link></li>
        <li><Link to='/addThreatPage'> Threat Details</Link></li>
        <li><Link to='/weaponDetailsPage'> Weapon Details</Link></li>
      </ul>
    </div>
  )
}

export default Header;