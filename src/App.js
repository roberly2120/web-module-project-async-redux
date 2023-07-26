import React from 'react';
import './App.css';
import CatFact from './components/CatFact';
import DogImage from './components/DogImage';
import ZipCode from './components/ZipCode';
import RandomJoke from './components/RandomJoke';
import { connect } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';



export const catFactURL = 'https://catfact.ninja/fact'
export const dogImageURL = 'https://dog.ceo/api/breeds/image/random'
export const jokesURL = 'https://official-joke-api.appspot.com/random_joke'
export const zipCodeURL = 'https://api.zippopotam.us/us/' //must enter a zip code after last slash

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Click on a Link to be mildly amused!</h1>
      <nav>
        <div className='nav-links'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="cat-facts">Cat Facts</Link>
          <Link className='link' to="dog-photos">Random Dog Photo</Link>
          <Link className='link' to="zip-code">Zip Code Locations</Link>
          <Link className='link' to="jokes">Random Jokes</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cat-facts' element={<CatFact />} />
        <Route path='dog-photos' element={<DogImage />} />
        <Route path='zip-code' element={<ZipCode />} />
        <Route path='jokes' element={<RandomJoke />} />
      </Routes>
    </div>
  );
}

export default connect(null, {})(App);