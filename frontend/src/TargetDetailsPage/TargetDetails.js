import styles from './TargetDetails.module.css'
import React, { useState, useEffect, useContext, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home';
import { ParentContext } from '../App/App'

const TargetDetails = () => {

  // const myFoundData = JSON.parse(localStorage.getItem('MY_FOUND_DATA')); //added
  // const myWeaponTypeData= JSON.parse(localStorage.getItem('MY_WEAPON_TYPE_DATA')); //added

  const { targetData } = useContext(ParentContext);
  const [weaponType, setWeaponType] = useState([]); //originally initialized [] uncomment if doesn't work
  const [searchInput, setSearchInput] = useState('');
  
  const navigate = useNavigate();
  
  let link = window.location.href; //window.location.href -> creates url of where you're at
  let linkArr = link.split('/');
  let linkID = linkArr.pop() || linkArr.pop();
  let found = targetData.find((e) => e.id == linkID);
  
  console.log(found)
  
  const [frontTarget, setFrontTarget] = useState(found);
  
  useEffect(() => {
    const frontTargetData = JSON.parse(window.localStorage.getItem('Target Data'));
    if (frontTargetData !== undefined) setFrontTarget(frontTargetData)
    }, [])
  useEffect(() => {
  window.localStorage.setItem('Target Data',JSON.stringify(frontTarget))
  }, [frontTarget])
  console.log('frontTarget: ' + frontTarget)
  
  //  useEffect(()=>{
  //   localStorage.setItem('MY_WEAPON_TYPE_DATA', JSON.stringify(found));
  // }, [found])


  //this useEffect is for the weaponType fetch
  useEffect(() => {

    fetch(`http://localhost:3000/weapon_type/${frontTarget.weapon_type_id}`)
      .then(
        response => response.json()
      )
      .then(data => setWeaponType(data))
  }, [weaponType]);

  

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  return (
  <div className={styles.container}>
    <main>
      {/* //////////////  HEADER  ///////////////////////////////////////// */}
      <div className={styles.header}>
        <h1>THREATS DETAILS</h1>
      </div>
      {/* //////////// TARGET DETAILS ///////////////////////////////////////////////////// */}
      <div className={styles.targetDetailContainer}>
        <div className={styles.targetName}>{`${frontTarget.name}`}</div>
        <div className={styles.targetImageContainer}>
          <img className={styles.targetImage} src={frontTarget.img_url} />
        </div>
        <div className={styles.targetDetails}>{`${frontTarget.details}`}</div>
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
    </main>
    
  </div>


  );

}

export default TargetDetails;