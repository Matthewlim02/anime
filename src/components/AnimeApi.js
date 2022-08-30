// import React, { useEffect, useState } from 'react';
// import axios from 'axios'


// function AnimeApi() {
//     const [anime, currentAnime] = useState(null);
//     const [popularAnime, setPopularAnime] = useState([]);
//     const [search, setSearch] = useState("");

//     const getAnime = async () => {
//         const aniApi = `https://kitsu.io/api/edge/anime/${Math.floor(Math.random() * 10000)}`
//         try {
//             const result = await axios.get(aniApi)
//             currentAnime(result.data.data.attributes)
//         } catch (err) {
//             const backupAnime = await axios.get(aniApi)
//             getAnime(backupAnime.data.data.attributes)
//         }
//     }

//     useEffect (() => {
//         getAnime()
//     }, [])

//     return (
//         <div>
//             <div>
//                 <button onClick={getAnime}>
//                     Random Anime
//                 </button>
//             </div>
//             <div>
//                 {anime ? <Info anime={anime} />: null} 
//             </div>
            
//         </div>
//     )
// }

// export default AnimeApi