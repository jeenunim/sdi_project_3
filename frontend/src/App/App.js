import styles from './App.css';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header';
import Home from '../Home/home'

function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/targetDetails' element={<>you are in target details</>} />
        <Route path='/addThreatPage' element={<>you are in threat details</>} />
        <Route path='/weaponDetailsPage' element={<>you are in weapon details</>} />
      </Routes>
    </div>
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

