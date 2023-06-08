import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Grid, Typography, Container, Pagination } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function FilmsPresentation({ films }) {
    const { theme } = useContext(ThemeContext);
    const itemsPerPage = 6;
    // const [film, setFilm] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, films.length);
    const currentFilms = films.slice(startIndex, endIndex);
    const totalPages = Math.ceil(films.length / itemsPerPage);
    return (
        <Container maxWidth='xl' sx={{ marginTop: '30px' }}>
            <Typography variant="h4" gutterBottom>Trendy Movie</Typography>
            <Grid container spacing={2}>
                {currentFilms.map(film => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={film.id}>
                            <Card sx={{ background: theme.cardBackground, color: 'inherit', width: '200px', margin: '0px auto 10px auto' }}>
                                <CardActionArea onClick={() => navigate(`detail/${film.id}`)}>
                                    <CardMedia
                                        component="img"
                                        height="280"
                                        image={film.image}
                                        alt={film.title}
                                    />
                                    <CardContent>
                                        <Typography variant='h5' sx={{ minHeight: '80px', fontSize: '18px' }}>
                                            {film.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                })}
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Pagination className='pagination' variant='outlined' sx={{ marginBottom: "20px" }} count={totalPages} page={currentPage} onChange={handlePageChange} />
                </Grid>
            </Grid>
        </Container>
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