import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './homeModule.css'
import { ParentContext } from '../App/App.js'


const Home = () => {

  const { targetData } = useContext(ParentContext)

  return (
    <main>
      <h1>Home Page</h1>
      <section className="cards-container">
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

          {/* onclick */}
          {/* <Link to={"/targetDetails/" + name}>{name}</Link>; */}

      </section>
    </main>
  );
}

export default Home;