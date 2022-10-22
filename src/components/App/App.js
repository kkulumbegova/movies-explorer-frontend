import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js"
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import MobileMenu from "../MobileMenu/MobileMenu.js";
import NotFound from "../NotFound/NotFound.js";
import mainApi from "../../utils/MainApi.js"
import * as auth from "../../Auth.js";
import ProtectedRoute from "../ProtectedRoute.js";


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isRegister, setRegister] = useState(false);
  const [message, setMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useHistory();

  const handleMenuClick = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if(loggedIn) {
    mainApi
      .getInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }}, [loggedIn]);

  const onRegister = ({ name, email, password }) => {
    auth.register(name, email, password)
      .then(res => {
        return res;
      })
      .then(() => {
        setRegister(true);
        history.push('/signin');
      })
      .catch(() => {
        setRegister(false);
        setMessage('Что-то пошло не так...')
      });
  };

  const onLogin = ({ email, password }) => {
    auth.authorize(email, password)
      .then(res => {
        if(res.token) {
          localStorage.setItem('token', res.token);
          setLoggedIn(true);
          history.push('/movies');
          mainApi.getSavedMovies().then((res) => {
            setSavedMovies(res);
          })
        }
      } 
    )
      .catch(() => {
        setRegister(false);
        setMessage('Что-то пошло не так...');
      });
  };

  const handleUpdateUser = (formData) => {
    mainApi
      .editProfile(formData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardSave = (movie) => {
    mainApi
       .saveMovie(movie)
       .then((res) => {
        setSavedMovies([res, ...savedMovies]);
       })
       .catch((err) => {
        console.log(err);
       })
  }

  const handleDeleteMovie = (movie) => {
    mainApi
      .deleteSavedMovie(movie)
      .then(() => {
        mainApi
          .getSavedMovies()
          .then(res => setSavedMovies(res))
          .catch(err => console.log(err))
        })
      .catch(err => console.log(err))
  }

  const onSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('movies');
    localStorage.removeItem('search');
    localStorage.removeItem('isChecked');
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Switch>
        <Route path="/signup">
          <Register onRegister={onRegister} message={message}/>
        </Route>
        <Route path="/signin">
          <Login onLogin={onLogin} message={message}/>
        </Route>
          <ProtectedRoute loggedIn={loggedIn} path="/profile"
            component={Profile} onMobileMenu={handleMenuClick} onUpdateUser={handleUpdateUser} onSignOut={onSignOut}/>
          <ProtectedRoute loggedIn={loggedIn} path="/movies"
            component={Movies}  movies={movies} setMovies={setMovies} isLoading={isLoading} setIsLoading={setIsLoading} onDeleteMovie={handleDeleteMovie} onMovieSave={handleCardSave} onMobileMenu={handleMenuClick} savedMovies={savedMovies}/>
          <ProtectedRoute loggedIn={loggedIn} path="/saved-movies"
            component={SavedMovies} onMobileMenu={handleMenuClick} savedMovies={savedMovies} onDeleteMovie={handleDeleteMovie}/>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;