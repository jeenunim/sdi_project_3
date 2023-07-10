import React, { useState, useEffect, useContext, createContext } from 'react';
import Home from '../Home/home'

export const targetDetailsContext = createContext();

const DataRequestTarget = () => {

const [threatCard, setThreatCard] = useState([]);

//useEffect where we get data ->
const testArray = [
  {
    id: "t54",
    img: "https://wiki.wgcdn.co/images/4/4d/AnnoR40_T-54.png",
    details: "tank"
  },
  {
    id: "",
    img: "image",
    details: "something"
  }
]

// eventually we set it from the data that we get from our useEffect
setThreatCard(testArray)

return (
  <targetDetailsContext.Provider value = { { threatCard } } >
  <Home />
  </targetDetailsContext.Provider>
);

}

export default DataRequestTarget;