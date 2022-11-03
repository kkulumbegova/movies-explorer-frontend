import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import Preloader from '../Preloader/Preloader.js';
import {MOVIES_SERVER_URL} from '../../utils/constants.js'

export default function MoviesCardList({ movies, isLoading, onMovieSave, savedMovies, onDeleteMovie, isSavedPage, message }) {
const [cardsPerPage, setCardsPerPage] = useState(3);
const [addCard, setAddCard] = useState(3);
const [windowSize, setWindowSize] = useState(window.innerWidth);

const isAllCards = movies.length <= cardsPerPage;
const addButtonClassName = `movies__add-button ${isAllCards ? 'movies__add-button_hidden' : 'movies__add-button_visible'}`

function handleResize() {
  setWindowSize(window.innerWidth);
}

useEffect(() => {
  checkWindowSize();
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize)
},[movies])


function handleLoadMoreCards() {
  checkWindowSize();
  setCardsPerPage(cardsPerPage + addCard);
}

function checkWindowSize() {
  setWindowSize(window.innerWidth);
  if(windowSize > 768) {
    setCardsPerPage(12);
    setAddCard(3);
  } else if (windowSize > 481) {
    setCardsPerPage(8);
    setAddCard(2);
  } else if (windowSize < 480) {
    setCardsPerPage(5);
    setAddCard(2);   
  }
}

    return (
    <>
    {!isSavedPage &&  (
       <>
        {isLoading && <Preloader/>}
        {!isLoading && movies.length === 0 && <p className="movie__nothing">{message}</p>}
       <ul className="movies__list">
        {movies.slice(0, cardsPerPage).map((movie) => (
           <MoviesCard
           nameRU={movie.nameRU}
           nameEN={movie.nameEN}
           trailerLink={movie.trailerLink}
           image={`${MOVIES_SERVER_URL}${movie.image.url}`}
           duration={movie.duration}
           movieId={movie.id}
           key={movie.id}
           country={movie.country}
           director={movie.director}
           year={movie.year}
           description={movie.description}
           thumbnail={`${MOVIES_SERVER_URL}${movie.image.formats.thumbnail.url}`}
           onMovieSave={onMovieSave}
           savedMovies={savedMovies}
           onDeleteMovie={onDeleteMovie}
           isSavedPage={isSavedPage}
           >
        </MoviesCard>
        ))
      }
      </ul>
      <button className={addButtonClassName} onClick={handleLoadMoreCards}>Ещё</button>
       </>
    )}
      {isSavedPage &&  (
       <>
       <ul className="movies__list">
        {movies.length === 0 && <p className="movie__nothing">Нет сохраненных фильмов</p>}
        {movies.slice(0, cardsPerPage).map((movie) => (
           <MoviesCard
           nameRU={movie.nameRU}
           nameEN={movie.nameEN}
           trailerLink={movie.trailerLink}
           image={movie.image}
           duration={(movie.duration)}
           movieId={movie.id}
           key={movie._id}
           country={movie.country}
           director={movie.director}
           year={movie.year}
           description={movie.description}
           thumbnail={movie.thumbnail}
           onMovieSave={onMovieSave}
           savedMovies={savedMovies}
           onDeleteMovie={onDeleteMovie}
           isSavedPage={isSavedPage}
           id={movie._id}
           movie={movie}
           >
        </MoviesCard>
        ))}
      </ul>
      <button className={addButtonClassName} onClick={handleLoadMoreCards}>Ещё</button>
       </>
    )}  
    </>
  )
}