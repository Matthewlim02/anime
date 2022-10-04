import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Info from './Info';



function RandomAnime() {

    const [anime, currentAnime] = useState(null);

    const getAnime = async () => {
        const kitsuApi = `https://kitsu.io/api/edge/anime/${Math.floor(Math.random() * 10000)}`
        try {
            const result = await axios.get(kitsuApi)
            currentAnime(result.data.data.attributes)
        } catch (err) {
            const backupAnime = await axios.get(kitsuApi)
            getAnime(backupAnime.data.data.attributes)
        }
    }

    useEffect (() => {
        getAnime();
    }, []);

    return (
        <div>
            
            <div class="animeInfo">
                {anime ? <Info anime={anime} />: null} 
            </div>
            <Button variant="outlined" onClick={getAnime}>
                Generate
            </Button>
        </div>
    );
}

export default RandomAnime;