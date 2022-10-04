 import React, { useEffect, useState } from 'react';
 import axios from 'axios';
import TopInfo from './TopInfo';

  function TopAnime() {

    const [trendingAnime, getTrendingAnime] = useState(null);

    const getTopAnime = async () => {
        const animeApi = `https://kitsu.io/api/edge/anime/${Math.floor(Math.random() * 10000)}`;
        try {
            const response = await axios.get(animeApi)
            getTrendingAnime(response.data.data.attributes)
        } catch (err) {
            const incaseAnime = await axios.get(animeApi)
            getTopAnime(incaseAnime.data.data.attributes)
        }
    }

    useEffect (() => {
        getTopAnime();
    }, []);



      return (
         <div>
            {trendingAnime ? <TopInfo trendingAnime={trendingAnime} />: null}
        </div>
        
      )
  }

export default TopAnime;