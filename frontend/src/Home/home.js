import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css'
import { ParentContext } from '../App/App.js'
import navMenu from '../Navigation/Header.css'


const Home = () => {

  const { targetData } = useContext(ParentContext)


  return (
    <main>
      <section className="cardsContainer">
      <section className="cardsContainer">
        <h1 id="title">Targets</h1>
        <div className="targets">
        <div className="targets">
          {
            targetData.map((card) => {
              return (
                  <Link className="noDec" to={`/targetDetails/${card.id}`}>
                    <div className="card" key={`${card.id}`}>
                      <div className="cardImageContainer">
                        <img className="cardImage" id={`${card.name}`} src={card.img_url} alt={`${card.name}`} />
                      </div>
                      <p className="cardTitle">{`${card.name}`}</p>
                    </div>
                  </Link>
                )
            })
          }
        </div>

        
          
      </section>
    </main>
  );
}

export default Home;