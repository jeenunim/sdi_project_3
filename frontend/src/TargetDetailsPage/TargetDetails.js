import styles from './TargetDetails.module.css'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home';
import { ParentContext } from '../App/App'

const TargetDetails = () => {


  const { targetData, weaponData } = useContext(ParentContext);
  const [weaponType, setWeaponType] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const navigate = useNavigate();
  console.log('SEARCH INPUT ', searchInput);

  //useEffect to call our api
  //we can set our state here for setThreatCard
  //once we setThreatCard then we can map through it and clickon it
  //window.location.href -> creates url of where you're at
  let link = window.location.href
  let linkArr = link.split('/')
  let linkID = linkArr.pop() || linkArr.pop();

  let found = targetData.find((e) => e.id == linkID);

  useEffect(() => {

    fetch(`http://localhost:3000/weapon_type/${found.weapon_type_id}`)
      .then(
        response => response.json()
      )
      .then(data => setWeaponType(data))
  }, [weaponType]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  //};

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }


  // const targetsInArea = targetData.filter(target => target?.name?.toLowerCase().trim().includes(searchInput.toLowerCase().trim()))?.map(filteredTarget => {
  //   return filteredTarget
  // })

  // console.log('TESTTESTESTESTTEST', targetsInArea)

  //target.includes(searchInput))
  //.map(filteredName => (
  //   console.log(filteredName)
  // ))}

  return (
    <div className={styles.container}>
      {/* //////////////  HEADER  ///////////////////////////////////////// */}
      <div className={styles.header}>
        <h1>THREATS DETAILS</h1>
      </div>
      {/* //////////// TARGET DETAILS ///////////////////////////////////////////////////// */}
      <div className={styles.targetDetailContainer}>
        <div className={styles.targetName}>{`${found.name}`}</div>
        <div className={styles.targetImageContainer}>
          <img className={styles.targetImage} src={found.img_url} />
        </div>
        <div className={styles.targetDetails}>{`${found.details}`}</div>
      </div>
      {/* /////////////TARGET IN AREA /////////////////////////////////////////// */}

      <div className={styles.targetInArea}>
        <div className={styles.targetInAreaSearchBar}>
          <form className={styles.targetSearch} onSubmit={handleSubmit}>
            <input
              className={styles.targetSearchButton}
              type='search'
              placeholder='Target Search'
              onChange={handleChange}
              value={searchInput}>
            </input>
            {/* <button type='sumbit'>Search</button> */}
          </form>
        </div>
        <div className={styles.targetInAreaContainer}>
          {targetData.filter(target => target.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim())).map(filteredTarget => {
            return (
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/targetDetails/${filteredTarget.id}`);
                  //navigate doesn't re-render so use effect doesn't re-render so we need to put 'weaponType' in '[]' of useeffect
                  //if (e) navigate(`/weaponDetails/${filteredTarget.id}`);
                }}>

                <div className={styles.targetInAreaCard}>
                  <div className={styles.targetInAreaCardImageContainer}>
                    <img
                      id={`${filteredTarget.id}`}
                      src={filteredTarget.img_url}
                      className={styles.weaponCardImage} />
                  </div>
                </div>
              </Link>
            );
          })
          }
        </div>
      </div>

      {/* //////////// WEAPONS GOOD AGAINST  ///////////////////////////////////////// */}
      <div className={styles.weaponsGoodAgainst}>
        {
          weaponType.map((card) => {
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
      {/* /////////////// FROM TOP DIV ////////////////////////////////////////// */}
    </div>


  );

}

export default TargetDetails;