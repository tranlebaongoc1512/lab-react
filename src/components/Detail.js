import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { Grid, Typography, Rating, Button } from '@mui/material'
import { deleteFilm, getFilm } from '../api/films';

export default function Detail() {
    const navigate = useNavigate();
    const filmId = useParams();
    const [film, setFilm] = useState({});
    useEffect(() => {
        async function getFilmData() {
            const film = await getFilm(filmId.id);
            setFilm(film);
        }
        getFilmData();
    }, [filmId])
    // const film = Films.find(obj => {
    //     // eslint-disable-next-line
    //     return obj.id == filmId.id;
    // });
    const handleDelete = async () => {
        await deleteFilm(filmId.id);
        navigate('/');
    }
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
                        <p><Rating name="read-only" precision={0.1} value={film.rating / 2} readOnly /> {film.rating}/10</p>
                        <Grid container>
                            <Grid item xs={6} sx={{ padding: '0 5px' }}>
                                <Button onClick={() => navigate(`/update-film/${film.id}`)} variant="contained" fullWidth sx={{ background: "#FFFFFF", color: "#000000" }} >
                                    Edit
                                </Button>
                            </Grid>
                            <Grid item xs={6} sx={{ padding: '0 5px' }}>
                                <Button onClick={handleDelete} variant="contained" fullWidth sx={{ background: "#FFFFFF", color: "#000000" }}>
                                    Delete
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p className='detail-info'>{film.info}</p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
