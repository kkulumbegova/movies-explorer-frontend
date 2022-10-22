import { useForm } from "react-hook-form";
import ToggleButton from "../ToggleButton/ToggleButton.js";

export default function SearchForm({ searchTerm, setSearchTerm, sortArray, onCheckBoxClick, isShort }) {
  const { 
    register, 
    formState: {errors, isValid},
    handleSubmit
  } = useForm({
    mode: 'all'
  });

  const onSubmit = () => {
    if(isValid) {
      sortArray();
    }
  }
  
  return (
    <form id="search-form" className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="search">
        <input
          type="search"
          placeholder="Фильм"
          className="search__input"
          {...register('form', {
            required: "Нужно ввести ключевое слово"
          })}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)}}
        ></input>
         {errors?.form && <span id="text-error" className="form__input-error">{errors?.form?.message}</span>}
        <button type="submit" className="search__submit"></button>
      </div>
      <ToggleButton isChecked={isShort} onCheck={onCheckBoxClick} />
    </form>
  );
}
