import styles from './TargetDetails.module.css'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home';
import { ParentContext } from '../App/App'

const TargetDetails = () => {

  const { targetData, weaponData } = useContext(ParentContext)

  //useEffect to call our api
  //we can set our state here for setThreatCard
  //once we setThreatCard then we can map through it and clickon it
  //window.location.href -> creates url of where you're at
  let link = window.location.href
  let linkArr = link.split('/')
  let linkID = linkArr.pop() || linkArr.pop();

  let found = targetData.find((e) => e.id == linkID);
  let targetType = targetData.map((e) => e.weapon_type_id)
  console.log(found)
  
  return (
    <div>
      <div className="temp"></div>
        <div className={styles.container}>
          <div className={styles.header}><h1>THREATS DETAILS</h1></div>

          <div className={styles.targetInfo}>{`${found.name}\n${found.details}\n`}</div>

          <div className={styles.footer}>footer</div>
          <div className={styles.targetInArea}>target in area </div>
          <div className={styles.weaponsGoodAgainst}>
          {
            weaponData.map((card) => {
              return (
                  <div className="weaponCard" key={`${card.id}`}>
                    <Link to={`/weaponDetails/${card.id}`}>
                      <img className="weaponCardImage" id={`${card.name}`} src={card.img} alt={`${card.name}`} />
                      <p className="weaponCardTitle">{`${card.name}`}</p>
                    </Link>
                  </div>
                )
            })
          }
          </div>
        </div>
    </div>
  );

}

export default TargetDetails;