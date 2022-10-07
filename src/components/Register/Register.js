import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Register() {
  return (
    <section className="register">
      <img src={logo} alt="Логотип" className="register__logo" />
      <h3 className="form__header">Добро пожаловать!</h3>
      <form action="#" name="place" className="form">
        <div className="field">
          <label for="text_name" className="form__description">
            Имя
          </label>
          <input
            type="text"
            id="text_name"
            name="text_name"
            className="form__input"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="text-error" className="form__input-error">
          </span>
        </div>
        <div className="field">
        <label for="email" className="form__description">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="name"
          className="form__input"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="email-error" className="form__input-error">
        </span>
        </div>
        <div className="field">
        <label for="password" className="form__description">
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form__input"
          required
        />
        <span id="password-error" className="form__input-error">
          Что-то пошло не так...
        </span>
        </div>
        <button
          type="submit"
          name="submit"
          className="form__submit form__submit_register"
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="register__link">
        Уже зарегистрированы?
        <Link to="/signin" className="login__link login__link_footer">
          Войти
        </Link>
      </p>
    </section>
  );
}
