import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'

export default function Login() {
  return (
    <section className="login">
      <img src={logo} alt='Логотип' className="register__logo"/>
      <h1 className="form__header">Рады видеть!</h1>
      <form action="#" name="place" className="form">
      <div className="field">
        <label className="form__description">Email</label>
        <input
          type="email"
          id="email"
          name="name"
          className="form__input"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="email-error" className="form__input-error"></span>
      </div>
      <div className="field">
        <label className="form__description">Пароль</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form__input"
          required
        />
        <span id="password-error" className="form__input-error"></span>
      </div>
        <button
          type="submit"
          name="submit"
          className="form__submit form__submit_login"
        >
          Войти
        </button>
      </form>
      <p className="register__link">Еще не зарегистрированы?
        <Link to="/signup" className="login__link login__link_footer">
           Регистрация
        </Link>
      </p>
    </section>
  );
}