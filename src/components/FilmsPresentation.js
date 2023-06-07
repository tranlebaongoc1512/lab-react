import React, { useState } from 'react'

export default function FilmsPresentation({ films }) {
    const [film, setFilm] = useState([]);
    return (
        <div className='card-container'>
            {films.map(film => {
                return (
                    <div className='collumn' key={film.id}>
                        <div className='card'>
                            <img className='card-img' src={film.image} alt={film.title} />
                            <h3 className='card-title'>{film.title}</h3>
                            <button className='card-btn' onClick={() => { setFilm(film) }}>
                                <a href='#popup' id='openPopUp'>Detail</a>
                            </button>
                        </div>
                    </div>
                )
            }
            )}
            <div id='popup' className='overlay'>
                <div className='popup'>
                    <img src={film.image} alt={film.title} />
                    <h2>{film.title}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {film.info}
                    </div>
                </div>
            </div>
        </div>
    )
}
