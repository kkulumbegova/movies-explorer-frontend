export default function ToggleButton({ isChecked, onCheck }) {

  return (
    <div className="toggle__container">
      <input type="checkbox" className="toggle-button" onClick={onCheck} checked={isChecked} readOnly/>
      <label htmlFor="toggle-button" className="toggle-button__label">
        Короткометражки
      </label>
    </div>
  );
}
