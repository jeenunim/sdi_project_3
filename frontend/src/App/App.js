import styles from './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home'
import TargetDetails from '../TargetDetailsPage/TargetDetails'
import WeaponDetails from '../Weapon Details Page/WeaponDetails';
import WeaponPage from '../Weapon Details Page/WeaponPage';

export const ParentContext = createContext();

function App() {

  const [targetData, setTargetData] = useState([]);
  const [weaponData, setWeaponData] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:3000/target')
      .then(
        response => response.json()
      )
      .then(data => setTargetData(data))
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/weapon')
      .then(
        response => response.json()
      )
      .then(data => setWeaponData(data))
  }, []);

  return (
    <ParentContext.Provider value={{ targetData, setTargetData, weaponData, setWeaponData }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/targetDetails/:id' element={<TargetDetails />} />
          <Route path='/addThreatPage' element={<>you are in threat details</>} />
          <Route path='/weaponDetails' element={<WeaponDetails />} />
          <Route path='/weaponDetails/:id' element={<WeaponPage />} />
        </Routes>
      </div>
    </ParentContext.Provider>
  );
}

export default App;

//END GOAL: We want to be able to click our way through the entire app
//We make that hapen by creating pages
// - /
// - /targetDetailsPage
// - /addThreaPage
// - /weaponDetailsPage

//const myButton = document.getElementById('myButton');
//myButton.addEventListener('click', function() {
//   alert('Button clicked!');
// });

//after button click follow route to next page ????

