import React, { useContext } from 'react'
import { Container, Typography, TextField, Button, MenuItem, Switch, FormControlLabel } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            problem: 0,
            detail: "",
            agree: false
        },
        onSubmit: async values => {
            // const data = await contact({});
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required").min(2, "Name must be 2 characters or more"),
            email: Yup.string().required("Required").email("Invalid email"),
            phone: Yup.string().required('Phone number is required').matches(/^\d{10}$/, 'Phone number must be 10 digits'),
            problem: Yup.number().integer("Please select valid problem").min(1, 'Please select your problem'),
            detail: Yup.string().required("Required").min(10, "Must be 10 characters or more"),
            agree: Yup.boolean().oneOf([true], "The terms and conditions must be accepted")
        }),

    });
    const { theme } = useContext(ThemeContext);

    return (
        <Container maxWidth="md" className='component-container'>
            <Typography variant="h4" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" paragraph>
                Have any questions, suggestions, or feedback? We'd love to hear from you! Fill out the form below and we'll get
                back to you as soon as possible.
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="What can we help you with?"
                    variant="outlined"
                    fullWidth
                    margin="none"
                    select
                    InputLabelProps={{ style: { color: theme.color } }}
                    SelectProps={{ style: { color: theme.color } }}
                    name="problem"
                    value={formik.values.problem}
                    onChange={formik.handleChange}
                    error={formik.touched.problem && formik.errors.problem}
                >
                    <MenuItem value={1}>Can't find Movie</MenuItem>
                    <MenuItem value={2}>Movie Error</MenuItem>
                    <MenuItem value={3}>Problem with account</MenuItem>
                </TextField>
                <div style={{ height: '25px' }}>
                    {formik.errors.problem && formik.touched.problem && (<Typography variant="caption" color="red">{formik.errors.problem}</Typography>)}
                </div>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="none"
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && formik.errors.name}
                />
                <div style={{ height: '25px' }}>
                    {formik.errors.name && formik.touched.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
                </div>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="none"
                    type="email"
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email}
                />
                <div style={{ height: '25px' }}>
                    {formik.errors.email && formik.touched.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
                </div>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    margin="none"
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && formik.errors.phone}
                />
                <div style={{ height: '25px' }}>
                    {formik.errors.phone && formik.touched.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
                </div>
                <TextField
                    sx={{ background: theme.inputBackground, borderRadius: '4px' }}
                    label="Detail"
                    variant="outlined"
                    fullWidth
                    margin="none"
                    multiline
                    rows={4}
                    InputLabelProps={{ style: { color: theme.color } }}
                    InputProps={{ style: { color: theme.color } }}
                    name="detail"
                    value={formik.values.detail}
                    onChange={formik.handleChange}
                    error={formik.touched.detail && formik.errors.detail}
                />
                <div style={{ height: '25px' }}>
                    {formik.errors.detail && formik.touched.detail && (<Typography variant="caption" color="red">{formik.errors.detail}</Typography>)}
                </div>
                <FormControlLabel
                    control={<Switch />}
                    label="Agree to terms and conditions"
                    name="agree"
                    value={formik.values.agree}
                    onClick={formik.handleChange} />

                <Button type="submit" variant="contained" sx={{ background: theme.inputBackground, color: theme.color, float: 'right' }}>Submit</Button>
                <div style={{ height: '25px' }}>
                    {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
                </div>
            </form>
        </Container>
    )
}
