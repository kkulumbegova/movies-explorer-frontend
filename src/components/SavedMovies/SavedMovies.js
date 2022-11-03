import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import { useEffect, useState } from "react";
import { MOVIES_SERVER_URL } from '../../utils/constants.js'

export default function SavedMovies({ onMobileMenu, savedMovies, onDeleteMovie }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSavedArray, setFilteredSavedArray] = useState(savedMovies);
  const [isChecked, setIsChecked] = useState(false);
  const [isShort, setShort] = useState(false);

useEffect(() => {
  searchMovies(searchTerm, isShort)
}, [savedMovies])

  function searchMovies(searchTerm, isShort) {
    !isShort ?
      setFilteredSavedArray(savedMovies.filter(movie => {
       return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase())}
      ))
      :
      setFilteredSavedArray(savedMovies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()) && movie.duration <= 40 }
      ))
    }
    const sortArray = () => {
      searchMovies(searchTerm, isShort);
  }

  const handleCheckBoxClick = (e) => {
    const value = e.target.checked;
    setShort(value);
    searchMovies(searchTerm, value);
  }
  
  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <main className="movies section">
        <SearchForm 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isChecked={isChecked} 
        setIsChecked={setIsChecked} 
        sortArray={sortArray}
        onCheckBoxClick={handleCheckBoxClick}
        isShort={isShort} />
        <MoviesCardList movies={filteredSavedArray} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} isSavedPage={true}/>
      </main>
      <Footer />
    </>
  );
}
