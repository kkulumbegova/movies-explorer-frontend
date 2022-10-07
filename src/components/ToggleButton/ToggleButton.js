export default function ToggleButton() {
  return (
    <div className="toggle__container">
      <input type="checkbox" className="toggle-button" />
      <label for="toggle-button" className="toggle-button__label">
        Короткометражки
      </label>
    </div>
  );
}
