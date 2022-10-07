import { Link } from "react-router-dom";
import Header from "../Header/Header.js"

export default function Profile({onMobileMenu}) {
  return (
    <>
      <Header onMobileMenu={onMobileMenu}/>
      <section className="profile">
        <h1 className="profile__header">Привет, Виталий!</h1>
        <form action="#" name="place" className="profile__form">
          <div className="profile__field profile__field_border">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              className="profile__input"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              required
            />
          </div>
          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              className="profile__input"
              placeholder="E-mail"
              required
            />
          </div>
          <button type="submit" name="submit" className="profile__submit">
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__link">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}
