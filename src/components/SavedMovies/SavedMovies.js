import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js"

export default function SavedMovies({ onMobileMenu }) {
  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <section className="movies section">
        <SearchForm />
        <MoviesCardList />
      </section>
      <Footer />
    </>
  );
}
