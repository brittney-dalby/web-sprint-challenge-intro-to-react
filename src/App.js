import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [character, setCharacter] = useState([]);
const [error, setError] = useState("");
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setCharacter(res.data);
    })
    .catch(err => {
      setError("TryAgain!!");
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
    {character.map((character, index) => (
      <Character key={index} character={character} />
    ))}
    <h1 style={{color: 'orange'}}>{error}</h1>
    </div>
  );
};

export default App;
