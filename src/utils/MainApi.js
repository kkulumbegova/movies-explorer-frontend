import { BASE_URL } from "../utils/constants.js"

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Ошибка')
  }
  //информация о пользователе
  getInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    })
      .then(this._handleResponse);
  }
  //получение массива с карточками
  getItems() {
    return fetch(`${this.baseUrl}/cards`, {
      credentials: 'include',
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then(this._handleResponse);
  }

  //редактирование профиля
  editProfile(formData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      })
    })
    .then(this._handleResponse);
  }

  saveMovie(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
      })
    })
    .then(this._handleResponse);
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      credentials: 'include',
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    })
    .then(this._handleResponse);
  }

  deleteSavedMovie(movie) {
    return fetch(`${this.baseUrl}/movies/${movie}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
    .then(this._handleResponse);
  }
  
}


const apiMovie = new Api({
    baseUrl: 'https://api.kulumbegova.movies.nomoredomains.club',
  })
  
  export default apiMovie;