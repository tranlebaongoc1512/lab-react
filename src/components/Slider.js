import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider({ films }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = films.length;

  let autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }
  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  }

  function autoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, [])

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line
  }, [currentSlide])

  return (
    <div className='slider'>
      {films.map((film, index) => (
        <div className={index === currentSlide ? 'slide current-slide' : 'slide'} key={index}>
          {index === currentSlide && <img src={film.banner} alt={film.title} />}
        </div>
      ))}
      <div className='slide-left'>
        <FontAwesomeIcon icon={faAngleLeft} onClick={previousSlide} />
      </div>
      <div className='slide-right'>
        <FontAwesomeIcon icon={faAngleRight} onClick={nextSlide} />
      </div>
    </div>
  )
}
