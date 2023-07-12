import styles from './TargetDetails.css'
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
    <div className="container">
      {/* //////////// TARGET DETAILS ///////////////////////////////////////////////////// */}
      <div className="targetDetailContainer">
        <div className="targetName">{`${found.name}`}</div>
        <div className="targetImageContainer">
          <img className="targetImage" src={found.img_url} />
        </div>
        <div className="targetDetails">{`${found.details}`}</div>
      </div>
      {/* /////////////TARGET IN AREA /////////////////////////////////////////// */}

      <div className="targetInArea">
        <div className="targetInAreaSearchBar">
          <form className="targetSearch" onSubmit={handleSubmit}>
            <input
              className="targetSearchButton"
              type='search'
              placeholder='Target Search'
              onChange={handleChange}
              value={searchInput}>
            </input>
            {/* <button type='sumbit'>Search</button> */}
          </form>
        </div>
        <div className="targetInAreaContainer">
          {targetData.filter(target => target.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim())).map(filteredTarget => {
            return (
              <Link className='noDec'
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/targetDetails/${filteredTarget.id}`);
                  //navigate doesn't re-render so use effect doesn't re-render so we need to put 'weaponType' in '[]' of useeffect
                  //if (e) navigate(`/weaponDetails/${filteredTarget.id}`);
                }}>

                <div className="card">
                  <div className="cardImageContainer">
                    <img
                      id={`${filteredTarget.id}`}
                      src={filteredTarget.img_url}
                      className="cardImage" />
                  </div>
                  <p className="cardTitle">{`${filteredTarget.name}`}</p>
                </div>
              </Link>
            );
          })
          }
        </div>
      </div>

      {/* //////////// WEAPONS GOOD AGAINST  ///////////////////////////////////////// */}
      <div className="weaponsGoodAgainst">
        <h1 id="title">Effective Weapons:</h1>
        {
          weaponType.map((card) => {
            return (
              <Link to={`/weaponDetails/${card.id}`} className="noDec" >
                <div className="card" key={`${card.id}`}>
                  <div className="cardImageContainer">
                    <img className="cardImage" id={`${card.name}`} src={card.img} alt={`${card.name}`} />
                  </div>
                  <p className="cardTitle">{`${card.name}`}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
      {/* /////////////// FROM TOP DIV ////////////////////////////////////////// */}
    </div>


  );

}

export default TargetDetails;