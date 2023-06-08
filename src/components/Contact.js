import React, { useContext } from 'react'
import { Container, Typography, TextField, Button, MenuItem } from '@mui/material';
import { ThemeContext } from './ThemeContext';

export default function Contact() {
    const { theme } = useContext(ThemeContext);
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Container maxWidth="md" sx={{ marginTop: '30px' }}>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" paragraph>
                Have any questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below and we'll get
                back to you as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="What can we help you with?"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    select
                    InputLabelProps={{ style: { color: theme.color } }}
                    SelectProps={{ style: { color: theme.color } }}
                >
                    <MenuItem value="1">Can't find Movie</MenuItem>
                    <MenuItem value="2">Movie Error</MenuItem>
                    <MenuItem value="3">Problem with account</MenuItem>
                </TextField>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                />
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    type="email"
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                />
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Detail"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                />
                <Button type="submit" variant="contained" sx={{ background: theme.inputBackground, color: theme.color }}>Submit</Button>
            </form>
        </Container>
    )
}
