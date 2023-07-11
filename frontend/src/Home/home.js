import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './homeModule.css'
import { ParentContext } from '../App/App.js'
import navMenu from '../Navigation/Header.css'


const Home = () => {

  const { targetData } = useContext(ParentContext)

  return (
    <main>
      <section className={styles.cardsContainer}>
        <h1 id="title">Targets</h1>
        <div className={styles.targets}>
          {
            targetData.map((card) => {
              return (
                  <Link to={`/targetDetails/${card.id}`}>
                    <div className={styles.card} key={`${card.id}`}>
                    <div className={styles.cardImageContainer}>
                      <img className={styles.cardImage} id={`${card.name}`} src={card.img_url} alt={`${card.name}`} />
                    </div>
                    <p className={styles.cardTitle}>{`${card.name}`}</p>
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