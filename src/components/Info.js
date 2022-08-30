import React from 'react';

const Info = (props) => {
    return (
        <div>
            <div>
                <img 
                src={props.anime.posterImage.small}
                />
            </div>
            <div id="enTitle">
                {props.anime.titles.en?
                      props.anime.titles.en:
                      props.anime.titles.en_jp
                }
            </div>
            <div id="animeInformation">
                <div id="jpTitle">
                    {props.anime.titles.ja_jp}
                </div>
                <div id="desc">
                    <str>Synopsis: </str>
                    <br />
                    {props.anime.synopsis}
                    <br />
                </div>
                <div id="releaseDate">
                    <str>Release Date: </str>
                    <br />
                    {props.anime.startDate}
                </div>
                <div id="episodes">
                    <str>Episode Count: </str>
                    <br />
                    {props.anime.episodeCount}
                </div>
                <div id="animeStatus">
                    <str>Status: </str>
                    <br />
                    {props.anime.status}
                </div>
            </div>
            
            {/* <div id="genres">   
                <str>Genres: </str>
                <br />
                {props.anime.related}
            </div> */}
            
        </div>
    )
}

export default Info