import React, { useContext, useEffect, useState } from 'react'
import FilmsPresentation from './FilmsPresentation'
import Slider from './Slider'
import { getListOfFilms, getSearchList } from '../api/films'
import LoadingButton from './LoadingButton';
import { TextField, InputAdornment } from '@mui/material';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    const { theme } = useContext(ThemeContext);
    const [listOfFilms, setListOfFilms] = useState([]);
    const [listSlider, setListSlider] = useState([]);
    useEffect(() => {
        async function getLists() {
            const list = await getListOfFilms();
            setListOfFilms(list);
            setListSlider(list);
        }
        getLists();
    }, []);
    const handleSearch = async (event) => {
        const searchList = await getSearchList(event.target.value);
        setListOfFilms(searchList);
    };
    return (
        <>
            {listOfFilms.length !== 0 ? (
                <>
                    <Slider films={listSlider} />
                    <div style={{ textAlign: 'center', paddingTop: '20px' }}>
                        <TextField
                            onChange={handleSearch}
                            label="Search"
                            InputLabelProps={{ style: { color: theme.color } }}
                            InputProps={{
                                style: { color: theme.color },
                                endAdornment: (
                                    <InputAdornment position="end" sx={{ color: theme.color }}>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ background: theme.inputBackground, borderRadius: '4px', width: '40%' }}
                        />
                    </div>
                    <FilmsPresentation films={listOfFilms} />
                </>
            ) : (
                <LoadingButton />
            )}
        </>
    )
}
