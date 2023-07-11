import styles from './WeaponDetails.css'
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ParentContext } from '../App/App'

const WeaponDetails = () => {

  const { weaponData } = useContext(ParentContext)

  // useEffect to call our api
  // we can set our state here for setThreatCard
  // once we setThreatCard then we can map through it and clickon it
  // window.location.href -> creates url of where you're at
  
  return (

    <div className='weapons'>
          <h1>Weapons</h1>
          {
            weaponData.map((card) => {
              return (
                  <div className={styles.weaponCard} key={`${card.id}`}>
                    <Link to={`/weaponDetails/${card.id}`}>
                      <img className={styles.weaponCardImage} id={`${card.name}`} src={card.img} alt={`${card.name}`} />
                      <p className={styles.weaponCardTitle}>{`${card.name}`}</p>
                    </Link>
                  </div>
                )
            })
          }
        </div>
    
  );

}

export default WeaponDetails;