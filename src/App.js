import React, { useEffect, useState } from 'react';
import animeimage from './/images/animeimage.jpg'
import './App.css';
import axios from 'axios'
import Info from './components/Info';
//import TopAnime from './components/TopAnime';


function App() {

  const [anime, currentAnime] = useState(null);
    //const [popularAnime, setPopularAnime] = useState('');
    //const [search, setSearch] = useState("");
    
    // const ratedAnime = 'https://kitsu.io/api/edge/trending/anime';

    //  const getPopularAnime = async () => {
    //   axios.get(`${ratedAnime}`)
    //   .then((response) => {
    //       const topResults = response.data.popularAnime.topResults;
    //       setPopularAnime(topResults);
    //  })
    //    .catch(error => console.error(`Error: ${error}`))
    //  }

    const getAnime = async () => {
        const aniApi = `https://kitsu.io/api/edge/anime/${Math.floor(Math.random() * 10000)}`
        try {
            const result = await axios.get(aniApi)
            currentAnime(result.data.data.attributes)
        } catch (err) {
            const backupAnime = await axios.get(aniApi)
            getAnime(backupAnime.data.data.attributes)
        }
    }

    useEffect (() => {
        //getPopularAnime();
        getAnime();
    }, [])

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark" id="mainNav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">LOGO</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navUL">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#" id="navButtons">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search anime" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
    <div>
      <img src={animeimage} alt="Banner" id="headerBackground"></img>
    </div>
    {/* <div>
        <TopAnime popularAnime={popularAnime} />
    </div> */}
    
    <div class="container">
          <h1 class="title">Anime Generator</h1>
              <form id="animeGenerator" class="form">
                            
                  <label>Action</label>
                      <input 
                        type="checkbox" 
                        name="options" 
                        value="action" 
                        id="action"
                        
                        />

                        <label>Adventure</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        value="adventure" 
                        id="adventure"
                        />

                        <label>Comedy</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="comedy"
                        />

                        <label>Drama</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="drama"
                        />

                        <label>Slice of Life</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="sliceOfLife"
                        />

                        <label>Fantasy</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="fantasy"
                        />

                        <label>Romance</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="romance"
                        />

                        <label>Sci-Fi</label>
                        <input 
                        type="checkbox"  
                        name="options" 
                        id="sciFi"
                        />
                      <div>
                        <button onClick={getAnime}>
                          Random Anime
                        </button>
                      </div>

              </form>
          </div>
          <div class="animeInfo">
                {anime ? <Info anime={anime} />: null} 
          </div> 
    </div>
    
  );
}

export default App;
