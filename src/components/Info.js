import React from 'react';
import { Grid, Typography }  from '@mui/material';

const Info = (props) => {
    return (
        <div>
            <Grid
            container spacing={1}
            justifyContent="center"
            alignItems="Center"
            direction="row"
            >   
                <Grid item xs={12} md={5}>
                    <img 
                    src={props.anime.posterImage.medium}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Typography variant="h4">
                            {props.anime.titles.en?
                                props.anime.titles.en:
                                props.anime.titles.en_jp
                            }
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12}>
                            {props.anime.titles.ja_jp}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <str>Synopsis: </str>
                            <br />
                            {props.anime.synopsis}
                            <br />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <str>Release Date: </str>
                        <br />
                        {props.anime.startDate}
                    </Grid>
                    <Grid item xs={12}>
                            <str>Episode Count: </str>
                            <br />
                            {props.anime.episodeCount}
                    </Grid>
                    <Grid item xs={12}>
                        <str>Status: </str>
                        <br />
                        {props.anime.status}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Info;