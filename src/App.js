import React from 'react';
//import animeimage from './/images/animeimage.jpg'
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import RandomAnime from './components/RandomAnime';
import Nav from './components/Nav';
import Home from './components/Home';
// import ForTopAnime from './components/ForTopAnime';


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/randomanime" exact element={<RandomAnime />} />
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;
