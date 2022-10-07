import React from 'react';
import logo from '../../images/logo.svg'
import icon from '../../images/profile.svg';
import { Link, Route, Switch } from 'react-router-dom';

export default function Header({ onMobileMenu }) {
  return (
    <header className="header">
        <Link to='/'>
          <img src={logo} alt="Логотип" className="header__logo" />
        </Link>

      <Switch>
          <Route path={['/movies', '/saved-movies', '/profile']}>
        <nav className='navigation'>
          <ul className='navigation__list'>
           <li><Link  to="/movies" className='navigation__item_link navigation__item_link_bold'>Фильмы</Link></li> 
           <li><Link  to="/saved-movies" className='navigation__item_link navigation__item_link_normal'>Сохраненные фильмы</Link></li>
          </ul>
          <Link to="/profile" className='navigation__login'>
            <img src={icon} alt='Иконка' className='navigation__login__icon'/>
          </Link>
        </nav>
        <button className='navigation-burger' onClick={onMobileMenu}></button>
        </Route>

        <Route exact path="/">
          <div className="auth">
            <Link  to="/signup" className="auth__link">Регистрация</Link>
            <Link to="/signin" className="auth__button">Войти</Link>
          </div>
        </Route>
      </Switch>
    </header>
  );
}