import React from "react";
import animeimage from './images/animeimage.jpg';
import RandomFilter from './RandomFilter';
import TopAnime from "./TopAnime";



function Home() {
    return(
        <div>
            <div>
                <img src={animeimage} alt="Banner" id="headerBackground"></img>
            </div>
            <div>
            <div>
                <TopAnime />
            </div>
            </div>
            <div class="text-white">
                <h3>
                    Welcome to my random anime generator!
                </h3>
                <p>
                    This website allows you to randomly generate anime recommendations. Click the button below to get started.
                </p>
            </div>
            <div>
                <RandomFilter />
            </div> 
        </div>
    );
}

export default Home;