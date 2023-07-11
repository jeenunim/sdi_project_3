import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './homeModule.css'
import { ParentContext } from '../App/App.js'
import navMenu from '../Navigation/Header.css'


const Home = () => {

  const { targetData } = useContext(ParentContext)

  return (
    <main>
      <section className="cardsContainer">
        <h1 id="title">Targets</h1>
        <div className='targets'>
          {
            targetData.map((card) => {
              return (
                  <div className="card" key={`${card.id}`}>
                    <Link to={`/targetDetails/${card.id}`}>
                      <img className="cardImage" id={`${card.name}`} src={card.img_url} alt={`${card.name}`} />
                      <p className="cardTitle">{`${card.name}`}</p>
                    </Link>
                  </div>
                )
            })
          }
        </div>

        
          
      </section>
    </main>
  );
}

export default Home;