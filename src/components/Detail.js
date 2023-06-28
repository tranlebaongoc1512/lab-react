import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { Grid, Typography, Rating, Button } from '@mui/material'
import { deleteFilm, getFilm } from '../api/films';
import Swal from 'sweetalert2'
import useDocumentTitle from './hooks/useDocumentTitle';
import useAuth from './hooks/useAuth';
import LoadingButton from './LoadingButton';
import { ThemeContext } from './ThemeContext';

export default function Detail() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const filmId = useParams();
    const [film, setFilm] = useState({});
    useEffect(() => {
        async function getFilmData() {
            const film = await getFilm(filmId.id);
            setFilm(film);
        }
        getFilmData();
    }, [filmId])
    useDocumentTitle(film.title);
    // const film = Films.find(obj => {
    //     // eslint-disable-next-line
    //     return obj.id == filmId.id;
    // });
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            background: theme.cardBackground,
            color: theme.color,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteFilm(filmId.id);
                Swal.fire(
                    'Deleted!',
                    'Film has been deleted.',
                    'success'
                );
                navigate('/');
            }
        })
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
        <>
            {film?.title ?
                (
                    <div className='detail-container'>
                        <div className='detail-trailer'>
                            <YouTube className='detail-youtube' videoId={film.trailer} opts={opts} />
                        </div>
                        <div className='detail'>
                            <Grid container>
                                <Grid item xs={12} xl={6}>
                                    <img src={film.image} alt={film.title} className='detail-img' />
                                </Grid>
                                <Grid item xs={12} xl={6} sx={{ paddingLeft: '10px' }}>
                                    <Typography variant="h5" gutterBottom>{film.title}</Typography>
                                    <p>Year: {film.year}</p>
                                    <p>Nation: {film.nation}</p>
                                    <p>iMDb Rating:</p>
                                    <p><Rating name="read-only" precision={0.1} value={film.rating / 2} readOnly /> {film.rating}/10</p>
                                    {user && (
                                        <Grid container>
                                            <Grid item xs={6} sx={{ padding: '0 5px' }}>
                                                <Button className='btn' onClick={() => navigate(`/update-film/${film.id}`)} variant="contained" fullWidth sx={{ background: "#FFFFFF", color: "#000000" }} >
                                                    Edit
                                                </Button>
                                            </Grid>
                                            <Grid item xs={6} sx={{ padding: '0 5px' }}>
                                                <Button className='btn' onClick={handleDelete} variant="contained" fullWidth sx={{ background: "#FFFFFF", color: "#000000" }}>
                                                    Delete
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <p className='detail-info'>{film.info}</p>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                ) : (
                    <LoadingButton />
                )
            }
        </>
    )
}
