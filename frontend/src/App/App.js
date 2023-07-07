import styles from './App.css';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from '../Navigation/Header'
import Home from '../Home/home'

function App() {



  return (
      <div className="App">
        <div>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/targetDetails' element={<>you are in target details</>} />
            <Route path='/addThreatPage' element={<>you are in threat details</>} />
            <Route path='/weaponDetailsPage' element={<>you are in weapon details</>} />
          </Routes>
        </div>
        <div>

          <header>
          <Header />
            <h1>Our App</h1>
          </header>

                          <main>
                            <section className="cards">
                              <div className="card">
                                <img src="card1.jpg" alt="Card 1" />
                                <h2>Card 1</h2>
                                <p>Threats</p>
                                <Link to="/weaponDetailsPage">Read More</Link>
                              </div>

                              <div className="card">
                                <img src="card2.jpg" alt="Card 2" />
                                <h2>Card 2</h2>
                                <p>Weapons</p>
                                <Link to="/addThreatPage">Read More</Link>
                              </div>

                              <div className="card">
                                <img src="card3.jpg" alt="Card 3" />
                                <h2>Card 3</h2>
                                <p>Details</p>
                                <Link to="/targetDetailsPage">Read More</Link>
                              </div>
                            </section>
                          </main>
                          </div>
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

