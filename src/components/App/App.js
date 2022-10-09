import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Main/Main.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Profile from "../Profile/Profile.js";
import MobileMenu from "../MobileMenu/MobileMenu.js";
import NotFound from "../NotFound/NotFound.js";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      {/* // <CurrentUserContext.Provider value={currentUser}> */}
      <div className="page__container">
        <Switch>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
          <Route path="/profile">
            <Profile onMobileMenu={handleMenuClick}/>
          </Route>
          <Route path="/movies">
            <Movies onMobileMenu={handleMenuClick}/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies onMobileMenu={handleMenuClick}/>
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default App;