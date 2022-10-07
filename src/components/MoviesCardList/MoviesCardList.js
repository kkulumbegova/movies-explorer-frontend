import MoviesCard from "../MoviesCard/MoviesCard.js"

export default function MoviesCardList() {
    return (
     <>
      <ul className="movies__list">
        <MoviesCard/>
      </ul>
      <button className='movies__add-button'>Ещё</button>
    </>
    )
}