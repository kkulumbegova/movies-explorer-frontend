import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js"
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi.js";
import { SHORT_FILTER_MINUTES_DURATION } from "../../utils/constants.js";


export default function Movies({ onMobileMenu, onMovieSave, savedMovies, onDeleteMovie, isLoading, setIsLoading }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [message, setMessage] = useState('');
  const [isShort, setShort] = useState(false);
  const [isDisabled, setDisabled] = useState(false);

useEffect(() => {
  if(localStorage.getItem('movies') && localStorage.getItem('search') && localStorage.getItem('isShort')) {
    setSearchTerm(localStorage.getItem('search'));
    setFilteredArray( JSON.parse(localStorage.getItem('movies')));
    setShort(JSON.parse(localStorage.getItem('isShort')));
  }
},[])

function searchMovies(searchTerm, isShort) {
  if(!localStorage.getItem('moviesMoviesFromApi')) {
    setIsLoading(true);
    setDisabled(true);
    moviesApi
      .getItems()
      .then((movies) => {
        localStorage.setItem('moviesMoviesFromApi', JSON.stringify(movies));
        filter(movies, searchTerm, isShort )
      }
      )
      .catch(() => {
        setMessage('Во время запроса произошла ошибка. Возможно проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
      })
      .finally(() => {
        setIsLoading(false);
        setDisabled(false)
      });
  } else {
    const movies = JSON.parse(localStorage.getItem('moviesMoviesFromApi'));
    filter(movies, searchTerm, isShort )
  }
}

  const filter = (moviesFromApi, searchTerm, isShort) => {
    const filteredArray = !isShort ?
    moviesFromApi.filter(movie => {
     return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase())})
    :
    moviesFromApi.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) && movie.duration <= 40 })
    setFilteredArray(filteredArray);
    setMessage(filteredArray.length===0 ? "Ничего не найдено" : '')
    localStorage.setItem('search', searchTerm);
    localStorage.setItem('movies', JSON.stringify(filteredArray));
    localStorage.setItem('isShort', isShort);
  }

const handleCheckBoxClick = () => {
  const value = !isShort;
  setShort(value);
  searchMovies(searchTerm, value);
}

  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <main className="movies">
        <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortArray={searchMovies}
        onCheckBoxClick={handleCheckBoxClick}
        isShort={isShort}
        isDisabled={isDisabled}
        isSavedPage={false}
        />
        <MoviesCardList message={message} isSavedPage={false} movies={filteredArray} onMovieSave={onMovieSave} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} isLoading={isLoading} setIsLoading={setIsLoading}
        />
      </main>
      <Footer />
    </>
  );
  }