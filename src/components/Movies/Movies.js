import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js"
import { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi.js";

export default function Movies({ onMobileMenu, onMovieSave, savedMovies, onDeleteMovie, isLoading, setIsLoading}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray, setFilteredArray] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [isShort, setShort] = useState(false);
  const [movies, setMovies] = useState([])


useEffect(() => {
  if(localStorage.getItem('movies') && localStorage.getItem('search') && localStorage.getItem('isChecked')) {
    setSearchTerm(localStorage.getItem('search'));
    setFilteredArray( JSON.parse(localStorage.getItem('movies')));
    setIsChecked(localStorage.getItem('isChecked'));
  }
},[])

function searchMovies(movies, searchTerm, isShort) {
  const filteredArray = !isShort ?
    movies.filter(movie => {
     return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase())})
    :
    movies.filter(movie => {
      return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) && movie.duration <= 40})
    setFilteredArray(filteredArray);
    setMessage(filteredArray.length===0 ? "Ничего не найдено" : '')
    localStorage.setItem('search', searchTerm);
    localStorage.setItem('movies', JSON.stringify(filteredArray));
    localStorage.setItem('isChecked', isShort);
  }

const sortArray = () => {
    setIsLoading(true);
      moviesApi
        .getItems()
        .then((movies) => {
          setMovies(movies);
          searchMovies(movies, searchTerm, isShort);
        }
        )
        .catch(() => {
          setFilteredArray([]);
          setMessage('Во время запроса произошла ошибка. Возможно проблема с соединением или сервер недоступен. Подождите немного и попробуйте еще раз');
        })
        .finally(() => setIsLoading(false));
}

const handleCheckBoxClick = (e) => {
  const value = e.target.checked;
  setShort(value);
  searchMovies(movies, searchTerm, value);
}

  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <main className="movies">
        <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isChecked={isChecked} 
        setIsChecked={setIsChecked} 
        sortArray={sortArray}
        onCheckBoxClick={handleCheckBoxClick}
        isShort={isShort}
        isSavedPage={false}
        />
        <MoviesCardList message={message} isSavedPage={false} movies={filteredArray} onMovieSave={onMovieSave} onDeleteMovie={onDeleteMovie} savedMovies={savedMovies} isLoading={isLoading} setIsLoading={setIsLoading}/>
      </main>
      <Footer />
    </>
  );
  }