import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'

const [threatCard, setThreatCard] = useState([]);

const Home = () => {

// export const threatCardContext= React.createContext();
// what is the onclick giving back -> provide feedback to backend
// is it not giving back entire object?
// what makes sense for an endpoint

//set threat card on home page and console log that out

/*
useEffect(() => {

})
 */



// // handle on click
// const handleOnClick = (selectedCard) => {
//   //on click we want to setThreatCard to the card that we clicked
//   //when we click we want all of the information to populate the threat page
//   //information we need:
//   //img, target details then we also want what is good against that target

//   //we setThreatCard information here?
//   setThreatCard([selectedCard]) //when we setThreatCard
// }

  return (
    <main>
      <h1>Home Page</h1>
      <section className="cards-container">
        <div className="card">
          <h2>Tank T-54</h2>
          <p>Threats</p>
          <Link to="/targetDetails"><img id="t54" src="https://wiki.wgcdn.co/images/4/4d/AnnoR40_T-54.png" alt="Card 1" /></Link>
        {/* onclick */}

        </div>




{/*
        <div className="card">

          <h2>Card 2</h2>
          <p>Weapons</p>
          <Link to="/targetDetails"> <img src="https://wiki.wgcdn.co/images/4/4d/AnnoR40_T-54.png" alt="Card 2" /></Link>
        </div>

        <div className="card">

          <h2>Card 3</h2>
          <p>Details</p>
          <Link to="/targetDetails"> <img src="https://miniart-models.com/wp-content/uploads/2016/07/0431.jpg" alt="Card 3" /></Link>
        </div> */}

      </section>
      {/* <threatCardContext.Provider value={ {target} }>
          </>
      </threatCardContext.Provider> */}
    </main>
  );
}

export default Home;