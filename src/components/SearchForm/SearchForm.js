import ToggleButton from "../ToggleButton/ToggleButton.js";

export default function SearchForm() {
  return (
    <form id="search-form" method="post" className="search-form">
      <div className="search">
        <input
          type="search"
          placeholder="Фильм"
          className="search__input"
          required
        ></input>
        <button type="submit" className="search__submit"></button>
      </div>
      <ToggleButton />
    </form>
  );
}
