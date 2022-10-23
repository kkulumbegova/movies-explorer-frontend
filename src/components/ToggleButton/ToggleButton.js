export default function ToggleButton({ isChecked, onCheck }) {

  return (
    <div className="toggle__container">
      <input type="checkbox" className="toggle-button" onChange={onCheck} value={isChecked}/>
      <label htmlFor="toggle-button" className="toggle-button__label">
        Короткометражки
      </label>
    </div>
  );
}
