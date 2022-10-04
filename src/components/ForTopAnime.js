//  import React, { useEffect, useState } from 'react';
//  import axios from 'axios'
//  import TopAnime from './TopAnime';


//  function ForTopAnime() { 
//      const [popularAnime, setPopularAnime] = useState(null);

//      const getPopularAnime = async () => {
//          const ratedAnime = 'https://kitsu.io/api/edge/trending/anime';
//          try {
//              const resultAnime = await axios.get(ratedAnime)
//              setPopularAnime(resultAnime.data.data.attributes)
//          } catch (err) {
//              const incaseAnime = await axios.get(ratedAnime)
//              getPopularAnime(incaseAnime.data.data.attributes)
//          }
//      }

//      useEffect (() => {
//          getPopularAnime()
//      }, [])

//      return (
//          <div>
//              <div>
//                  {popularAnime ? <TopAnime popularAnime={popularAnime} />: null} 
//              </div>
//          </div>
//      )
//  }

//  export default ForTopAnime