import React, { useEffect, useState } from 'react'
import FilmsPresentation from './FilmsPresentation'
import Slider from './Slider'
import { getListOfFilms } from '../api/films'
import LoadingButton from './LoadingButton';

export default function Main() {
    const [listOfFilms, setListOfFilms] = useState([]);
    useEffect(() => {
        async function getLists() {
            const list = await getListOfFilms();
            setListOfFilms(list);
        }
        getLists();
    }, []);
    return (
        <>
            {listOfFilms.length !== 0 ? (
                <>
                    <Slider films={listOfFilms} />
                    <FilmsPresentation films={listOfFilms} />
                </>
            ) : (
                <LoadingButton />
            )}
        </>
    )
}
