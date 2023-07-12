import './WeaponDetails.css'
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

    <section className='cardsContainer'>
        <h1 id="title">Weapons</h1>
        <div className="weapons">
          {
            weaponData.map((card) => {
              return (
                  <Link className="noDec" to={`/weaponDetails/${card.id}`}>
                    <div className="card" key={`${card.id}`}>
                      <div className='cardImageContainer'>
                        <img className="cardImage" id={`${card.name}`} src={card.img} alt={`${card.name}`} />
                      </div>
                      <p className="cardTitle">{`${card.name}`}</p>
                    </div>
                  </Link>
                )
            })
          }
        </div>
    </section>
    
  );

}

export default WeaponDetails;