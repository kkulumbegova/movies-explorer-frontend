import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton.js";

export default function SearchForm({ searchTerm, setSearchTerm, sortArray, onCheckBoxClick, isShort, isDisabled}) {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(!searchTerm) {
      setMessage('Необходимо ввести ключевое слово');
    } else {
      setMessage('');
      sortArray(searchTerm, isShort);
    }
  }

  return (
    <form id="search-form" className="search-form" onSubmit={(onSubmit)}>
      <div className="search">
        <input
          type="search"
          placeholder="Фильм"
          className="search__input"
          value={searchTerm}
          disabled={isDisabled}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onFocus={(e) => {
            setMessage('');
          }}
        ></input>
         <span id="text-error" className="form__input-error">{message}</span>
        <button type="submit" className="search__submit" disabled={isDisabled}></button>
      </div>
      <ToggleButton isChecked={isShort} onCheck={onCheckBoxClick} />
    </form>
  );
}
