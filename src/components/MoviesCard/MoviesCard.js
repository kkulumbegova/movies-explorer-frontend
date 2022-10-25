import converter from '../../utils/Converter.js'

export default function MoviesCard({country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId,  id, key, onMovieSave, savedMovies, onDeleteMovie, isSavedPage, movie }) {

const isSaved = savedMovies.some((el) => el.movieId === movieId);

function handleClick() {
  if(isSaved) {
    handleDeleteMovie()
  } else {
    handleSaveClick()
  }
}

function handleSaveClick() {
  onMovieSave({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId, id, isSaved });
}

function handleDeleteMovie() {
  if(!isSavedPage) {
    const movieToDelete = savedMovies.find((el) => el.movieId === movieId);
    onDeleteMovie(movieToDelete._id)
  } else {
    onDeleteMovie(movie._id);
  }

}
// // Создаём переменную, которую после зададим в `className` для кнопки лайка
const isSavedButtonClassName = `movie__button ${
  isSaved ? "movie__button_saved" : "movie__button_save"
}`;

  return (
    <>
      <li className="movie__item" key={isSavedPage ? key : id}>
        <div className="movie__description">
          <h2 className="movie__name">{nameRU}</h2>
          <p className="movie__duration">{converter(duration)}</p>
        </div>
        <a href={trailerLink} target='__blank'><img src={image} alt="Карточка фильма" className="movie__img" /></a>
        {!isSavedPage && 
        <button
          type="button"
          className={isSavedButtonClassName}
          onClick={handleClick}
        ></button>
        }
        {isSavedPage && 
        <button
          type="button"
          className="movie__button movie__button_delete"
          onClick={handleDeleteMovie}
        ></button>
        }
      </li>
    </>
  )
  }