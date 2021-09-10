
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [starWarsData, setStarWarsData] = useState([])
const [error, setError] = useState(null);

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setStarWarsData(res.data)
    })
    .catch(err => {
      setError(`Please try again later`) 
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {starWarsData.map(item => {
        return <Character data={item} />
      })}
    </div>
  );
}

export default App;
