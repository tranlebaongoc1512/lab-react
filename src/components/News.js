import React, { useContext, useState, useEffect } from 'react'
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { getListOfNews } from '../api/news';
import LoadingButton from './LoadingButton';

export default function News() {
    const [news, setNews] = useState([]);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        async function getLists() {
            const list = await getListOfNews();
            setNews(list);
        }
        getLists();
    }, []);
    return (
        <>
            {news.length !== 0 ? (
                <Container maxWidth="lg" className='component-container'>
                    <Typography variant="h4" gutterBottom>Latest News</Typography>
                    <Grid container spacing={3}>
                        {news.map((article) => (
                            <Grid item xs={12} sm={6} md={4} key={article.id}>
                                <Card sx={{ background: theme.cardBackground, color: theme.color, marginBottom: '20px' }}>
                                    <CardMedia component="img" height="200" image={article.image} alt={article.title} />
                                    <CardContent sx={{ minHeight: '360px' }}>
                                        <Typography variant="h5" component="div" gutterBottom>{article.title}</Typography>
                                        <Typography variant="body2" sx={{ textAlign: 'justify' }} >
                                            {article.description.split('\n').map((paragraph, index) => (
                                                <React.Fragment key={index}>
                                                    {paragraph}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            ) : (
                <LoadingButton />
            )}
        </>
    )
}
