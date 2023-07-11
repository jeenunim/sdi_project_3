import styles from './WeaponDetails.css';
import React, { useContext } from 'react';
import { ParentContext } from '../App/App';

const WeaponPage = () => {

  const { weaponData } = useContext(ParentContext)

  //useEffect to call our api
  //we can set our state here for setThreatCard
  //once we setThreatCard then we can map through it and clickon it
  //window.location.href -> creates url of where you're at
  let link = window.location.href
  let linkArr = link.split('/')
  let linkID = linkArr.pop() || linkArr.pop();
  let weapon= weaponData.find((e) => e.id == linkID);
  console.log(weapon)


    return (
        <div>
      <div className="temp"></div>
        <div className="weaponDetails">
          <div className="weaponHeader"><h1>WEAPON DETAILS</h1></div>
          <img className="cardImage" id={`${weapon.name}`} src={weapon.img} alt={`${weapon.name}`} />
        
          <div className='weaponText'>{`${weapon.name}:${'\n'}${weapon.details}\n`}</div>
        </div>
    </div>
    )

}

export default WeaponPage;