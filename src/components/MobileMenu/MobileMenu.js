import { Link } from 'react-router-dom';
import icon from '../../images/profile.svg';

export default function MobileMenu({ isOpen, onClose }) {
   return(
    <div className={`mobile ${isOpen && 'mobile_opened'}`}>
      <nav className='mobile__nav'>
        <Link to='/' className='mobile__link' onClick={onClose}>Главная</Link>
        <Link to='/movies' className='mobile__link' onClick={onClose}>Фильмы</Link>
        <Link to='/saved-movies' className='mobile__link' onClick={onClose}>Сохранённые фильмы</Link>
      </nav>
      <Link to="/profile" className='mobile__profile' onClick={onClose}>
          <img src={icon} alt='Иконка' className='navigation__login__icon'/>
      </Link>
      <button type='button' className='mobile__close-button' onClick={onClose}></button>
    </div>
   )
}