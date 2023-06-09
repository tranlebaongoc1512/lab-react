import React from 'react'
import { useParams } from 'react-router-dom'
import { Films } from '../shared/ListOfFilms'
import YouTube from 'react-youtube';
import { Grid, Typography, Rating } from '@mui/material'

export default function Detail() {
    const filmId = useParams();
    const film = Films.find(obj => {
        // eslint-disable-next-line
        return obj.id == filmId.id;
    });
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    };
    return (
        <div className='detail-container'>
            <div className='detail-trailer'>
                <YouTube className='detail-youtube' videoId={film.trailer} opts={opts} />
            </div>
            <div className='detail'>
                <Grid container>
                    <Grid item xs={12} xl={6}>
                        <img src={`../${film.image}`} alt={film.title} className='detail-img' />
                    </Grid>
                    <Grid item xs={12} xl={6} sx={{ paddingLeft: '10px' }}>
                        <Typography variant="h5" gutterBottom>{film.title}</Typography>
                        <p>Year: {film.year}</p>
                        <p>Nation: {film.nation}</p>
                        <p>iMDb Rating:</p>
                        <p><Rating name="read-only" precision={0.1} value={film.rating/2} readOnly /> {film.rating}/10</p>
                    </Grid>
                    <Grid item xs={12}>
                        <p className='detail-info'>{film.info}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
