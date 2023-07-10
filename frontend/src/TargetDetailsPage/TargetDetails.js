import styles from './TargetDetails.module.css'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home';
import { ParentContext } from '../App/App'

const TargetDetails = () => {

  const { location, threatCard, setThreatCard } = useContext(ParentContext)

  //useEffect to call our api
  //we can set our state here for setThreatCard
  //once we setThreatCard then we can map through it and clickon it
  const tempArray = [
    {
      name: "t-54",
      img: "https://wiki.wgcdn.co/images/4/4d/AnnoR40_T-54.png",
      details: "tank"
    },
    {
      name: "something",
      img: "image.png",
      details: "something more"
    }
  ]

  //

  return (
    <div>
<div classname></div>
      <div className={styles.container}>
        <div className={styles.header}><h1>THREATS DETAILS</h1></div>
        <div className={styles.targetInfo}>target info</div>
        <div className={styles.footer}>footer</div>
        <div className={styles.targetInArea}>target in area </div>
        <div className={styles.weaponsGoodAgainst}> weapons good against</div>
      </div>
    </div>
  );

}

export default TargetDetails;