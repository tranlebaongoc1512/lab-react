import React, { useContext } from 'react'
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { ThemeContext } from './ThemeContext';

export default function News() {
    const { theme } = useContext(ThemeContext);
    const newsArticles = [
        {
            id: 1,
            title: 'Minions the new Movie',
            image: 'assets/images/minions-banner.jpg',
            description: 'It\'s enough to make a supervillain cry.\n "Minions: The Rise of Gru," the latest film in the "Despicable Me" franchise, was released on July 1 and immediately set the record for most successful premiere during a July 4 weekend, according to IMDb. \nThe film earned $123 million over the four-day opening. The movie premiere also created a stir due to a TikTok trend called “Gentleminions,” a call for moviegoers to attend the film in formalwear and get rambunctious whenever the minions appear onscreen. The trend led to dozens of teens dressed in formalwear moshing and creating disturbances at theaters across the U.K.',
        },
        {
            id: 2,
            title: 'Hotel Transylvania has released part 4!',
            image: 'assets/images/hotel-transylvania-banner.jpg',
            description: 'Hotel Transylvania: Transformania (also known as Hotel Transylvania 4) is a 2022 American computer-animated adventure comedy film produced by Columbia Pictures and Sony Pictures Animation and released by Amazon Studios. \nThe fourth and final installment in the Hotel Transylvania franchise and the sequel to Hotel Transylvania 3: Summer Vacation (2018), the film is directed by Derek Drymon and Jennifer Kluska (in their respective feature-length directorial debuts) from a screenplay by Amos Vernon, Nunzio Randazzo and Genndy Tartakovsky (who directed the prior three films)',
        },
        {
            id: 3,
            title: 'Coco Festival',
            image: 'assets/images/coco-banner.jpg',
            description: 'Do you remember the Disney movie Coco?\n The animated film was released years ago, but I\'ll always remember it for its themes of love, family, and never forgetting the people you\'ve lost. For those of you who have neither seen nor heard about this Disney flick, Coco is an animation inspired by Día de Muertos or Día de los Muertos, one of the most important holidays in Mexico. \nIf you have about two hours to spare, stream Coco on Disney+ and explore the beautiful Mexico with Miguel and his family. Let the magic of the movie move you, as well as teach you about the beautiful tradition of celebrating loved ones who have passed on. I won’t spoil the movie for you, but my only piece of advice is to have a box of tissues nearby in case tears start welling up in your eyes.',
        },
    ];

    return (
        <Container maxWidth="lg" className='component-container'>
            <Typography variant="h4" gutterBottom>Latest News</Typography>
            <Grid container spacing={3}>
                {newsArticles.map((article) => (
                    <Grid item xs={12} sm={6} md={4} key={article.id}>
                        <Card sx={{ background: theme.cardBackground, color: theme.color, marginBottom: '20px' }}>
                            <CardMedia component="img" height="200" image={article.image} alt={article.title} />
                            <CardContent sx={{minHeight: '360px'}}>
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
    )
}
