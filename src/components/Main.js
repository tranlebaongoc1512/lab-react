import React from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPresentation from './FilmsPresentation'
import Slider from './Slider'

export default function Main() {
    return (
        <>
            <Slider films={Films} />
            <FilmsPresentation films={Films} />
        </>
    )
}
