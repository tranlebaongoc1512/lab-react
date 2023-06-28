import React, { useContext, useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid, Typography, Container, Pagination } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { getFilmsByPage } from '../api/films';
import LoadingButton from './LoadingButton';

export default function FilmsPresentation({ films }) {
    const { theme } = useContext(ThemeContext);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(films.length / itemsPerPage);
    const [filmsByPage, setFilmsByPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        async function getLists() {
            const list = await getFilmsByPage(currentPage, itemsPerPage);
            setFilmsByPage(list);
            console.log(list);
        }
        getLists();
    }, [currentPage]);
    // const [film, setFilm] = useState([]);
    const navigate = useNavigate();
    return (
        <>
            {filmsByPage.length !== 0 ? (
                <Container maxWidth='xl' className='component-container'>
                    <Typography variant="h4" gutterBottom>Trendy Movie</Typography>
                    <Grid container spacing={2}>
                        {filmsByPage.map(film => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={film.id} sx={{ textAlign: 'center' }}>
                                    <Card sx={{ background: theme.cardBackground, color: 'inherit' }}>
                                        <CardActionArea onClick={() => navigate(`detail/${film.id}`)}>
                                            <CardMedia
                                                className="card-media"
                                                component="img"
                                                image={film.image}
                                                alt={film.title}
                                                sx={{ height: '500px' }}
                                            />
                                            <CardContent>
                                                <Typography variant='h5' sx={{ fontSize: '18px', height: '70px', textAlign: 'left' }}>
                                                    {film.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        })}
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Pagination className='pagination' variant='outlined' count={totalPages} page={currentPage} onChange={(e, page) => { setCurrentPage(page) }} />
                        </Grid>
                    </Grid>
                </Container>
            ) : (
                <LoadingButton />
            )}
        </>
        // <div className='card-container'>
        //     {films.map(film => {
        //         return (
        //             <div className='collumn' key={film.id}>
        //                 <div className='card'>
        //                     <img className='card-img' src={film.image} alt={film.title} />
        //                     <h3 className='card-title'>{film.title}</h3>
        //                     <button className='card-btn' onClick={() => { setFilm(film) }}>
        //                         <a href='#popup' id='openPopUp'>Detail</a>
        //                     </button>
        //                 </div>
        //             </div>
        //         )
        //     }
        //     )}
        //     <div id='popup' className='overlay'>
        //         <div className='popup'>
        //             <img src={film.image} alt={film.title} />
        //             <h2>{film.title}</h2>
        //             <a className='close' href='#'>&times;</a>
        //             <div className='content'>
        //                 {film.info}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
