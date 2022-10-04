import React from "react";


const TopInfo = (props) => {

    return(
        <div>
            <div>
                <h1>Top Anime Of The Day</h1>
            </div>
            <div>
                <img 
                    src={props.trendingAnime.posterImage.original}
                />
            </div>
        </div>
    );
}

export default TopInfo;